import Box from "../../atoms/Box";
import Chip from "../../atoms/Chip";
import Input from "../../atoms/Input";
import React, { useContext, useEffect, useRef, useState } from "react";
import Row from "../../atoms/Row";
import stringSimilarity from "string-similarity";
import theme from "../../theme";
import ThemeContext from "../../ThemeContext";
import Typography from "../../atoms/Typography";
import { IconProps } from "../../atoms/Icon";
import {
  Animated,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  ViewStyle,
  TouchableWithoutFeedback,
  TextInputProps,
  View,
} from "react-native";

function Dropdown(props: DropdownProps) {
  const {
    containerStyle,
    defaultValues = [],
    error = false,
    menuItemStyle,
    menuStyle,
    feedback,
    multiple = false,
    scrolling,
    label,
    onChange,
    onItemPress,
    onSearchChange,
    options,
    placeholder,
    search = false,
    renderSearchInput,
    searchContainerStyle,
    selectedItemsContainerStyle,
  } = props;
  const [selectedItems, setSelectedItems] = useState<Option[]>(defaultValues);
  const [searchQuery, setSearchQuery] = useState("");
  const [visible, setVisible] = useState(false);
  const [layout, setLayout] = useState<any>({});

  const ref = useRef<View>(null);

  const borderAnim = useRef(new Animated.Value(0)).current;
  const colorAnim = useRef(new Animated.Value(0)).current;
  const floatAnim = useRef(new Animated.Value(selectedItems.length !== 0 ? -10 : 0)).current;
  const fontSizeAnim = useRef(new Animated.Value(selectedItems.length !== 0 ? 12 : 14)).current;

  const { mode } = useContext(ThemeContext);

  useEffect(() => {
    if (typeof search !== "boolean") {
      setSearchQuery(search);
    }
  }, [search]);

  const handleLayout = () => {
    ref.current?.measure((x, y, w, h, px, py) => {
      setLayout({ x, y, w, h, px, py });
    });
  };

  /**
   * Setter
   */
  const measure = () => {
    ref.current?.measure((x, y, w, h, px, py) => {
      setLayout({
        x,
        y,
        w,
        h,
        px,
        py,
      });
    });
  };

  const handleFocus = () => {
    Animated.parallel([
      Animated.timing(colorAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(borderAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(fontSizeAnim, {
        toValue: 12,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(floatAnim, {
        toValue: -10,
        duration: 400,
        useNativeDriver: false,
      }),
    ]).start();

    setVisible(true);
  };

  const handleBlur = () => {
    Animated.parallel([
      Animated.timing(colorAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(borderAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(fontSizeAnim, {
        toValue: selectedItems.length !== 0 ? 12 : 14,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(floatAnim, {
        toValue: selectedItems.length !== 0 ? -10 : 0,
        duration: 400,
        useNativeDriver: false,
      }),
    ]).start();

    setSearchQuery("");
    setVisible(false);
  };

  const handleSelectItem = (option: Option) => () => {
    if (option.disabled) return;

    let newSelectedItem = [...selectedItems];

    if (!multiple) {
      newSelectedItem = newSelectedItem[0]?.value === option.value ? [] : [option];
    } else {
      const hasItem = selectedItems.some((item) => item.value === option.value);

      if (hasItem) {
        newSelectedItem = selectedItems.filter((item) => item.value !== option.value);
      } else {
        newSelectedItem.push(option);
      }
    }

    onChange?.(newSelectedItem, props);
    onItemPress?.(option, props);
    setSelectedItems(newSelectedItem);
  };

  const handleRemoveItem = (option: Option) => () => {
    onItemPress?.(option, props);

    if (!multiple) {
      return setSelectedItems([]);
    }

    setSelectedItems(selectedItems.filter((item) => item.value !== option.value));
  };

  /**
   * Getter
   */
  const isActive = (value: any) => {
    return selectedItems.some((item) => item.value === value);
  };

  // Renderer
  const renderSelectedItems = () => {
    return (
      <Row
        style={StyleSheet.flatten([
          {
            overflow: "hidden",
            flex: 1,
          },
          selectedItemsContainerStyle,
        ])}
      >
        {selectedItems.map((item) => (
          <Chip
            key={item.value}
            image={item.image}
            text={(item.text || item.value) as string}
            icon={item.icon}
            iconPosition={item.iconPosition || "right"}
            size="mini"
            containerStyle={{
              paddingVertical: item.image ? 0 : 2,
              marginRight: 5,
            }}
            onPress={handleRemoveItem(item)}
          />
        ))}
      </Row>
    );
  };

  const renderPlaceholder = () => {
    if (!placeholder || selectedItems.length !== 0 || (!visible && label)) return null;

    return (
      <Box sx={StyleSheet.flatten([styles.placeholder])}>
        <Typography>{placeholder}</Typography>
      </Box>
    );
  };

  const renderSearch = () => {
    if (search === false) return null;

    const inputProps = {
      value: searchQuery,
      onChangeText: (text: string) => {
        setSearchQuery(text);
        onSearchChange?.(text, props);
      },
    };

    if (renderSearchInput) {
      return renderSearchInput(inputProps);
    }

    return (
      <Box
        sx={StyleSheet.flatten([
          styles.searchContainer,
          {
            borderColor: theme[mode].border,
          },
          searchContainerStyle,
        ])}
      >
        <Input placeholder="Search..." {...inputProps} />
      </Box>
    );
  };

  const renderItem = ({ item, index }: { item: Option; index: number }) => {
    return (
      <Pressable key={index} onPress={handleSelectItem(item)}>
        <Box
          sx={StyleSheet.flatten([
            styles.item,
            isActive(item.value) && {
              bg: mode === "dark" ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.05)",
            },
            menuItemStyle,
          ])}
        >
          {item.content || (
            <Typography
              style={[
                item.disabled && {
                  opacity: 0.3,
                },
              ]}
            >
              {item.text}
            </Typography>
          )}
        </Box>
      </Pressable>
    );
  };

  const renderMenu = () => {
    const { w, h, px, py } = layout;

    return (
      <Modal transparent statusBarTranslucent visible={visible}>
        <TouchableWithoutFeedback onPress={handleBlur}>
          <View style={{ flex: 1 }}>
            <Box
              style={StyleSheet.flatten([
                styles.menu,
                {
                  backgroundColor: theme[mode].backgroundColor,
                  borderColor: theme.colors.primary,
                  top: py + h - 4,
                  left: px,
                  width: w,
                  overflow: "hidden",
                },
                scrolling && {
                  maxHeight: Number.isInteger(scrolling) ? scrolling : search ? 200 : 150,
                },
                menuStyle,
              ])}
            >
              {renderSearch()}
              <FlatList
                keyboardShouldPersistTaps="handled"
                data={options.filter((option) => {
                  if (!searchQuery) return true;

                  const similarity = stringSimilarity.compareTwoStrings(
                    `${option.value}`,
                    searchQuery
                  );

                  if (similarity > 0.15) return true;

                  return false;
                })}
                renderItem={renderItem}
                keyExtractor={(_item, index) => index.toString()}
              />
            </Box>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };

  const borderInterpolation = borderAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [theme[mode].border, theme.colors.primary],
  });

  const colorInterpolation = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [theme[mode].lightTextColor, theme.colors.primary],
  });

  return (
    <View onLayout={measure}>
      <Pressable onPress={handleFocus}>
        <Animated.View
          ref={ref}
          style={StyleSheet.flatten([
            styles.container,
            {
              borderColor: borderInterpolation,
            },
            !label && {
              paddingTop: 0,
              paddingBottom: 0,
              justifyContent: "center",
            },
            containerStyle,
          ])}
          onLayout={handleLayout}
        >
          {label && (
            <Animated.View style={StyleSheet.flatten([styles.label])}>
              <Animated.Text
                style={{
                  color: error ? theme.error.textColor : colorInterpolation,
                  fontSize: fontSizeAnim,
                  transform: [{ translateY: floatAnim }],
                }}
              >
                {label}
              </Animated.Text>
            </Animated.View>
          )}
          <Row
            style={{
              maxWidth: (layout.w || 0) - 30,
            }}
          >
            {renderPlaceholder()}
            {renderSelectedItems()}
          </Row>
        </Animated.View>
      </Pressable>
      {renderMenu()}
      {feedback && (
        <View style={styles.feedback}>
          <Typography
            style={{
              color: theme.error.textColor,
            }}
          >
            {feedback}
          </Typography>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 1,
    marginBottom: 10,
    paddingTop: 21,
    height: 47,
  },
  feedback: {
    marginTop: -5,
    marginBottom: 10,
  },
  menu: {
    borderWidth: 1,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  item: {
    padding: 10,
    backgroundColor: "transparent",
  },
  searchContainer: {
    paddingVertical: 10,
    paddingHorizontal: 3,
    borderBottomWidth: 1,
  },
  selectedItem: {
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 3,
    marginRight: 5,
  },
  label: {
    position: "absolute",
    left: 10,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
  },
  placeholder: {
    paddingLeft: 3,
    opacity: 0.3,
  },
});

type Option = {
  value: string | number;
  text?: string | number;
  disabled?: boolean;
  content?: React.ReactNode;
  icon?: IconProps;
  image?: string;
  iconPosition?: "right" | "left";
};

export interface DropdownProps extends StrictDropdownProps {
  [k: string]: any;
}

export interface StrictDropdownProps {
  /** Custom container style */
  containerStyle?: ViewStyle;

  /** Default values */
  defaultValues?: Option[];

  /** A dropdown can show the data contains errors. */
  error?: boolean;

  /** Feedback to the user about the error. */
  feedback?: string;

  /** The label of the dropdown used for layout. */
  label?: string;

  /** Custom Menu item style */
  menuItemStyle?: ViewStyle;

  /** Custom Menu style */
  menuStyle?: ViewStyle;

  /** A dropdown can allow multiple selections. */
  multiple?: boolean;

  /** Called on change. */
  onChange?: (items: Option[], data: DropdownProps) => void;

  /* Called on item click. */
  onItemPress?: (item: Option, data: DropdownProps) => void;

  /** Called on search input change. */
  onSearchChange?: (text: string, data: DropdownProps) => void;

  /** Items for Dropdown component. */
  options: Option[];

  /** Custom search input renderer */
  renderSearchInput?: (props: TextInputProps) => any;

  /** Placeholder */
  placeholder?: string;

  /** A selection dropdown can allow a user to search through a large list of choices.
Pass a function here to replace the default search. */
  search?: boolean | string;

  /** Custom selected item style */
  selectedItemStyle?: ViewStyle;

  /** Custom selected item container style */
  selectedItemsContainerStyle?: ViewStyle;

  /** A dropdown can have its menu scroll. */
  scrolling?: boolean | number;

  /** Custom search container style */
  searchContainerStyle?: ViewStyle;

  /** Show close icon on selected item */
  showCloseIcon?: boolean;
}

export default Dropdown;
