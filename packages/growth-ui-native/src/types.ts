import { ViewStyle } from "react-native";

export type VERTICALALIGNMENTS = "baseline" | "top" | "middle" | "bottom" | "stretch";
export type HORIZONTALALIGNMENTS =
  | "left"
  | "center"
  | "right"
  | "space-between"
  | "space-around"
  | "space-evenly";
export type DIRECTION =
  | "top center"
  | "top left"
  | "top right"
  | "bottom center"
  | "bottom left"
  | "bottom right"
  | "right center"
  | "left center";
export type TEXTALIGNMENTS = "left" | "center" | "right" | "auto";
export type COLORS =
  | "primary"
  | "secondary"
  | "black"
  | "white"
  | "gray-50"
  | "gray-100"
  | "gray-200"
  | "gray-300"
  | "gray-400"
  | "gray-500"
  | "gray-600"
  | "gray-700"
  | "gray-800"
  | "gray-900"
  | "red-50"
  | "red-100"
  | "red-200"
  | "red-300"
  | "red-400"
  | "red-500"
  | "red-600"
  | "red-700"
  | "red-800"
  | "red-900"
  | "blue-50"
  | "blue-100"
  | "blue-200"
  | "blue-300"
  | "blue-400"
  | "blue-500"
  | "blue-600"
  | "blue-700"
  | "blue-800"
  | "blue-900"
  | "green-50"
  | "green-100"
  | "green-200"
  | "green-300"
  | "green-400"
  | "green-500"
  | "green-600"
  | "green-700"
  | "green-800"
  | "green-900"
  | "pink-50"
  | "pink-100"
  | "pink-200"
  | "pink-300"
  | "pink-400"
  | "pink-500"
  | "pink-600"
  | "pink-700"
  | "pink-800"
  | "pink-900"
  | "indigo-50"
  | "indigo-100"
  | "indigo-200"
  | "indigo-300"
  | "indigo-400"
  | "indigo-500"
  | "indigo-600"
  | "indigo-700"
  | "indigo-800"
  | "indigo-900"
  | "yellow-50"
  | "yellow-100"
  | "yellow-200"
  | "yellow-300"
  | "yellow-400"
  | "yellow-500"
  | "yellow-600"
  | "yellow-700"
  | "yellow-800"
  | "yellow-900"
  | "purple-50"
  | "purple-100"
  | "purple-200"
  | "purple-300"
  | "purple-400"
  | "purple-500"
  | "purple-600"
  | "purple-700"
  | "purple-800"
  | "purple-900";
export type SIZES = "mini" | "tiny" | "small" | "medium" | "large" | "big" | "huge" | "massive";
export type FONTWEIGHTS =
  | "thin"
  | "light"
  | "normal"
  | "medium"
  | "semi bold"
  | "bold"
  | "extra bold";
export type GrowthICONS =
  | "add"
  | "airplane"
  | "apple"
  | "arrow dropdown"
  | "arrow right circle fill"
  | "aws"
  | "bank"
  | "bill"
  | "bold"
  | "bookmark"
  | "camera"
  | "card"
  | "cart"
  | "check"
  | "checkbox"
  | "chevron down"
  | "chevron left"
  | "chevron right"
  | "chevron up"
  | "close"
  | "codepen"
  | "code slash"
  | "comment"
  | "confirmation number"
  | "dashboard"
  | "democrat"
  | "donate"
  | "dots horizontal rounded"
  | "download"
  | "drafts"
  | "edit"
  | "email"
  | "email outline"
  | "file copy"
  | "file copy outline"
  | "file outline"
  | "folder outline"
  | "github"
  | "heart"
  | "home"
  | "image"
  | "inbox"
  | "install"
  | "italic"
  | "label important"
  | "language"
  | "link"
  | "list ol"
  | "list ul"
  | "location"
  | "menu"
  | "message"
  | "newspaper"
  | "notifications"
  | "npm"
  | "package"
  | "paperclip"
  | "partly sunny"
  | "people"
  | "pie chart"
  | "play"
  | "play skip back"
  | "play skip forward"
  | "price tag"
  | "purchase tag"
  | "react logo"
  | "refresh outline"
  | "republican"
  | "school"
  | "search"
  | "send"
  | "settings"
  | "share"
  | "ship"
  | "shipping"
  | "shopping bag"
  | "star"
  | "star fill"
  | "star half"
  | "sun"
  | "support agent"
  | "thumbs down"
  | "thumbs up"
  | "tool outline"
  | "trash"
  | "triangle down"
  | "triangle up"
  | "underline"
  | "warning"
  | "yarn";

export type SPACING = Partial<{
  m: number | string;
  p: number | string;
  mt: number | string;
  ml: number | string;
  mr: number | string;
  mb: number | string;
  mx: number | string;
  my: number | string;
  pt: number | string;
  pr: number | string;
  pb: number | string;
  pl: number | string;
  px: number | string;
  py: number | string;
}>;

export type SIZING = Partial<{
  w: number | string;
  h: number | string;
  maxWidth: number | string;
  minWidht: number | string;
  maxHeight: number | string;
  minHeight: number | string;
}>;

export type PALETTE = Partial<{
  color: string;
  bg: string;
}>;

export type SX = SPACING & SIZING & PALETTE & ViewStyle;
