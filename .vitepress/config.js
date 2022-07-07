// .vitepress/config.js
const path = require("path");

const rootDir = path.resolve(__dirname, "../");
const mdDir = path.resolve(rootDir, "docs");

export default {
    title: "wnsdnn(기능노예) blog",
    description:"Theme for sharing created using vitepress. Please use it a lot 😊",
    srcDir : mdDir,
    themeConfig: {
        logo: 'https://user-images.githubusercontent.com/71883310/176566189-96716921-a47e-4e74-84f6-f36641b52e9e.jpg',
        sidebar:getSidebar(),
        nav: getNav()
    },

}

function getSidebar(){
    return {
        "/sdhs/2207/": [
            {
                text: 'Day',
                collapsible: true,
                items: [
                    { text: '2022_07_01', link: '/sdhs/2207/220701' },
                    { text: '2022_07_02', link: '/sdhs/2207/220702' },
                    { text: '2022_07_03', link: '/sdhs/2207/220703' },
                    { text: '2022_07_04', link: '/sdhs/2207/220704' },
                    { text: '2022_07_05', link: '/sdhs/2207/220705' },
                    { text: '2022_07_06', link: '/sdhs/2207/220706' },
                    { text: '2022_07_07', link: '/sdhs/2207/220707' },
                ]
            },
        ],
        "/sdhs/2206/": [
            {
                text: 'Day',
                collapsible: true,
                items: [
                    { text: '2022_06_25', link: '/sdhs/2206/220625' },
                    { text: '2022_06_26', link: '/sdhs/2206/220626' },
                    { text: '2022_06_27', link: '/sdhs/2206/220627' },
                    { text: '2022_06_28', link: '/sdhs/2206/220628' },
                    { text: '2022_06_29', link: '/sdhs/2206/220629' },
                    { text: '2022_06_30', link: '/sdhs/2206/220630' },
                    { text: '회고', link: '/sdhs/2206/6월회고' },
                ]
            },
        ],
        "/": [
            {
                text: 'TIL',
                collapsible: true,
                items: [
                    {text: '2022_06',  link: '/TIL/2022_06', activeMatch: "/TIL" },
                    {text: '2022_07',  link: '/TIL/2022_07', activeMatch: "/TIL" },
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