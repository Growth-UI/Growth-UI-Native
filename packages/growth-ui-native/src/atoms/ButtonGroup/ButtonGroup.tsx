import { StyleSheet, StyleSheetProperties, View } from "react-native";
import React, { Children, cloneElement, FunctionComponent, isValidElement } from "react";

const ButtonGroup: FunctionComponent<ButtonGroupProps> = (props) => {
  const { children, fluid, rounded } = props;

  const newChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      const childProps = {
        containerStyle: {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
        buttonStyle: {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          marginBottom: 0,
        },
        textStyle: {},
        ...child.props,
      };

      if (fluid) {
        childProps.containerStyle.flexGrow = 1;
        childProps.containerStyle.flexShrink = 1;
        childProps.textStyle.textAlign = "center";
      }

      if (index === 0) {
        childProps.buttonStyle.borderTopLeftRadius = rounded ? 500 : 4;
        childProps.buttonStyle.borderBottomLeftRadius = rounded ? 500 : 4;
        childProps.containerStyle.borderTopLeftRadius = rounded ? 500 : 4;
        childProps.containerStyle.borderBottomLeftRadius = rounded ? 500 : 4;
      }

      if (index === Children.count(children) - 1) {
        childProps.buttonStyle.borderTopRightRadius = rounded ? 500 : 4;
        childProps.buttonStyle.borderBottomRightRadius = rounded ? 500 : 4;
        childProps.containerStyle.borderTopRightRadius = rounded ? 500 : 4;
        childProps.containerStyle.borderBottomRightRadius = rounded ? 500 : 4;
      }

      return cloneElement(child, childProps);
    }
  });

  return (
    <View
      style={StyleSheet.flatten([
        {
          flexDirection: "row",

          marginBottom: 3,
        },
      ])}
    >
      {newChildren}
    </View>
  );
};

export interface ButtonGroupProps extends StrictButtonGroupProps {
  [k: string]: any;
}

interface StrictButtonGroupProps {
  /** A button group may be borderless. */
  borderless?: boolean;

  /** A button group can take the width of its container. */
  fluid?: boolean;

  /** Round border. */
  rounded?: boolean;

  /** Custom styles. */
  style?: StyleSheetProperties;
}

export default ButtonGroup;
