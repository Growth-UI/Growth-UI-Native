import forEach from "lodash/forEach";
import includes from "lodash/includes";

export const nativeInputProps = [
  "allowFontScaling",
  "autoCapitalize",
  "autoCompleteAndroid",
  "autoCorrect",
  "autoFocus",
  "blurOnSubmit",
  "caretHidden",
  "clearButtonModeiOS",
  "clearTextOnFocusiOS",
  "contextMenuHidden",
  "dataDetectorTypesiOS",
  "defaultValue",
  "disableFullscreenUIAndroid",
  "editable",
  "enablesReturnKeyAutomaticallyiOS",
  "importantForAutofillAndroid",
  "inlineImageLeftAndroid",
  "inlineImagePaddingAndroid",
  "inputAccessoryViewIDiOS",
  "keyboardAppearanceiOS",
  "keyboardType",
  "maxFontSizeMultiplier",
  "maxLength",
  "multiline",
  "numberOfLinesAndroid",
  "onBlur",
  "onChange",
  "onChangeText",
  "onContentSizeChange",
  "onEndEditing",
  "onPressIn",
  "onPressOut",
  "onFocus",
  "onKeyPress",
  "onLayout",
  "onScroll",
  "onSelectionChange",
  "onSubmitEditing",
  "placeholder",
  "placeholderTextColor",
  "returnKeyLabelAndroid",
  "returnKeyType",
  "rejectResponderTerminationiOS",
  "scrollEnablediOS",
  "secureTextEntry",
  "selection",
  "selectionColor",
  "selectTextOnFocus",
  "showSoftInputOnFocus",
  "spellCheckiOS",
  "textAlign",
  "textContentTypeiOS",
  "passwordRulesiOS",
  "style",
  "textBreakStrategyAndroid",
  "underlineColorAndroidAndroid",
  "value",
];

export const nativeImageProps = ["alt", "height", "src", "srcSet", "width", "loading"];

export type Options = Partial<{
  nativeProps?: string[];
}>;

export function partitionNativeProps(props: any, options: Options = {}): Record<string, any>[] {
  const { nativeProps = nativeInputProps } = options;
  const inputProps: Record<string, any> = {};
  const rest: Record<string, any> = {};

  forEach(props, (val, prop) => {
    if (includes(nativeProps, prop)) {
      inputProps[prop] = val;
    } else {
      rest[prop] = val;
    }
  });

  return [inputProps, rest];
}
