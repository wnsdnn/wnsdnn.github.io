---
title: "[Vitepress] Github 블로그 만들기"
createBy: 2022-10-12
---

<br>
<br>
<br>
<br>
<br>

# 글에 들어가기 전에
---
나도 깃허브에서 블로그를 할 수 있는지 몰랐다. 고등학교때 외부에서 오는 쌤이 깃블로그를 운영했었고 그걸 보고 깃블로그를 시작한 선배가 우리들한테 깃블로그를 만들어서 매일 TIL을 쓰면서 회고하는게 어떠냐고 말한 것에서 내 깃블로그는 탄생했다.
<br>
<br>
내가 깃블로그를 시작하고 학교에 친구들 중에서도 깃블로그를 시작해보고 싶은 친구들도 생겼고 회사에서 시켜서 TIL을 시작했지만 귀찮아서 매번 md파일만 깃허브 저장소에 올리는 놈도 한명있다.
그래서 그 친구들이나 혹시 깃블로그를 시작하고 싶어하는 친구들이 있으면 보고 쉽게 따라 만들라고 이글을 적는다.
<br>
<br>
<br>
이 글은 `vitepress-simple-theme` 테마를 기준으로 설명한 글입니다.
<br>
<br>
<br>

# 1. 깃블로그 만들기 시작
---
일단 당연한 얘기지만 깃블로그를 시작할려면 깃허브 계정이 있어야 한다. 

<img src="https://user-images.githubusercontent.com/71883310/197943989-ee843d82-1f22-4875-986b-aeaebb91f764.png" style="width: 70%; object-fit: cover;" />
없으면 이참에 하나 만들자. 


깃허브 주소는 [이곳](https://github.com/)으로

<br>

---

깃허브 계정을 만들었으면 
<img src="https://user-images.githubusercontent.com/71883310/197945119-9fdf786e-c2c7-43b1-878b-49cc25c6154e.png" style="width: 70%; object-fit: cover;" />
`깃허브 계정이름.github.io` 라는 이름의 저장소 생성. (저장소를 만들때 꼭 Public으로 체크 후 저장소를 생성해야 함)
<br>
<br>

저장소를 만들었으면 해당 저장소 `clone` 후 아래의 명령어 들을 터미널에 차례대로 입력.

### Create Package.json
```
npm init -y
```

### Theme Install
```
npm install vitepress vitepress-simple-theme
```
<br>

`node_modules`까지 다운이 완료 되었다면 `package.json`의 내용을 밑에 코드로 바꾼뒤 다시 `npm i` 를 터미널에 입력한다.

``` json
{
    "name": "vitepress-theme",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "dev": "vitepress dev",
        "build": "vitepress build"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
        "sitemap": "^7.1.1",
        "vitepress": "^1.0.0-alpha.4",
        "vitepress-simple-theme": "^0.4.0"
    }
}

```

<br>
<br>
<br>



# 2. 파일 만들기
---
이제 기본 준비는 다 되었고 설정 파일들과 블로그의 글을 적을 파일들을 만들어야 한다.
<br>
-   📁 node_modules/
-   📁 .vitepress/
    -   📁 theme/
        -   📒 index.js
    -   📒 config.js
-   📁docs/
    -   📁 guide/
        -   📗 `Hello.md`
    -   `📗 index.md`
-   📙 .gitignore
-   📙 packge-lock.json
-   📙 packge.json

<br>

위에 경로 대로 폴더랑 파일을 생성후 `config.js`, `index.js`, `index.md` 파일에 각각의 코드를 입력


###  Config.js
``` js
// .vitepress/config.js
const path = require("path");

const rootDir = path.resolve(__dirname, "../");
const mdDir = path.resolve(rootDir, "docs");

export default {
    title: "Hello Friend",
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
                    text: "GUIDE",
                    items: [
                        {
                            text: " · Hello",
                            link: "/guide/hello",
                        },
                    ],
                },
            ],
        },
    },
    vite: {
        ssr: { format: "cjs" },
    },
};
```
<br>

### Index.js
``` js
// // .vitepress/theme/index.js
import Theme from "vitepress-simple-theme";
export default Theme;
```
<br>

### Index.md
``` md
--- 
title: "WELCOME FRIEND"
image: https://images.unsplash.com/photo-1526716173434-a1b560f2065d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80
---
```
<br>
<br>

터미널에 `npm run dev` 입력 후 실행을 시키면 실행과 동시에 `http://localhost:xxxx` 라는 주소를 준다.

<img src="https://user-images.githubusercontent.com/71883310/197955222-d3bb2dd2-b928-4599-a2e5-974fffee96e0.png" style="width: 60%; object-fit: cover;" />

<br>
<br>
인터넷 브라우저로 주소를 입력 후 들아가면 잘 실행되는 걸 확인할수 있다.

<img src="https://user-images.githubusercontent.com/71883310/197950383-55765b5b-b01f-4915-a8d0-384827823453.png" style="width: 90%; object-fit: cover;" />

<br>
<br>

Github에 커밋하기 전에 `node_modules`까지 올라가면 안되니까 `.gitignore` 파일에 밑에 내용 입력

### .gitignore
```
node_modules
```

<br>
입력 다 했으면 Github에 커밋.



<br>
<br>
<br>

# 3. Github Actions 설정
---
(작성중...)

<br>
<br>
<br>

# 댓글
---

<Comment />