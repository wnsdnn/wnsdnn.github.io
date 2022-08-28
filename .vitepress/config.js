// .vitepress/config.js
const path = require("path");

const rootDir = path.resolve(__dirname, "../");
const mdDir = path.resolve(rootDir, "docs");

export default {
    title: "wnsdnn(기능노예) blog",
    description:"Theme for sharing created using vitepress. Please use it a lot 😊",
    srcDir : mdDir,
    themeConfig: {
        logo: 'https://user-images.githubusercontent.com/71883310/181257857-4aa6ea13-8b07-497e-b670-e4996c76f180.jpg',
        sidebar:getSidebar(),
        nav: getNav()
    },
    vite: {
        ssr: {
            format: "cjs",
        }
    },

}

function getSidebar(){
    return {
        "/sdhs/2208/": [
            {
                text: 'Day',
                collapsible: true,
                items: [
                    { text: '2022_08_01', link: '/sdhs/2208/220801' },
                    { text: '2022_08_02', link: '/sdhs/2208/220802' },
                    { text: '2022_08_03', link: '/sdhs/2208/220803' },
                    { text: '2022_08_04', link: '/sdhs/2208/220804' },
                    { text: '2022_08_05', link: '/sdhs/2208/220805' },
                    { text: '2022_08_06', link: '/sdhs/2208/220806' },
                    { text: '2022_08_07', link: '/sdhs/2208/220807' },
                    { text: '2022_08_08', link: '/sdhs/2208/220808' },
                    { text: '2022_08_09', link: '/sdhs/2208/220809' },
                    { text: '2022_08_10', link: '/sdhs/2208/220810' },
                    { text: '2022_08_11', link: '/sdhs/2208/220811' },
                    { text: '2022_08_12', link: '/sdhs/2208/220812' },
                    { text: '2022_08_13', link: '/sdhs/2208/220813' },
                    { text: '2022_08_14', link: '/sdhs/2208/220814' },
                    { text: '2022_08_15', link: '/sdhs/2208/220815' },
                    { text: '2022_08_16', link: '/sdhs/2208/220816' },
                    { text: '2022_08_17', link: '/sdhs/2208/220817' },
                    { text: '2022_08_18', link: '/sdhs/2208/220818' },
                    { text: '2022_08_19', link: '/sdhs/2208/220819' },
                    { text: '2022_08_20', link: '/sdhs/2208/220820' },
                    { text: '2022_08_21', link: '/sdhs/2208/220821' },
                    { text: '2022_08_22', link: '/sdhs/2208/220822' },
                    { text: '2022_08_23', link: '/sdhs/2208/220823' },
                    { text: '2022_08_24', link: '/sdhs/2208/220824' },
                    { text: '2022_08_25', link: '/sdhs/2208/220825' },
                    { text: '2022_08_26', link: '/sdhs/2208/220826' },
                    { text: '2022_08_27', link: '/sdhs/2208/220827' },
                    { text: '2022_08_28', link: '/sdhs/2208/220828' },
                ]
            },
        ],
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
                    { text: '2022_07_08', link: '/sdhs/2207/220708' },
                    { text: '2022_07_09', link: '/sdhs/2207/220709' },
                    { text: '2022_07_10', link: '/sdhs/2207/220710' },
                    { text: '2022_07_11', link: '/sdhs/2207/220711' },
                    { text: '2022_07_12', link: '/sdhs/2207/220712' },
                    { text: '2022_07_13', link: '/sdhs/2207/220713' },
                    { text: '2022_07_14', link: '/sdhs/2207/220714' },
                    { text: '2022_07_15', link: '/sdhs/2207/220715' },
                    { text: '2022_07_16', link: '/sdhs/2207/220716' },
                    { text: '2022_07_17', link: '/sdhs/2207/220717' },
                    { text: '2022_07_18', link: '/sdhs/2207/220718' },
                    { text: '2022_07_19', link: '/sdhs/2207/220719' },
                    { text: '2022_07_20', link: '/sdhs/2207/220720' },
                    { text: '2022_07_21', link: '/sdhs/2207/220721' },
                    { text: '2022_07_22', link: '/sdhs/2207/220722' },
                    { text: '2022_07_23', link: '/sdhs/2207/220723' },
                    { text: '2022_07_24', link: '/sdhs/2207/220724' },
                    { text: '2022_07_25', link: '/sdhs/2207/220725' },
                    { text: '2022_07_26', link: '/sdhs/2207/220726' },
                    { text: '2022_07_27', link: '/sdhs/2207/220727' },
                    { text: '2022_07_28', link: '/sdhs/2207/220728' },
                    { text: '2022_07_29', link: '/sdhs/2207/220729' },
                    { text: '2022_07_30', link: '/sdhs/2207/220730' },
                    { text: '2022_07_31', link: '/sdhs/2207/220731' },
                    { text: '7월 회고', link: '/sdhs/2207/7월회고' },
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
                    { text: '6월 회고', link: '/sdhs/2206/6월회고' },
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
                    {text: '2022_08',  link: '/TIL/2022_08', activeMatch: "/TIL" },
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