import {
  DATE_MASK,
  DIRECTION,
  HORIZONTALALIGNMENTS,
  VERTICALALIGNMENTS,
} from "@growth-ui/native/utils/GUI";
import { GUI } from "@growth-ui/native/utils";

export const growthUIRepoURL = "https://github.com/Growth-UI/Growth-UI-Native";
export const availableLanguages = [
  {
    locale: "en",
    language: "English",
  },
  {
    locale: "ko",
    language: "한국어",
  },
];

export const typeOrder = ["atoms", "molecules", "organisms", "templates"];
export const componentByType: Record<string, string[]> = {
  atoms: [
    "avatar",
    "badge",
    "box",
    "button",
    "chip",
    "collapse",
    "icon",
    "image",
    "input",
    "parallax",
    "row",
    "sheet",
    "slider",
    "spacer",
    "typography",
  ],
  molecules: [
    "checkbox",
    "comment",
    "currencyinput",
    "dateinput",
    "dropdown",
    "list",
    "speeddial",
    "tab",
  ],
};
export const components = [
  "avatar",
  "badge",
  "box",
  "button",
  "checkbox",
  "chip",
  "collapse",
  "comment",
  "currencyinput",
  "dateinput",
  "dropdown",
  "icon",
  "image",
  "input",
  "list",
  "row",
  "parallax",
  "sheet",
  "slider",
  "spacer",
  "speeddial",
  "tab",
  "tooltip",
  "typography",
];
export const componentInfo: Record<
  string,
  {
    names: string[];
  }
> = {
  // atoms
  avatar: {
    names: ["Avatar", "Avatar.Group"],
  },
  badge: {
    names: ["Badge"],
  },
  box: {
    names: ["Box"],
  },
  button: {
    names: ["Button", "ButtonGroup"],
  },
  chip: {
    names: ["Chip", "Chip.Detail"],
  },
  collapse: {
    names: ["Collapse"],
  },
  icon: {
    names: ["Icon"],
  },
  image: {
    names: ["Image"],
  },
  input: {
    names: ["Input"],
  },
  row: {
    names: ["Row"],
  },
  parallax: {
    names: ["Parallax"],
  },
  sheet: {
    names: ["Sheet"],
  },
  slider: {
    names: ["Slider"],
  },
  spacer: {
    names: ["Spacer"],
  },
  tooltip: {
    names: ["Tooltip"],
  },
  typography: {
    names: ["Typography"],
  },
  // Molecules
  checkbox: {
    names: ["CheckBox"],
  },
  comment: {
    names: [
      "Comment",
      "Comment.Avatar",
      "Comment.Author",
      "Comment.Action",
      "Comment.Actions",
      "Comment.Content",
      "Comment.Expander",
      "Comment.Group",
      "Comment.Metadata",
      "Comment.Text",
    ],
  },
  currencyinput: {
    names: ["CurrencyInput"],
  },
  dateinput: {
    names: ["DateInput"],
  },
  dropdown: {
    names: ["Dropdown"],
  },
  list: {
    names: ["List", "List.Content", "List.Description", "List.Heading", "List.Image", "List.Item"],
  },
  speeddial: {
    names: ["SpeedDial", "SpeedDial.Action"],
  },
  tab: {
    names: ["Tab"],
  },
};
export const componentProps: Record<
  string,
  {
    description?: string;
    name: string;
    type: string;
    defaultValue?: string;
    required?: boolean;
    enums?: string[] | number[];
    func?: {
      title: string;
      params: {
        name: string;
        description?: string;
      }[];
    };
  }[]
> = {
  Button: [
    {
      description: "A basic button is less pronounced.",
      name: "basic",
      type: "boolean",
    },
    {
      description: "A button can be borderless.",
      name: "borderless",
      type: "boolean",
    },
    {
      description: "Custom button style.",
      name: "buttonStyle",
      type: "StyleSheetProperties",
    },
    {
      description: "A button can be circular.",
      name: "circular",
      type: "boolean",
    },
    {
      description: "A button can have different colors.",
      name: "color",
      type: "enum",
      enums: GUI.COLORS,
    },
    {
      description: "Custom container style.",
      name: "containerStyle",
      type: "StyleSheetProperties",
    },
    {
      description: "A button can show it is currently unable to be interacted with.",
      name: "disabled",
      type: "boolean",
    },
    {
      description: "A button can take the width of its container.",
      name: "fluid",
      type: "boolean",
    },
    {
      description: "A button can show a loading indicator.",
      name: "loading",
      type: "boolean",
    },
    {
      description: "Called after user's press.",
      name: "onPress",
      type: "func",
      func: {
        title: "(event: GestureResponderEvent, data: ButtonProps)",
        params: [
          {
            name: "event",
            description: "React's original GestureResponderEvent.",
          },
          {
            name: "data",
            description: "All props.",
          },
        ],
      },
    },
    {
      description: "A ripple effect to give users feedback in a simple, elegant way.",
      name: "ripple",
      type: "boolean",
      defaultValue: "true",
    },
    {
      description: "Custom text style.",
      name: "textStyle",
      type: "StyleSheetProperties",
    },
    {
      description: "A button can have transparent background.",
      name: "transparent",
      type: "transparent",
    },
  ],
  ButtonGroup: [
    {
      description: "A button group may be borderless.",
      name: "borderless",
      type: "boolean",
    },
    {
      description: "A button group can take the width of its container.",
      name: "fluid",
      type: "boolean",
    },
    {
      description: "Round border.",
      name: "rounded",
      type: "boolean",
    },
    {
      description: "Custom style.",
      name: "style",
      type: "StyleSheetProperties",
    },
  ],
  Typography: [
    {
      description: "A typography can have different colors.",
      name: "color",
      type: "enum",
      enums: GUI.COLORS,
    },
    {
      description: "A typography may appear at different sizes.",
      name: "size",
      defaultValue: "16",
      type: "number",
    },
    {
      description: "Custom style.",
      name: "style",
      type: "StyleProp<TextStyle>",
    },
    {
      description: "Align typography content.",
      name: "textAlign",
      type: "enum",
      defaultValue: "left",
      enums: GUI.TEXTALIGNMENTS,
    },
    {
      description: "An element type to render as.",
      name: "variant",
      type: "enum",
      enums: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
  ],
  Input: [
    {
      description: "This can be used to add a prefix, a suffix or an action to an element.",
      name: "adornment",
      type: "string",
    },
    {
      description: "Color of the adornmanet",
      name: "adornmentColor",
      type: "string",
    },
    {
      description: "An Input can be a basic shape.",
      name: "basic",
      type: "boolean",
    },
    {
      description: "Custom container style.",
      name: "containerStyle",
      type: "StyleProp<ViewStyle>",
    },
    {
      description: "An Input field can show that it is disabled.",
      name: "disabled",
      type: "boolean",
    },
    {
      description: "An Input field can show the data contains errors.",
      name: "error",
      type: "boolean",
    },
    {
      description: "Feedback to the user about the error.",
      name: "feedback",
      type: "string",
    },
    {
      description: "The label of the input used for layout.",
      name: "label",
      type: "string",
    },
    {
      description: "Custom label style.",
      name: "labelStyle",
      type: "StyleProp<ViewStyle>",
    },
    {
      description: "Icon to display inside the Input.",
      name: "icon",
      type: "IconProps",
    },
    {
      description: "Custom TextInput style.",
      name: "inputStyle",
      type: "StyleProp<TextStyle>",
    },
    {
      description: "An Icon can appear inside an Input on the left or right.",
      name: "iconPosition",
      type: "enum",
      enums: ["left", "right"],
      defaultValue: "left",
    },
    {
      description: "Called on text change.",
      name: "onChangeText",
      type: "func",
      func: {
        title: "(text: string)",
        params: [
          {
            name: "text",
            description: "New text",
          },
        ],
      },
    },
    {
      description: "The input placeholder.",
      name: "placeholder",
      type: "string",
    },
    {
      description: "An Input field can be rounded shape.",
      name: "rounded",
      type: "boolean",
    },
    {
      description: "The input value.",
      name: "value",
      type: "string | number | boolean",
    },
  ],
  Image: [
    {
      description:
        "An image may include a border to emphasize the edges of white or transparent content.",
      name: "bordered",
      type: "boolean",
    },
    {
      description: "An image can appear centered in a content block.",
      name: "centered",
      type: "boolean",
    },
    {
      description: "An image may appear circular.",
      name: "circular",
      type: "boolean",
    },
    {
      description: "An image height.",
      name: "height",
      type: "number | string",
    },
    {
      description: "An image can be hidden.",
      name: "hidden",
      type: "boolean",
    },
    {
      description: "An image can be lazy loaded.",
      name: "lazy",
      type: "boolean",
      defaultValue: "true",
    },
    {
      description: "An image may appear rounded.",
      name: "rounded",
      type: "boolean",
    },
    {
      description: "Additional styles",
      name: "style",
      type: "StyleProp<ImageStyle>",
    },
    {
      description: "An image width.",
      name: "width",
      type: "number | string",
      defaultValue: "100%",
    },
  ],
  Spacer: [
    {
      description: "Axis to be spaced.",
      name: "axis",
      type: "enum",
      enums: ["horizontal", "vertical"],
    },
    {
      description: "The gap between the given direction.",
      name: "size",
      type: "number",
    },
  ],
  Icon: [
    {
      description: "Color of the icon.",
      name: "color",
      type: "enum",
      enums: GUI.COLORS,
    },
    {
      description: "Icon can be flipped.",
      name: "flipped",
      type: "boolean",
    },
    {
      description: "Name of the icon.",
      name: "name",
      type: "enum",
      enums: GUI.ICONS,
    },
    {
      description: "Icon can be rotated.",
      name: "rotated",
      type: "boolean",
    },
    {
      description: "Icon can be rotated either in clockwise or counter-clockwise.",
      name: "rotationDirection",
      type: "enum",
      enums: ["clockwise", "counterclockwise"],
      defaultValue: "clockwise",
    },
    {
      description: "Icon can be roated up to customized degree.",
      name: "to",
      type: "number",
      defaultValue: "90",
    },
  ],
  Slider: [
    {
      description: "Whether or not slider is checked.",
      name: "checked",
      type: "boolean",
    },
    {
      description: "A slider can be filled with different colors.",
      name: "color",
      type: "enum",
      enums: GUI.COLORS,
    },
    {
      description: "Called when the user attempts to change the slider state.",
      name: "onPress",
      type: "func",
      func: {
        title: "onPress",
        params: [
          {
            name: "event",
            description: "GestureResponderEvent",
          },
          {
            name: "data",
            description: "SliderProps",
          },
        ],
      },
    },
    {
      description: "A Slider can look like a toggle.",
      name: "toggle",
      type: "boolean",
    },
  ],
  Collapse: [
    {
      description: "If true, the component will transition in.",
      name: "expanded",
      type: "boolean",
    },
    {
      description: "Custom styles.",
      name: "style",
      type: "StyleProp<ViewStyle>",
    },
  ],
  Comment: [
    {
      description: "Custom styles.",
      name: "style",
      type: "StyleProp<ViewStyle>",
    },
  ],
  "Comment.Action": [
    {
      description: "Custom styles.",
      name: "style",
      type: "StyleProp<ViewStyle>",
    },
  ],
  "Comment.Actions": [
    {
      description: "Custom styles.",
      name: "style",
      type: "StyleProp<ViewStyle>",
    },
  ],
  "Comment.Author": [
    {
      description: "Custom styles.",
      name: "style",
      type: "StyleProp<ViewStyle>",
    },
    {
      description: "Shorthand for primary text.",
      name: "text",
      type: "string",
    },
  ],
  "Comment.Avatar": [
    {
      description: "An avatar may appear circular.",
      name: "circular",
      type: "border",
      defaultValue: "true",
    },
    {
      description: "An avatar may appear rounded.",
      name: "rounded",
      type: "boolean",
    },
    {
      description: "Shorthand for primary text.",
      name: "text",
      type: "string",
    },
    {
      description: "An avatar may have different size.",
      name: "size",
      type: "number",
    },
  ],
  "Comment.Content": [
    {
      description: "Custom styles.",
      name: "style",
      type: "StyleProp<ViewStyle>",
    },
  ],
  "Comment.Expander": [
    {
      description: "If true, the component will transition in.",
      name: "defaultExpanded",
      type: "boolean",
    },
    {
      description: "Called after user's press",
      name: "onPress",
      type: "func",
      func: {
        title: "(event: GestureResponderEvent, data: CommentExpanderProps)",
        params: [
          {
            name: "event",
            description: "React's original GestureResponderEvent.",
          },
          {
            name: "data",
            description: "All props.",
          },
        ],
      },
    },
    {
      description: "Custom styles.",
      name: "style",
      type: "StyleProp<ViewStyle>",
    },
    {
      description: "Shorthand for primary text.",
      name: "text",
      type: "string",
    },
  ],
  "Comment.Group": [
    {
      description: "Custom styles.",
      name: "style",
      type: "StyleProp<ViewStyle>",
    },
  ],
  "Comment.Metadata": [
    {
      description: "Custom styles.",
      name: "style",
      type: "StyleProp<TextStyle>",
    },
  ],
  "Comment.Text": [
    {
      description: "Custom styles.",
      name: "style",
      type: "StyleProp<ViewStyle>",
    },
    {
      description: "Shorthand for primary text.",
      name: "text",
      type: "string",
    },
    {
      description: "Custom styles.",
      name: "textStyle",
      type: "StyleProp<TextStyle>",
    },
  ],
  List: [
    {
      description: "A list can show divisions between content.",
      name: "divided",
      type: "boolean",
    },
    {
      description: "A list can relax its padding to provide more negative space.",
      name: "padded",
      type: "boolean",
    },
    {
      description: "A list can relax its padding to provide even more negative space.",
      name: "relaxed",
      type: "boolean",
    },
    {
      description: "A ripple effect to give users feedback in a simple, elegant way.",
      name: "ripple",
      type: "boolean",
      defaultValue: "true",
    },
    {
      description: "A ripple may appear as different color.",
      name: "rippleColor",
      type: "string",
      defaultValue: "#f5f5f5",
    },
    {
      description: "Custom styles.",
      name: "style",
      type: "StyleProp<ViewStyle>",
    },
    {
      description: "An element inside a item can be vertically aligned.",
      name: "verticalAlign",
      type: "enum",
      enums: GUI.VERTICALALIGNMENTS,
      defaultValue: "middle",
    },
  ],
  "List.Content": [
    {
      description: "Custom styles.",
      name: "style",
      type: "StyleProp<ViewStyle>",
    },
  ],
  "List.Description": [
    {
      description: "A typography can have different colors.",
      name: "color",
      type: "enum",
      enums: GUI.COLORS,
    },
    {
      description: "A typography may appear at different sizes.",
      name: "size",
      defaultValue: "12",
      type: "number",
    },
    {
      description: "Custom style.",
      name: "style",
      type: "StyleProp<TextStyle>",
    },
    {
      description: "Align typography content.",
      name: "textAlign",
      type: "enum",
      defaultValue: "left",
      enums: GUI.TEXTALIGNMENTS,
    },
    {
      description: "An element type to render as.",
      name: "variant",
      type: "enum",
      enums: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
  ],
  "List.Heading": [
    {
      description: "A typography can have different colors.",
      name: "color",
      type: "enum",
      enums: GUI.COLORS,
    },
    {
      description: "A typography may appear at different sizes.",
      name: "size",
      defaultValue: "12",
      type: "number",
    },
    {
      description: "Custom style.",
      name: "style",
      type: "StyleProp<TextStyle>",
    },
    {
      description: "Align typography content.",
      name: "textAlign",
      type: "enum",
      defaultValue: "left",
      enums: GUI.TEXTALIGNMENTS,
    },
    {
      description: "An element type to render as.",
      name: "variant",
      type: "enum",
      enums: ["h1", "h2", "h3", "h4", "h5", "h6"],
      defaultValue: "h6",
    },
  ],
  "List.Image": [
    {
      description:
        "An image may include a border to emphasize the edges of white or transparent content.",
      name: "bordered",
      type: "boolean",
    },
    {
      description: "An image can appear centered in a content block.",
      name: "centered",
      type: "boolean",
    },
    {
      description: "An image may appear circular.",
      name: "circular",
      type: "boolean",
    },
    {
      description: "An image height.",
      name: "height",
      type: "number | string",
    },
    {
      description: "An image can be hidden.",
      name: "hidden",
      type: "boolean",
    },
    {
      description: "An image can be lazy loaded.",
      name: "lazy",
      type: "boolean",
      defaultValue: "true",
    },
    {
      description: "An image may appear rounded.",
      name: "rounded",
      type: "boolean",
    },
    {
      description: "Additional styles",
      name: "style",
      type: "StyleProp<ImageStyle>",
    },
    {
      description: "An image width.",
      name: "width",
      type: "number | string",
      defaultValue: "35",
    },
  ],
  "List.Item": [
    {
      description: "A list item can active.",
      name: "active",
      type: "boolean",
    },
    {
      description: "A list can show divisions between content.",
      name: "divided",
      type: "boolean",
    },
    {
      description: "Left hidden item.",
      name: "leftContent",
      type: "ReactNode",
    },
    {
      description: "Max swipe range to allow.",
      name: "max",
      type: "number",
      defaultValue: "0.6",
    },
    {
      description: "Called after user's press.",
      name: "onPress",
      type: "fun",
      func: {
        title: "(event: GestureResponderEvent, data: ListItemProps)",
        params: [
          {
            name: "event",
            description: "React's original GestureResponderEvent.",
          },
          {
            name: "data",
            description: "All props.",
          },
        ],
      },
    },
    {
      description: "Additional styles",
      name: "style",
      type: "StyleProp<ImageStyle>",
    },
    {
      description: "A list item can be swipeable to show hidden items.",
      name: "swipeable",
      type: "boolean",
      defaultValue: "false",
    },
    {
      description: "A simple text for an list.",
      name: "text",
      type: "string",
    },
  ],
  Badge: [
    {
      description: "The content rendered within the badge.",
      name: "content",
      type: "number",
    },
    {
      description: "The color of the badge.",
      name: "color",
      type: "enums",
      enums: GUI.COLORS,
      defaultValue: "primary",
    },
    {
      description: "A badge can appear to all corners.",
      name: "direction",
      type: "enums",
      enums: ["top left", "top right", "bottom left", "bottom right"],
      defaultValue: "top right",
    },
    {
      description: "A badge with empty content.",
      name: "dot",
      type: "boolean",
    },
    {
      description: "Max count to show.",
      name: "max",
      type: "number",
      defaultValue: "99",
    },
    {
      description: "Called after user's press.",
      name: "onPress",
      type: "fun",
      func: {
        title: "(event: GestureResponderEvent, data: ListItemProps)",
        params: [
          {
            name: "event",
            description: "React's original GestureResponderEvent.",
          },
          {
            name: "data",
            description: "All props.",
          },
        ],
      },
    },
    {
      description: "Wrapped shape the badge should overlap.",
      name: "overlap",
      type: "boolean",
    },
    {
      description: "The background color of the overlap.",
      name: "overlapColor",
      type: "enums",
      enums: GUI.COLORS,
    },
    {
      description: "The color of the text.",
      name: "textColor",
      type: "enums",
      enums: GUI.COLORS,
      defaultValue: "white",
    },
  ],
  Chip: [
    {
      description: "The custom container style",
      name: "containerStyle",
      type: "StyleProp<ViewStyle>",
    },
    {
      description: "Called after user's press.",
      name: "onPress",
      type: "fun",
      func: {
        title: "(event: GestureResponderEvent, data: ChipProps)",
        params: [
          {
            name: "event",
            description: "React's original GestureResponderEvent.",
          },
          {
            name: "data",
            description: "All props.",
          },
        ],
      },
    },
    {
      description: "Outline the chip.",
      name: "outlined",
      type: "boolean",
    },
    {
      description: "A chip can be circular shape.",
      name: "circular",
      type: "boolean",
    },
    {
      description: "A chip can have different colors",
      name: "color",
      type: "enum",
      enums: GUI.COLORS,
    },
    {
      description: "Shorthand for an icon.",
      name: "icon",
      type: "IconProps",
    },
    {
      description: "Icon position",
      name: "iconPosition",
      type: "enums",
      enums: ["left", "right"],
      defaultValue: "left",
    },
    {
      description: "The imgae element to display.",
      name: "image",
      type: "string",
    },
    {
      description: "A chip can be small or large",
      name: "size",
      type: "enums",
      enums: GUI.SIZES,
    },
    {
      description: "The content of the component",
      name: "text",
      type: "string",
    },
  ],
  "Chip.Detail": [
    {
      description: "The custom container style",
      name: "containerStyle",
      type: "StyleProp<ViewStyle>",
    },
    {
      description: "The content of the component",
      name: "text",
      type: "string",
    },
  ],
  Row: [
    {
      description: "A row can have its columns aligned horizontally.",
      name: "horizontalAlign",
      type: "enum",
      enums: HORIZONTALALIGNMENTS,
    },
    {
      description: "The custom style",
      name: "style",
      type: "StyleProp<ViewStyle>",
    },
    {
      description:
        "A row can specify its vertical alignment to have all its columns vertically centered.",
      name: "verticalAlign",
      type: "enum",
      enums: VERTICALALIGNMENTS,
    },
    {
      description: "How flex items wrap.",
      name: "wrap",
      type: "boolean",
    },
  ],
  Box: [
    {
      description: "A shortcut for defining custom style",
      name: "sx",
      type: "enum",
    },
  ],
  Avatar: [
    {
      description: "Avatar may appear circular.",
      name: "circular",
      type: "boolean",
    },
    {
      description: "Custom container style.",
      name: "containerStyle",
      type: "StyleProp<ViewStyle>",
    },
    {
      description: "Avatars contains simple icon.",
      name: "icon",
      type: "IconProps",
    },
    {
      description: "Custom inner container style.",
      name: "innerContainerStyle",
      type: "StyleProp<ViewStyle>",
    },
    {
      description: "Size of the avatar.",
      name: "size",
      type: "number",
    },
    {
      description: "The image source.",
      name: "src",
      type: "string",
    },
    {
      description: "Accepts all system properties.",
      name: "sx",
      type: "enums",
    },
    {
      description: "Avatars contains simple characters.",
      name: "text",
      type: "string",
    },
    {
      description: "Custom text style.",
      name: "textStyle",
      type: "StyleProp<TextStyle>",
    },
  ],
  "Avatar.Group": [
    {
      description: "Custom container style.",
      name: "containerStyle",
      type: "StyleProp<ViewStyle>",
    },
    {
      description: "Max avatars to show before +x.",
      name: "max",
      type: "number",
    },
    {
      description: "Accepts all system properties.",
      name: "sx",
      type: "enums",
    },
    {
      description: "The total number of avatars.",
      name: "total",
      type: "number",
    },
  ],
  Tooltip: [
    {
      description:
        "Tooltip container height. Necessary in order to render the container in the correct place.",
      name: "height",
      type: "number",
    },
    {
      description: "Position for the tooltip.",
      name: "position",
      type: "enums",
      enums: DIRECTION,
    },
    {
      description:
        "Force skip StatusBar height when calculating element position. Pass true if Tooltip used inside react-native Modal component.",
      name: "StatusBar",
      type: "boolean",
    },
    {
      description: "Accepts all system properties.",
      name: "sx",
      type: "enums",
    },
    {
      description: "Tooltip title. Zero-length titles string are never displayed.",
      name: "title",
      type: "string",
    },
    {
      description: "Custom container style.",
      name: "containerStyle",
      type: "StyleProp<TextStyle>",
    },
    {
      description: "Custom text style.",
      name: "textStyle",
      type: "StyleProp<TextStyle>",
    },
    {
      description: "If true, the component is shown.",
      name: "visible",
      type: "boolean",
    },
    {
      description:
        "Tooltip container width. Necessary in order to render the container in the correct place.",
      name: "width",
      type: "number",
    },
  ],
  SpeedDial: [
    {
      description: "Color of the SpeedDial Fab.",
      name: "color",
      type: "string",
      defaultValue: "#1976d2",
    },
    {
      description: "The icon to display in the SpeedDial Fab.",
      name: "icon",
      type: "IconProps",
      defaultValue:
        '{color: "white", name: "plus", size: 25, to: 45, rotateDirection: "counterclockwise"}',
    },
    {
      description: "Animation interval.",
      name: "interval",
      type: "number",
      defaultValue: "30",
    },
    {
      description: "Called on close dial.",
      name: "onClose",
      type: "func",
      func: {
        title: "(event: GestureResponderEvent, data: SpeedDialProps)",
        params: [
          {
            name: "event",
            description: "React's original GestureResponderEvent.",
          },
          {
            name: "data",
            description: "All props.",
          },
        ],
      },
    },
    {
      description: "Called on open dial.",
      name: "onOpen",
      type: "func",
      func: {
        title: "(event: GestureResponderEvent, data: SpeedDialProps)",
        params: [
          {
            name: "event",
            description: "React's original GestureResponderEvent.",
          },
          {
            name: "data",
            description: "All props.",
          },
        ],
      },
    },
    {
      description: "If true, the component is shown.",
      name: "open",
      type: "boolean",
      defaultValue: "false",
    },
    {
      description: "Overlay color to the speed dial when opened.",
      name: "overlayColor",
      type: "string",
      defaultValue: "transparent",
    },
    {
      description: "Accepts all system properties.",
      name: "sx",
      type: "enums",
    },
    {
      description: "The duration for the transition, in milliseconds.",
      name: "transitionDuration",
      type: "number",
      defaultValue: "400",
    },
  ],
  "SpeedDial.Action": [
    {
      description: "Color of the action button.",
      name: "color",
      type: "string",
    },
    {
      description: "Add an Icon by props object.",
      name: "icon",
      type: "IconProps",
      required: true,
    },
    {
      description: "Called on press.",
      name: "onOpen",
      type: "func",
      func: {
        title: "(event: GestureResponderEvent, data: SpeedDialActionProps)",
        params: [
          {
            name: "event",
            description: "React's original GestureResponderEvent.",
          },
          {
            name: "data",
            description: "All props.",
          },
        ],
      },
    },
    {
      description: "Label to display.",
      name: "title",
      type: "string",
    },
  ],
  Sheet: [
    {
      description: "Custom style for container.",
      name: "containerStyle",
      type: "StyleProp<ViewStyle>",
    },
    {
      description: "Direction of the sheet to show.",
      name: "direction",
      type: "enums",
      enums: ["bottom", "top"],
    },
    {
      description: "Animation time takes to fully show the component.",
      name: "duration",
      type: "number",
    },
    {
      description: "Called on close.",
      name: "onClose",
      type: "func",
      func: {
        title: "(event: GestureResponderEvent, data: SheetProps)",
        params: [
          {
            name: "event",
            description: "React's original GestureResponderEvent.",
          },
          {
            name: "data",
            description: "All props.",
          },
        ],
      },
    },
    {
      description: "Called on open.",
      name: "onOpen",
      type: "func",
      func: {
        title: "(event: NativeSyntheticEvent, data: SheetProps)",
        params: [
          {
            name: "event",
            description: "React's original GestureResponderEvent.",
          },
          {
            name: "data",
            description: "All props.",
          },
        ],
      },
    },
    {
      description: "If true, the component is shown.",
      name: "open",
      type: "boolean",
    },
    {
      description: "Overlay color.",
      name: "overlayColor",
      type: "string",
    },
    {
      description: "Accepts all system properties.",
      name: "sx",
      type: "enums",
    },
    {
      description: "A Component that triggers the component.",
      name: "trigger",
      type: "ReactNode",
    },
  ],
  Tab: [
    {
      description: "Index of the currently active tab.",
      name: "activeIndex",
      type: "number | string",
    },
    {
      description: "Disable the active indicator.",
      name: "disableIndicator",
      type: "boolean",
    },
    {
      description: "Additional styling for tab indicator.",
      name: "indicatorStyle",
      type: "StyleProp<ViewStyle>",
    },
    {
      description: "Define the indicator animation configurations.",
      name: "indicatorAnimConfig",
      type: 'Omit<Animated.TimingAnimationConfig, "toValue">',
    },
    {
      description: "Called on tab change.",
      name: "onTabChange",
      type: "func",
      func: {
        title: "(event: GestureResponderEvent, data: TabProps)",
        params: [
          {
            name: "event",
            description: "React's original GestureResponderEvent.",
          },
          {
            name: "data",
            description: "All props.",
          },
        ],
      },
    },
    {
      description: "Rounded shape.",
      name: "rounded",
      type: "boolean",
    },
    {
      description: "Define the slide animation configurations.",
      name: "slideAnimationConfig",
      type: 'Omit<Animated.SpringAnimationConfig & Animated.TimingAnimationConfig,"toValue">',
    },
    {
      description: "Accepts all system properties.",
      name: "sx",
      type: "enums",
    },
    {
      description: "Additional styling for tab.",
      name: "tabStyle",
      type: "StyleProp<ViewStyle>",
    },
    {
      description: "Additional styling for tab item.",
      name: "tabItemStyle",
      type: "StyleProp<ViewStyle>",
    },
    {
      description: "Additional styling for tab pane.",
      name: "tabPaneStyle",
      type: "StyleProp<ViewStyle>",
    },
    {
      description:
        "Array of objects describing each Tab item and Tab pane:\n [{ title?: string, icon?: IconProps, render: (props: TabProps) => ReactNode }]",
      name: "panes",
      type: "{arrayOf}",
    },
  ],
  CurrencyInput: [
    {
      description: "Custom outermost container style.",
      name: "containerStyle",
      type: "StyleProp<ViewStyle>",
    },
    {
      description: "Custom cursor style.",
      name: "containerStyle",
      type: "StyleProp<ViewStyle>",
    },
    {
      description: "Custom cursor animation config.",
      name: "cursorAnim",
      type: "TimingAnimationConfig",
    },
    {
      description: "Limit length of decimals allowed.",
      name: "decimalsLimit",
      type: "number",
      defaultValue: "2",
    },
    {
      description: "An Input field can show the data contains errors.",
      name: "error",
      type: "boolean",
    },
    {
      description: "Align the component horizontally.",
      name: "horizontalAlign",
      type: "enum",
      enums: HORIZONTALALIGNMENTS,
      defaultValue: "center",
    },
    {
      description: "Shorthand for icon",
      name: "icon",
      type: "IconProps",
      defaultValue: "{ name: 'close' }",
    },
    {
      description: "Custom input container style.",
      name: "inputContainerStyle",
      type: "StyleProp<ViewStyle>",
    },
    {
      description: "Custom input props.",
      name: "inputProps",
      type: "{ object }",
    },
    {
      description: "Custom input text animation config.",
      name: "inputTextAnim",
      type: "SpringAnimationConfig",
    },
    {
      description: "Custom input text style.",
      name: "inputTextStyle",
      type: "StyleProp<TextStyle>",
    },
    {
      description: "Called on blue.",
      name: "onBlur",
      type: "func",
      func: {
        title: "(event: NativeSyntheticEvent<TextInputFocusEventData>, data: CurrencyInputProps)",
        params: [
          {
            name: "event",
            description: "React's original NativeSyntheticEvent.",
          },
          {
            name: "data",
            description: "All props.",
          },
        ],
      },
    },
    {
      description: "Called on change.",
      name: "onChange",
      type: "func",
      func: {
        title: "(value: number, data: CurrencyInputProps)",
        params: [
          {
            name: "value",
            description: "New value",
          },
          {
            name: "data",
            description: "All props.",
          },
        ],
      },
    },
    {
      description: "Called on focus.",
      name: "onFocus",
      type: "func",
      func: {
        title: "(event: NativeSyntheticEvent<TextInputFocusEventData>, data: CurrencyInputProps)",
        params: [
          {
            name: "event",
            description: "React's original NativeSyntheticEvent.",
          },
          {
            name: "data",
            description: "All props.",
          },
        ],
      },
    },
    {
      description: "An input can be descriptive. e.g) $.",
      name: "prefix",
      type: "string",
    },
    {
      description: "Custom prefix style.",
      name: "prefixStyle",
      type: "StyleProp<TextStyle>",
    },
    {
      description: "An input can format number with commas as thousands separators.",
      name: "separators",
      type: "boolean",
      defaultValue: "true",
    },
    {
      description: "Show clear icon that clears the input field.",
      defaultValue: "true",
      name: "showClearIcon",
      type: "boolean",
    },
    {
      description: "An input can have different sizes",
      name: "size",
      type: "number",
      defaultValue: "20",
    },
  ],
  DateInput: [
    {
      description: "Mask (e.g. mm/yyyy or mm/dd/yyyy).",
      name: "mask",
      type: "enum",
      enums: DATE_MASK,
    },
    {
      description: "Called on change.",
      name: "onChange",
      type: "func",
      func: {
        title: "(text: string, data: DateInputPros)",
        params: [
          {
            name: "text",
            description: "Formatted date string",
          },
          {
            name: "data",
            description: "All props.",
          },
        ],
      },
    },
    {
      description: "Called on change.",
      name: "renderInput",
      required: true,
      type: "func",
      func: {
        title: "(params: TextInputProps) => ReactElement",
        params: [
          {
            name: "params",
            description: "TextInputProps",
          },
        ],
      },
    },
  ],
  CheckBox: [
    {
      description: "Custom background color animation config.",
      name: "backgroundColorAnimConfig",
      type: "Animated.TimingAnimationConfig",
    },
    {
      description: "Custom border color animation config.",
      name: "borderColorAnimConfig",
      type: "Animated.TimingAnimationConfig",
    },
    {
      description: "Custom checkbox animation config.",
      name: "checkboxAnimConfig",
      type: "Animated.SpringAnimationConfig",
    },
    {
      description: "Whether or not checkbox is checked.",
      name: "checked",
      type: "boolean",
    },
    {
      description: "A checkbox can have different colors.",
      name: "color",
      type: "enum",
      enums: GUI.COLORS,
    },
    {
      description: "A checkbox can be filled with color.",
      name: "filled",
      type: "boolean",
    },
    {
      description: "Add a custom Icon by name, props object.",
      name: "icon",
      type: "IconProps",
    },
    {
      description: "Called on press.",
      name: "onPress",
      type: "func",
      func: {
        title: "(event: GestureResponderEvent, data: CheckBoxProps)",
        params: [
          {
            name: "event",
            description: "React's original GestureResponderEvent.",
          },
          {
            name: "data",
            description: "All props.",
          },
        ],
      },
    },
    {
      description: "Format as a radio element. This means it is an exclusive option.",
      name: "radio",
      type: "boolean",
    },
    {
      description: "A checkbox can be different sizes.",
      name: "size",
      type: "number",
      defaultValue: "25",
    },
    {
      description: "Custom styles.",
      name: "styles",
      type: "{ checkbox: ViewStyle,iconContainer: ViewStyle, text: TextStyle }",
    },
    {
      description: "The text that describes what the checkbox is for.",
      name: "text",
      type: "string",
    },
  ],
  Parallax: [
    {
      description:
        "This is data that gets passed on to the FlatList Element. It is used to render items list.",
      name: "data",
      type: "Array<any>",
    },
    {
      description: "The height of the header that renders on the very top of screen.",
      name: "headerHeight",
      type: "number",
      defaultValue: "100",
    },
    {
      description:
        "Called once when the scroll position gets within onEndReachedThreshold of the rendered content.",
      name: "onEndReached",
      type: "func",
      func: {
        title: "()",
        params: [],
      },
    },
    {
      description:
        "How far from the end (in units of visible length of the list) the bottom edge of the list must be from the end of the content to trigger the `onEndReached` callback. Thus a value of 0.5 will trigger `onEndReached` when the end of the content is within half the visible length of the list.",
      name: "onEndReachedThreshold",
      type: "number",
      defaultValue: "0.3",
    },
    {
      description: "The height of parallax header",
      name: "parallaxHeaderHeight",
      type: "number",
      required: true,
    },
    {
      description:
        "A RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.",
      name: "refreshControl",
      type: "ReactElement<RefreshControlProps>",
    },
    {
      description: "Takes an item from data and renders it into the list.",
      name: "renderItem",
      type: "func",
      required: true,
      func: {
        title: "({ item, index })",
        params: [
          {
            name: "item",
            description: "Data from data parameter your passed.",
          },
          {
            name: "index",
            description: "Index of the item.",
          },
        ],
      },
    },
    {
      description: "The background of the parallax header. ",
      name: "Background",
      type: "ReactNode",
    },
    {
      description: "The fixed header that will always be visible and fixed to the top of the view.",
      name: "FixedHeader",
      type: "ReactNode",
    },
    {
      description: "Rendered at the very top of the screen.",
      name: "Header",
      type: "ReactNode",
    },
    {
      description:
        "The sticky header that will stick to the bottom of Background Element when parallax header scrolls up.",
      name: "StickyHeader",
      type: "ReactNode",
    },
    {
      description:
        "Everything else that you pass to Parallax component will be passed to the FlatList component.",
      name: "*",
      type: "FlatListProps",
    },
  ],
  Dropdown: [
    {
      description: "Custom container style",
      name: "containerStyle",
      type: "ViewStyle",
    },
    {
      description: "Default values",
      name: "defaultValues",
      type: "Option[]",
    },
    {
      description: "A dropdown can show the data contains errors",
      name: "error",
      type: "boolean",
    },
    {
      description: "Feedback to the user about the error",
      name: "feedback",
      type: "boolean",
    },
    {
      description: "The label of the dropdown used for layout",
      name: "label",
      type: "string",
    },
    {
      description: "Custom individual menu item style",
      name: "menuItemsStyle",
      type: "ViewStyle",
    },
    {
      description: "Custom Menu style",
      name: "menuStyle",
      type: "ViewStyle",
    },
    {
      description: "A dropdown can allow multiple selections",
      name: "multiple",
      type: "boolean",
    },
    {
      description: "Called on change",
      name: "onChange",
      type: "func",
      func: {
        title: "(items: Option[], data: DropdownProps) => void",
        params: [
          {
            name: "item",
            description: "New selected items.",
          },
          {
            name: "data",
            description: "Dropdown props.",
          },
        ],
      },
    },
    {
      description: "Called on change",
      name: "onChange",
      type: "func",
      func: {
        title: "(items: Option[], data: DropdownProps) => void",
        params: [
          {
            name: "item",
            description: "New selected items.",
          },
          {
            name: "data",
            description: "Dropdown props.",
          },
        ],
      },
    },
    {
      description: "Called on item press",
      name: "onItemPress",
      type: "func",
      func: {
        title: "(item: Option, data: DropdownProps) => void",
        params: [
          {
            name: "item",
            description: "Pressed item.",
          },
          {
            name: "data",
            description: "Dropdown props.",
          },
        ],
      },
    },
    {
      description: "Called on search input change",
      name: "onSearchChange",
      type: "func",
      func: {
        title: "(text: string, data: DropdownProps) => void",
        params: [
          {
            name: "text",
            description: "Search query.",
          },
          {
            name: "data",
            description: "Dropdown props.",
          },
        ],
      },
    },
    {
      description: "Items for Dropdown component",
      name: "options",
      type: "{content?: any, value: string, text?: string, icon?: IconProps, image?: string, iconPosition?: 'left' | 'right'}[]",
      required: true,
    },
    {
      description: "Called on search input change",
      name: "renderSearchInput",
      type: "func",
      func: {
        title: "(props: TextInputProps) => ReactElement",
        params: [
          {
            name: "props",
            description: "TextInputProps.",
          },
        ],
      },
    },
    {
      description: "Placeholder.",
      name: "placeholder",
      type: "string",
    },
    {
      description:
        "A selection dropdown can allow a user to search through a large list of choices. Pass a function here to replace the default search.",
      name: "search",
      type: "boolean | string",
    },
    {
      description: "Custom selected item style",
      name: "selectedItemStyle",
      type: "ViewStyle",
    },
    {
      description: "Custom selected item container style",
      name: "selectedItemsContainerStyle",
      type: "ViewStyle",
    },
    {
      description: "A dropdown can have its menu scroll.",
      name: "scrolling",
      type: "boolean | number",
    },
    {
      description: "Custom search container style",
      name: "searchContainerStyle",
      type: "ViewStyle",
    },
    {
      description: "Show close icon on selected item",
      name: "showCloseIcon",
      type: "boolean",
    },
  ],
};
