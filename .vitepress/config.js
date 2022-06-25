// .vitepress/config.js
const path = require("path");

const rootDir = path.resolve(__dirname, "../");
const mdDir = path.resolve(rootDir, "docs");

export default {
    title: "wnsdnn blog",
    description:"Theme for sharing created using vitepress. Please use it a lot 😊",
    srcDir : mdDir,
    themeConfig: {
        // logo: '',
        sidebar:getSidebar(),
        nav: getNav()
    },

}

function getSidebar(){
    return [
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
    ]
    // return {
    //     "/":[
    //         {
    //             text: 'TIL',
    //             collapsible: true,
    //             items: [
    //                 { 
    //                     text: '2022-06', 
    //                     link: '/TIL/2022_06',
    //                     activeMatch: "/TIL",
    //                 },
    //             ]
    //         },
    //     ],
    // };
}

function getNav(){
    return [
        {
            text: "HOME",
            link:"/",
        },
        {
            text: "TIL",
            link:"/TIL/til",
            activeMatch: "/TIL",
        },
    ]
}