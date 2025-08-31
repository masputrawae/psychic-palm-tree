import { handlerCopyCode } from "./module_internal/copy-code";
import { fontSizeHandler } from "./module_internal/font-size";
import { linkPreviewHandler } from "./module_internal/preview-link";
import { searchHandler } from "./module_internal/search";
import { sidebarHandler } from "./module_internal/sidebar";
import { themeHandler } from "./module_internal/theme";
import { viewContentHandler } from "./module_internal/view-content";

const main = () => {
  sidebarHandler();
  viewContentHandler();
  themeHandler();
  fontSizeHandler();
  handlerCopyCode();
  linkPreviewHandler();
  searchHandler();
};

document.addEventListener("DOMContentLoaded", main);
