// .vitepress/config.js
const path = require("path");

const rootDir = path.resolve(__dirname, "../");
const mdDir = path.resolve(rootDir, "docs");

export default {
    title: "wnsdnn blog",
    description:
        "Theme for sharing created using vitepress. Please use it a lot 😊",
    srcDir: mdDir,
    themeConfig: {
        nav: [
            {
                text: "guide",
                link: "/guide/hello",
                activeMatch: "/guide/",
            },
        ],
        sidebar: {
            "/guide/": [
                {
                    text: " WELCOME ",
                    items: [
                        {
                            text: "· Hello Friend",
                            link: "/guide/hello",
                        },
                    ],
                },
            ],
            "/": [
                {
                    text: "TIL",
                    items: [
                        { text: " · Hello", link: "/guide/hello" },
                        { text: " · Hello", link: "/TIL/" },
                        { text: " · Hello", link: "/TIL/" },
                        { text: " · Hello", link: "/TIL/" },
                        { text: " · Hello", link: "/TIL/" },
                        { text: " · Hello", link: "/TIL/" },
                        { text: " · Hello", link: "/TIL/" },
                    ],
                },
            ],
        },
    },
};
