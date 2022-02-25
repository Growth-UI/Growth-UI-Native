import Icon, { IconProps } from "../../atoms/Icon";
import React, { FC, useContext } from "react";
import Row from "../../atoms/Row";
import theme from "../../theme";
import ThemeContext from "../../ThemeContext";
import Typography from "../../atoms/Typography";
import { GestureResponderEvent, Pressable, StyleSheet, View } from "react-native";

const SpeedDialAction: FC<SpeedDialActionProps> = (props) => {
  const { color, icon, title, onPress, ...rest } = props;
  const { mode } = useContext(ThemeContext);

  const handlePress = (e: GestureResponderEvent) => {
    onPress?.(e, props);
  };

  return (
    <Row horizontalAlign="right" verticalAlign="middle">
      {title && (
        <View
          style={StyleSheet.flatten([
            styles.title,
            {
              backgroundColor: theme[mode].backgroundColor,
              shadowColor: theme[mode === "dark" ? "light" : "dark"].backgroundColor,
            },
          ])}
        >
          <Typography textAlign="center">{title}</Typography>
        </View>
      )}
      <Pressable
        {...rest}
        style={StyleSheet.flatten([
          styles.action,
          {
            backgroundColor: color || theme[mode].backgroundColor,
          },
        ])}
        onPress={handlePress}
        onStartShouldSetResponderCapture={() => true}
      >
        <Icon size={25} {...icon} />
      </Pressable>
    </Row>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  title: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  action: {
    marginRight: 20,
    marginBottom: 16,
    borderRadius: 500,
    width: 47,
    height: 47,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
});

// ======================================================
export interface SpeedDialActionProps extends StrictSpeedDialActionProps {
  [k: string]: any;
}

// ======================================================
export interface StrictSpeedDialActionProps {
  /** Color of the action button. */
  color?: string;

  /** Add an Icon by props object. */
  icon: IconProps;

  /** Called on press. */
  onPress?: (e: GestureResponderEvent, data: SpeedDialActionProps) => void;

  /** Label to display. */
  title?: string;
}

export default SpeedDialAction;
