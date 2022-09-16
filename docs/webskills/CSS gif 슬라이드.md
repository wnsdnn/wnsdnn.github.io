---
title: "CSS gif 슬라이드 만들기(2022 전남 A모듈 문제)"
createBy: 2022-07-27
---
​
<br>


# 1. 이미지 만들기

## 1-1. 포토샵으로 gif 파일 불러오기
![스크린샷(1)](https://user-images.githubusercontent.com/71883310/181180859-dabf83a7-6cf0-4810-82f1-ecf31963fb76.png)
<br>
<br>
<br>

## 1-2. 모든 레이어 보이게 처리
![스크린샷(2)](https://user-images.githubusercontent.com/71883310/181181234-6b8fc32a-bc1e-45ce-91b8-e0458b0f05eb.png)
레이어 전체 선택 후 눈모양 위에서 우클릭
<br>
<br>
​
![화면 캡처 2022-07-27 155341](https://user-images.githubusercontent.com/71883310/181181295-00b16fbf-305b-45c6-8592-1e8d78ffc8d1.png)
"Show this layer" 클릭
​
![스크린샷(3)](https://user-images.githubusercontent.com/71883310/181181622-a549d6b6-27e7-42e0-ab3e-235b041d5de5.png)
그럼 보든 레이어가 보이도록 설정됨
<br>
<br>

## 1-3. 캔버스 크기 바꾸기
![스크린샷(8)](https://user-images.githubusercontent.com/71883310/181184987-c4b5bf7e-5c4d-43de-9348-b48c7a1e774f.png)
"Ctrl + Art + C" 누른되 나오는 창에 
<br>
​
![스크린샷(13)](https://user-images.githubusercontent.com/71883310/181185284-ba7881b7-602a-4552-b952-ba25561135ce.png)
Width 값을 168960(1920*88)으로 변경 후 "OK" 버튼 클릭
​
<br>
<br>
<br>

### 결과
![스크린샷(9)](https://user-images.githubusercontent.com/71883310/181184991-e6f3f5aa-3418-470c-806e-9ded67f1430e.png)
<br>
<br>
<br>

## 1-4. 이미지 레이어 정렬 시키기
![스크린샷(10)](https://user-images.githubusercontent.com/71883310/181184999-581f90c4-70c0-48a0-8b21-8bddd137a1bc.png)
<br>
​
![스크린샷(14)](https://user-images.githubusercontent.com/71883310/181186605-c9c04656-4a2e-4c98-9a83-21c7dc9b35d9.png)
1~ 87번 이미지 레이어를 왼쪽 끝으로 보내고
<br>
<br>
​
![스크린샷(16)](https://user-images.githubusercontent.com/71883310/181186612-281f65da-72c6-412b-8874-bfc4cfe3198d.png)
​
88번 이미지 레이어만 오른쪽 끝으로 보내기
<br>
<br>
<br>
​
![스크린샷(11)](https://user-images.githubusercontent.com/71883310/181185017-b57dd90d-34e9-4452-9fe9-e3d8bbea0802.png)
위에 ••• 버튼 클릭 후
![화면 캡처 2022-07-27 161635](https://user-images.githubusercontent.com/71883310/181185512-90f668b6-f756-4240-b210-26e56aa488e2.png)
위에 사진에 있는 버튼 클릭
​
<br>
<br>

### 결과​
![스크린샷(12)](https://user-images.githubusercontent.com/71883310/181185023-513aed52-db89-4348-89fc-88b4d0ae10fa.png)
<br>

## 1-5. 이미지 저장 후 확장자명 변경
![스크린샷(15)](https://user-images.githubusercontent.com/71883310/181186509-08d0e6f2-b1d2-423b-a5ad-2725f7889764.png)
<br>

![스크린샷(19)](https://user-images.githubusercontent.com/71883310/181187297-80f53952-bbba-4717-86b9-381cbdf7a860.png)
<br>
<br>
<br>

## 1-6. 이미지 완성
![스크린샷(20)](https://user-images.githubusercontent.com/71883310/181187305-556c7d63-8103-40bd-a268-7819e77a50b0.png)
<br>
<br>
<br>

# 2. CSS 슬라이드 만들기
<br>

## 2-1 코드
HTML
```
<input type="checkbox" name="c" id="c">
  <div>
    <img src="./visual.gif" alt="">
  </div>
  <label class="play" for="c">재생</label>
  <label class="pause" for="c">정지</label>
```

CSS
```
* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      user-select: none;
    }

    div {
      position: relative;
      width: 480px;
      height: 270px;
      overflow: hidden;
    }
    
    div img{
      width: calc(480px * 88);
      animation: animate steps(87) 3.6s infinite;
    }

    #c:checked~div img {
      animation-play-state: paused;
      /* checke 되면 animation 멈추기 */
    }

    label {
      display: none;
    }

    #c:checked~.play {
      display: block;
    }

    #c:not(:checked)~.pause {
      display: block;
    }

    @keyframes animate {
      0% {margin-left: 0%;}
      100% {margin-left: -8700%;}
    }
```

<br>
<br>
<br>

## 2-2 완성본

<br>
<video autoplay controls>
    <source src="https://user-images.githubusercontent.com/71883310/190556751-f8405149-98b5-47d5-a35c-0442a8077005.mov">
</video>
<br>
잘 작동하는 걸 볼수 있다.

<br>
<br>
<br>

# 참고 사이트
- https://brunch.co.kr/@mrlees/11
<br>
<br>
<br>