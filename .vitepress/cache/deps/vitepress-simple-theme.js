// node_modules/vitepress-simple-theme/.vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import Layout from "C:/Users/user/Desktop/git/wnsdnn.github.io/node_modules/vitepress-simple-theme/.vitepress/theme/Layout.vue";
import NotFound from "C:/Users/user/Desktop/git/wnsdnn.github.io/node_modules/vitepress-simple-theme/.vitepress/theme/NotFound.vue";
import "C:/Users/user/Desktop/git/wnsdnn.github.io/node_modules/vitepress-simple-theme/.vitepress/css/common.css";
var theme_default = {
  ...DefaultTheme,
  Layout,
  NotFound,
  // this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
  }
};
export {
  theme_default as default
};
//# sourceMappingURL=vitepress-simple-theme.js.map
