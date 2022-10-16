// .vitepress/config.js
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'

const links = []

const path = require("path");

const rootDir = path.resolve(__dirname, "../");
const mdDir = path.resolve(rootDir, "docs");


export default {
    title: `wnsdnn blog`,
    head: [
        [
            'script',
            {
                async: true,
                src: 'https://www.googletagmanager.com/gtag/js?id=G-YKBFVJC3YF',
            },
        ],
        ["script", {}, "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-YKBFVJC3YF');"],
        ['meta', { name: 'google-site-verification', content: 'zhv4UHG7Qfn8At3XKNXpBEVVNDHA3hinj_avfyq4m_A' }],
        ['meta', { name: 'naver-site-verification', content: '005a1530a5ef2e6dfad13b2dbbb845fade9fc996' }],
    ],
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
    
    transformHtml: (_, id, { pageData }) => {
        if (!/[\\/]404\.html$/.test(id))
            links.push({
            // you might need to change this if not using clean urls mode
            url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
            lastmod: pageData.lastUpdated
        })
    },
        
    buildEnd: ({ outDir }) => {
        const sitemap = new SitemapStream({ hostname: 'https://wnsdnn.github.io/' })
        const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
        sitemap.pipe(writeStream)
        links.forEach((link) => sitemap.write(link))
        sitemap.end()
    }

}

function getSidebar(){
    return {
        "/sdhs/2210/": [
            {
                text: '2022년 10월',
                collapsible: true,
                items: [
                    { text: '10월 01일', link: '/sdhs/2210/221001' },
                    { text: '10월 02일', link: '/sdhs/2210/221002' },
                    { text: '10월 03일', link: '/sdhs/2210/221003' },
                    { text: '10월 04일', link: '/sdhs/2210/221004' },
                    { text: '10월 05일', link: '/sdhs/2210/221005' },
                    { text: '10월 06일', link: '/sdhs/2210/221006' },
                    { text: '10월 07일', link: '/sdhs/2210/221007' },
                    { text: '10월 08일', link: '/sdhs/2210/221008' },
                    { text: '10월 09일', link: '/sdhs/2210/221009' },
                    { text: '10월 10일', link: '/sdhs/2210/221010' },
                    { text: '10월 11일', link: '/sdhs/2210/221011' },
                    { text: '10월 12일', link: '/sdhs/2210/221012' },
                    { text: '10월 13일', link: '/sdhs/2210/221013' },
                    { text: '10월 14일', link: '/sdhs/2210/221014' },
                    { text: '10월 15일', link: '/sdhs/2210/221015' },
                    { text: '10월 16일', link: '/sdhs/2210/221016' },
                ]
            },
        ],
        "/sdhs/2209/": [
            {
                text: '2022년 9월',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: '09월 01일', link: '/sdhs/2209/220901' },
                    { text: '09월 02일', link: '/sdhs/2209/220902' },
                    { text: '09월 03일', link: '/sdhs/2209/220903' },
                    { text: '09월 04일', link: '/sdhs/2209/220904' },
                    { text: '09월 05일', link: '/sdhs/2209/220905' },
                    { text: '09월 06일', link: '/sdhs/2209/220906' },
                    { text: '09월 07일', link: '/sdhs/2209/220907' },
                    { text: '09월 08일', link: '/sdhs/2209/220908' },
                    { text: '09월 09일', link: '/sdhs/2209/220909' },
                    { text: '09월 10일', link: '/sdhs/2209/220910' },
                    { text: '09월 11일', link: '/sdhs/2209/220911' },
                    { text: '09월 12일', link: '/sdhs/2209/220912' },
                    { text: '09월 13일', link: '/sdhs/2209/220913' },
                    { text: '09월 14일', link: '/sdhs/2209/220914' },
                    { text: '09월 15일', link: '/sdhs/2209/220915' },
                    { text: '09월 16일', link: '/sdhs/2209/220916' },
                    { text: '09월 17일', link: '/sdhs/2209/220917' },
                    { text: '09월 18일', link: '/sdhs/2209/220918' },
                    { text: '09월 19일', link: '/sdhs/2209/220919' },
                    { text: '09월 20일', link: '/sdhs/2209/220920' },
                    { text: '09월 21일', link: '/sdhs/2209/220921' },
                    { text: '09월 22일', link: '/sdhs/2209/220922' },
                    { text: '09월 23일', link: '/sdhs/2209/220923' },
                    { text: '09월 24일', link: '/sdhs/2209/220924' },
                    { text: '09월 25일', link: '/sdhs/2209/220925' },
                    { text: '09월 26일', link: '/sdhs/2209/220926' },
                    { text: '09월 27일', link: '/sdhs/2209/220927' },
                    { text: '09월 28일', link: '/sdhs/2209/220928' },
                    { text: '09월 29일', link: '/sdhs/2209/220929' },
                    { text: '09월 30일', link: '/sdhs/2209/220930' },
                ]
            },
        ],
        "/sdhs/2208/": [
            {
                text: '2022년 8월',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: '08월 01일', link: '/sdhs/2208/220801' },
                    { text: '08월 02일', link: '/sdhs/2208/220802' },
                    { text: '08월 03일', link: '/sdhs/2208/220803' },
                    { text: '08월 04일', link: '/sdhs/2208/220804' },
                    { text: '08월 05일', link: '/sdhs/2208/220805' },
                    { text: '08월 06일', link: '/sdhs/2208/220806' },
                    { text: '08월 07일', link: '/sdhs/2208/220807' },
                    { text: '08월 08일', link: '/sdhs/2208/220808' },
                    { text: '08월 09일', link: '/sdhs/2208/220809' },
                    { text: '08월 10일', link: '/sdhs/2208/220810' },
                    { text: '08월 11일', link: '/sdhs/2208/220811' },
                    { text: '08월 12일', link: '/sdhs/2208/220812' },
                    { text: '08월 13일', link: '/sdhs/2208/220813' },
                    { text: '08월 14일', link: '/sdhs/2208/220814' },
                    { text: '08월 15일', link: '/sdhs/2208/220815' },
                    { text: '08월 16일', link: '/sdhs/2208/220816' },
                    { text: '08월 17일', link: '/sdhs/2208/220817' },
                    { text: '08월 18일', link: '/sdhs/2208/220818' },
                    { text: '08월 19일', link: '/sdhs/2208/220819' },
                    { text: '08월 20일', link: '/sdhs/2208/220820' },
                    { text: '08월 21일', link: '/sdhs/2208/220821' },
                    { text: '08월 22일', link: '/sdhs/2208/220822' },
                    { text: '08월 23일', link: '/sdhs/2208/220823' },
                    { text: '08월 24일', link: '/sdhs/2208/220824' },
                    { text: '08월 25일', link: '/sdhs/2208/220825' },
                    { text: '08월 26일', link: '/sdhs/2208/220826' },
                    { text: '08월 27일', link: '/sdhs/2208/220827' },
                    { text: '08월 28일', link: '/sdhs/2208/220828' },
                    { text: '08월 29일', link: '/sdhs/2208/220829' },
                    { text: '08월 30일', link: '/sdhs/2208/220830' },
                    { text: '08월 31일', link: '/sdhs/2208/220831' },
                    { text: '08월 31일', link: '/sdhs/2208/220831' },
                    { text: '8월 회고', link: '/sdhs/2208/8월회고' },
                ]
            },
        ],
        "/sdhs/2207/": [
            {
                text: '2022년 7월',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: '07월 01일', link: '/sdhs/2207/220701' },
                    { text: '07월 02일', link: '/sdhs/2207/220702' },
                    { text: '07월 03일', link: '/sdhs/2207/220703' },
                    { text: '07월 04일', link: '/sdhs/2207/220704' },
                    { text: '07월 05일', link: '/sdhs/2207/220705' },
                    { text: '07월 06일', link: '/sdhs/2207/220706' },
                    { text: '07월 07일', link: '/sdhs/2207/220707' },
                    { text: '07월 08일', link: '/sdhs/2207/220708' },
                    { text: '07월 09일', link: '/sdhs/2207/220709' },
                    { text: '07월 10일', link: '/sdhs/2207/220710' },
                    { text: '07월 11일', link: '/sdhs/2207/220711' },
                    { text: '07월 12일', link: '/sdhs/2207/220712' },
                    { text: '07월 13일', link: '/sdhs/2207/220713' },
                    { text: '07월 14일', link: '/sdhs/2207/220714' },
                    { text: '07월 15일', link: '/sdhs/2207/220715' },
                    { text: '07월 16일', link: '/sdhs/2207/220716' },
                    { text: '07월 17일', link: '/sdhs/2207/220717' },
                    { text: '07월 18일', link: '/sdhs/2207/220718' },
                    { text: '07월 19일', link: '/sdhs/2207/220719' },
                    { text: '07월 20일', link: '/sdhs/2207/220720' },
                    { text: '07월 21일', link: '/sdhs/2207/220721' },
                    { text: '07월 22일', link: '/sdhs/2207/220722' },
                    { text: '07월 23일', link: '/sdhs/2207/220723' },
                    { text: '07월 24일', link: '/sdhs/2207/220724' },
                    { text: '07월 25일', link: '/sdhs/2207/220725' },
                    { text: '07월 26일', link: '/sdhs/2207/220726' },
                    { text: '07월 27일', link: '/sdhs/2207/220727' },
                    { text: '07월 28일', link: '/sdhs/2207/220728' },
                    { text: '07월 29일', link: '/sdhs/2207/220729' },
                    { text: '07월 30일', link: '/sdhs/2207/220730' },
                    { text: '07월 31일', link: '/sdhs/2207/220731' },
                    { text: '7월 회고', link: '/sdhs/2207/7월회고' },
                ]
            },
        ],
        "/sdhs/2206/": [
            {
                text: '2022년 6월',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: '06월 25일', link: '/sdhs/2206/220625' },
                    { text: '06월 26일', link: '/sdhs/2206/220626' },
                    { text: '06월 27일', link: '/sdhs/2206/220627' },
                    { text: '06월 28일', link: '/sdhs/2206/220628' },
                    { text: '06월 29일', link: '/sdhs/2206/220629' },
                    { text: '06월 30일', link: '/sdhs/2206/220630' },
                    { text: '6월 회고', link: '/sdhs/2206/6월회고' },
                ]
            },
        ],
        "/": [
            {
                text: 'TIL',
                collapsible: true,
                items: [
                    {text: '2022년 06월',  link: '/TIL/2022_06', activeMatch: "/TIL" },
                    {text: '2022년 07월',  link: '/TIL/2022_07', activeMatch: "/TIL" },
                    {text: '2022년 08월',  link: '/TIL/2022_08', activeMatch: "/TIL" },
                    {text: '2022년 09월',  link: '/TIL/2022_09', activeMatch: "/TIL" },
                    {text: '2022년 10월',  link: '/TIL/2022_10', activeMatch: "/TIL" },
                ]
            },
            {
                text: '일상',
                collapsible: true,
                items: [
                    { 
                        text: '고등학교 생활 첫번째 이야기', 
                        link: '/everyday/고등학교 생활 첫번째 이야기',
                        activeMatch: "/everyday",
                    },
                    { 
                        text: '고등학교 생활 두번째 이야기', 
                        link: '/everyday/고등학교 생활 두번째 이야기',
                        activeMatch: "/everyday",
                    },
                ]
            },
            {
                text: '기능대회',
                collapsible: true,
                items: [
                    { 
                        text: '[CSS] gif 슬라이드', 
                        link: '/webskills/CSS gif 슬라이드',
                        activeMatch: "/webskills",
                    },
                ]
            },
            {
                text: 'Vitepress',
                collapsible: true,
                items: [
                    { 
                        text: 'vitepress 댓글 기능 만들기', 
                        link: '/Vitepress/vitepress 댓글 기능 만들기',
                        activeMatch: "/vitepress",
                    },
                ]
            },
            {
                text: '회고록',
                collapsible: true,
                collapsed: true,
                items: [
                    { 
                        text: '2022년 6월 회고', 
                        link: '/sdhs/2206/6월회고.md',
                        activeMatch: "/sdhs",
                    },
                    { 
                        text: '2022년 7월 회고', 
                        link: '/sdhs/2207/7월회고.md',
                        activeMatch: "/sdhs",
                    },
                    { 
                        text: '2022년 8월 회고', 
                        link: '/sdhs/2208/8월회고.md',
                        activeMatch: "/sdhs",
                    },
                    { 
                        text: '2022년 9월 회고', 
                        link: '/sdhs/2209/9월회고.md',
                        activeMatch: "/sdhs",
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
    ]
}