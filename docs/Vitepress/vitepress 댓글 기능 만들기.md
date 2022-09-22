---
title: "[Vitepress] 깃블로그에 댓글 기능 만들기 (+Utterances)"
createBy: 2022-09-17
---

<br>
<br>
<br>
<br>
<br>

# Utterances 소개
---
일단 댓글 기능을 만드는데 사용할 `Utterances`에 대해 소개해볼까한다.

<h2>Utterances가 뭘까?</h2>

Utterances는 Github의 `Issues`기능을 기반으로한 댓글을 사용하게 해주는 플러그인이다.


<h2>Utterances의 장점</h2>

- 설치 및 관리가 간편하다
- 깃허브 계정만 있어도 댓글을 작성할 수 있다.
- 댓글 알람을 받을 수 있다.
- markdown문법을 이용하여 댓글을 작성할 수 있다.

등 여러 장점들이 있다.

<br>
<br>
<br>
<br>

# Utterances 설치
---
일단 Utterances를 설치 할려면 댓글을 등록할 `Github Repository`가 필요하다.
<img src="https://user-images.githubusercontent.com/71883310/191634361-e56df53d-3270-48e9-bc22-a3359da44f2c.png" style="border: 1px solid #eee; border-radius: 7px;" />


필자는 `blog_comment`라는 `Github Repository`를 만들었다. 

<br>

Repository를 만든 다음 [이 링크](https://github.com/apps/utterances)로 들어가서 
<br>

<img src="https://user-images.githubusercontent.com/71883310/191635049-3ca66acd-a18f-4fa6-991d-c2a3a5bdfd01.png" style="border: 1px solid #eee; border-radius: 7px;" />

`install` 버튼 클릭 후

<br>

<img src="https://user-images.githubusercontent.com/71883310/191635322-cfeab22d-a392-4cdc-bac6-80ba1677eb22.png" style="border: 1px solid #eee; border-radius: 7px;" />

`Only select repositories` 선택 후 방금 만든 `Github Repository`를 선택후 `Install` 해준다.

<br>
<br>
<br>
<br>

# Vitepress 코드 수정
---


### `component` 생성

```
.vitepress/components/Comment.vue
```
해당경로로 파일 생성

```
<template>
  <div ref="comment"></div>
</template>
<script>
export default {
  mounted() {
    const utterances = document.createElement('script');
    utterances.type = 'text/javascript';
    utterances.async = true;
    utterances.crossorigin = 'anonymous';
    utterances.src = 'https://utteranc.es/client.js';
    
    utterances.setAttribute('issue-term', 'pathname'); // pathname | url | title | og:title 중 택 1
    utterances.setAttribute('theme','github-light');
    utterances.setAttribute('repo', <Github Name/Github Repository> );

    this.$refs.comment.appendChild(utterances);
  }
}
</script>
```

`<Github Name/Github Repository>`에 자신의 깃허브이름/아까만든 Repository명 삽입
<br>
<br>


### `config.js` 수정
```
.vitepress/theme/index.js
```

```
...
import Comment from '../components/Comment.vue'

export default {
    ... // 생략
    enhanceApp({ app }) {
      app.component('Comment', Comment)
    }
    ...
}
```
위에서 만든 `component` import후 export하는데 해당 함수 추가
<br>
<br>
<br>
<br>



# 잘 작동하는지 확인하기
---
```
# Comment 태그확인하기

## 댓글
---

<Comment />
```

<img src="https://user-images.githubusercontent.com/71883310/191643475-d5bba77c-0e43-4d5d-bafb-1a626cdc0466.png" style="border: 1px solid #eee; border-radius: 7px;" />

아무 `.md` 파일에서 `Comment` 태그 추가시 잘 작동하는 걸 볼 수 있다.

<br>
<br>
<br>

# 댓글
---

<Comment />