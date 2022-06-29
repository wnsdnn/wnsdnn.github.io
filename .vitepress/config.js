// .vitepress/config.js
const path = require("path");

const rootDir = path.resolve(__dirname, "../");
const mdDir = path.resolve(rootDir, "docs");

export default {
    title: "wnsdnn(기능노예) blog",
    description:"Theme for sharing created using vitepress. Please use it a lot 😊",
    srcDir : mdDir,
    themeConfig: {
        // logo: '',
        sidebar:getSidebar(),
        nav: getNav()
    },

}

function getSidebar(){
    return {
        "/sdhs/2206/": [
            {
                text: 'Day',
                collapsible: true,
                items: [
                    { text: '2022_06_25', link: '/sdhs/2206/220625' },
                    { text: '2022_06_26', link: '/sdhs/2206/220626' },
                    { text: '2022_06_27', link: '/sdhs/2206/220627' },
                    { text: '2022_06_28', link: '/sdhs/2206/220628' },
                ]
            },
        ],
        "/": [
            {
                text: 'TIL',
                collapsible: true,
                items: [
                    { 
                        text: '2022_06', 
                        link: '/TIL/2022_06',
                        activeMatch: "/TIL",
                    },
                ]
            },
            {
                text: '일상',
                collapsible: true,
                items: [
                    { 
                        text: '고등학교 생활 첫번째 이야기', 
                        link: '/webskills/고등학교 생활 첫번째 이야기',
                        activeMatch: "/webskills",
                    },
                ]
            },
        ],
    }
}

function getNav(){
    return [
        {
            text: "HOME",
            link:"/",
        },
        {
            text: "TIL이란?",
            link:"/TIL/til",
            activeMatch: "/TIL",
        },
        {
            text: "기능대회",
            // link:"/TIL/til",
            activeMatch: "/webskills",
            items: [
                { text: '문제난이도', link: '/webskills/webskills' },
            ],
        },
    ]
}