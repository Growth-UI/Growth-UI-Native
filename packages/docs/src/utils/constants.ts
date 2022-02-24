import { GUI } from "@growth-ui/native/utils";
import { HORIZONTALALIGNMENTS, VERTICALALIGNMENTS } from "@growth-ui/native/utils/GUI";

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
    "row",
    "slider",
    "spacer",
    "typography",
  ],
  molecules: ["comment", "list"],
};
export const components = [
  "avatar",
  "badge",
  "box",
  "button",
  "chip",
  "collapse",
  "comment",
  "icon",
  "image",
  "input",
  "list",
  "row",
  "slider",
  "spacer",
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
  slider: {
    names: ["Slider"],
  },
  spacer: {
    names: ["Spacer"],
  },
  typography: {
    names: ["Typography"],
  },
  // Molecules
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
  list: {
    names: ["List", "List.Content", "List.Description", "List.Heading", "List.Image", "List.Item"],
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
      description: "Icon to display inside the Input.",
      name: "icon",
      type: "IconProps",
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
};
