import { GrowthICONS } from "../../../types";

const getIconComponent = (name: GrowthICONS) => {
  switch (name) {
    case "add":
      return require("../Add").default;
    case "airplane":
      return require("../Airplane").default;
    case "apple":
      return require("../Apple").default;
    case "arrow dropdown":
      return require("../ArrowDropdown").default;
    case "arrow right circle fill":
      return require("../ArrowRightCircleFill").default;
    case "aws":
      return require("../Aws").default;
    case "bank":
      return require("../Bank").default;
    case "bill":
      return require("../Bill").default;
    case "bold":
      return require("../Bold").default;
    case "bookmark":
      return require("../Bookmark").default;
    case "camera":
      return require("../Camera").default;
    case "card":
      return require("../Card").default;
    case "cart":
      return require("../Cart").default;
    case "check":
      return require("../Check").default;
    case "checkbox":
      return require("../Checkbox").default;
    case "chevron down":
      return require("../ChevronDown").default;
    case "chevron left":
      return require("../ChevronLeft").default;
    case "chevron right":
      return require("../ChevronRight").default;
    case "chevron up":
      return require("../ChevronUp").default;
    case "close":
      return require("../Close").default;
    case "codepen":
      return require("../Codepen").default;
    case "code slash":
      return require("../CodeSlash").default;
    case "comment":
      return require("../Comment").default;
    case "confirmation number":
      return require("../ConfirmationNumber").default;
    case "dashboard":
      return require("../Dashboard").default;
    case "democrat":
      return require("../Democrat").default;
    case "donate":
      return require("../Donate").default;
    case "dots horizontal rounded":
      return require("../DotsHorizontalRounded").default;
    case "download":
      return require("../Download").default;
    case "drafts":
      return require("../Drafts").default;
    case "edit":
      return require("../Edit").default;
    case "email":
      return require("../Email").default;
    case "email outline":
      return require("../EmailOutline").default;
    case "file copy":
      return require("../FileCopy").default;
    case "file copy outline":
      return require("../FileCopyOutline").default;
    case "file outline":
      return require("../FileOutline").default;
    case "folder outline":
      return require("../FolderOutline").default;
    case "github":
      return require("../Github").default;
    case "heart":
      return require("../Heart").default;
    case "home":
      return require("../Home").default;
    case "image":
      return require("../Image").default;
    case "inbox":
      return require("../Inbox").default;
    case "install":
      return require("../Install").default;
    case "italic":
      return require("../Italic").default;
    case "label important":
      return require("../LabelImportant").default;
    case "language":
      return require("../Language").default;
    case "link":
      return require("../Link").default;
    case "list ol":
      return require("../ListOl").default;
    case "list ul":
      return require("../ListUl").default;
    case "location":
      return require("../Location").default;
    case "menu":
      return require("../Menu").default;
    case "message":
      return require("../Message").default;
    case "newspaper":
      return require("../Newspaper").default;
    case "notifications":
      return require("../Notifications").default;
    case "npm":
      return require("../Npm").default;
    case "package":
      return require("../Package").default;
    case "paperclip":
      return require("../Paperclip").default;
    case "partly sunny":
      return require("../PartlySunny").default;
    case "people":
      return require("../People").default;
    case "pie chart":
      return require("../PieChart").default;
    case "play":
      return require("../Play").default;
    case "play skip back":
      return require("../PlaySkipBack").default;
    case "play skip forward":
      return require("../PlaySkipForward").default;
    case "plus":
      return require("../Plus").default;
    case "price tag":
      return require("../PriceTag").default;
    case "purchase tag":
      return require("../PurchaseTag").default;
    case "qrcode":
      return require("../QrCode").default;
    case "react logo":
      return require("../ReactLogo").default;
    case "refresh outline":
      return require("../RefreshOutline").default;
    case "republican":
      return require("../Republican").default;
    case "school":
      return require("../School").default;
    case "search":
      return require("../Search").default;
    case "send":
      return require("../Send").default;
    case "settings":
      return require("../Settings").default;
    case "share":
      return require("../Share").default;
    case "ship":
      return require("../Ship").default;
    case "shipping":
      return require("../Shipping").default;
    case "shopping bag":
      return require("../ShoppingBag").default;
    case "star":
      return require("../Star").default;
    case "star fill":
      return require("../StarFill").default;
    case "star half":
      return require("../StarHalf").default;
    case "sun":
      return require("../Sun").default;
    case "support agent":
      return require("../SupportAgent").default;
    case "thumbs down":
      return require("../ThumbsDown").default;
    case "thumbs up":
      return require("../ThumbsUp").default;
    case "tool outline":
      return require("../ToolOutline").default;
    case "trash":
      return require("../Trash").default;
    case "triangle down":
      return require("../TriangleDown").default;
    case "triangle up":
      return require("../TriangleUp").default;
    case "underline":
      return require("../Underline").default;
    case "warning":
      return require("../Warning").default;
    case "yarn":
      return require("../Yarn").default;
  }
};

export default getIconComponent;
