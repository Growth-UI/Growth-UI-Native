import isNil from "lodash/isNil";
import isPlainObject from "lodash/isPlainObject";
import {
  Children,
  cloneElement,
  createElement,
  isValidElement,
  ReactChildren,
  ReactNode,
} from "react";

// ============================================================
// Factories
// ============================================================

type CreateChildrenOptions = {
  overrideProps?: Record<string, any>;
  defaultProps?: Record<string, any>;
};

/**
 * It creates new children with extra props.
 *
 * @param {ReactChildren} children A React children
 * @param {object} options Props to pass
 */
export const createChildren = (
  children: ReactChildren | ReactNode | JSX.Element,
  options: CreateChildrenOptions = { overrideProps: {}, defaultProps: {} }
) =>
  Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      const { overrideProps, defaultProps } = options;

      const props = {
        index,
        isLast: Children.count(children) === index + 1,
        ...defaultProps,
        ...child.props,
        ...overrideProps,
      };

      return cloneElement(child, props);
    }

    return child;
  });

/**
 * A more robust React.createElement. It can create elements from primitive values.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function}
 * @param {string|object|function} val The value to create a ReactElement from (Usually required vals)
 * @param {object} options CreateChildrenOptions
 */
export const buildShorthand = (
  Component: any,
  mapValueToProps: (val: any) => Record<string, any>,
  val: any,
  options: CreateChildrenOptions
) => {
  if (typeof Component !== "function" && typeof Component !== "string") {
    throw new Error("buildShorthand() Component must be a string or function.");
  }

  if (isNil(val)) {
    return null;
  }

  const valIsReactElement = isValidElement(val);
  const valIsObject = isPlainObject(val);
  const valIsPrimitiveValue =
    typeof val === "string" ||
    typeof val === "boolean" ||
    typeof val === "number" ||
    Array.isArray(val);

  // Build props
  const userProps =
    (valIsReactElement && val.props) ||
    (valIsObject && val) ||
    (valIsPrimitiveValue && mapValueToProps(val));

  // Override props
  const { overrideProps = {}, defaultProps = {} } = options;

  const props = {
    ...defaultProps,
    ...userProps,
    ...overrideProps,
  };

  // Merge style
  if (defaultProps.style || overrideProps.style || userProps.style) {
    props.style = { ...defaultProps.style, ...userProps.style, ...overrideProps.style };
  }

  // ----------------------------------------
  // Create Element
  // ----------------------------------------
  if (valIsReactElement) {
    return cloneElement(val, props);
  }

  if (typeof props.children === "function") {
    return props.children(Component, { ...props, children: undefined });
  }

  if (valIsObject) {
    return createElement(Component, props);
  }

  return createElement(Component, { ...props, children: val });
};

export const createShorthandFactory = (
  Component: any,
  mapValueToProps: (val: any) => Record<string, any> = () => ({})
) => {
  return (val: any, options: CreateChildrenOptions = { overrideProps: {}, defaultProps: {} }) =>
    buildShorthand(Component, mapValueToProps, val, options);
};
