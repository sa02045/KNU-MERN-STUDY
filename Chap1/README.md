# 스터디 시작하기 전에....

## 2시간을 혼자 끌고 갈 강의력이 없으니 많이 얘기해주고 질문 주세요!!

# 프로젝트 개요

## 최종목표 - 이 그림을 이해하자!

![프로젝트 개요](https://user-images.githubusercontent.com/50866506/115214132-2d4c8a80-a13d-11eb-9e71-95654bfc433d.png)

- 프런트 서버는 브라우저로 index.html css js파일을 전해줍니다
- 백엔드 서버는 REST API를 통해 클라이언트의 요청에 응답합니다 (API 서버)
- MongoDB는 백엔드가 요청하는 데이터를 저장하고 변화가 일어나면 백엔드에게 알려줍니다
- 클라이언트는 Pusher API를 구독합니다
- Pusher API는 백엔드로부터 반응이 오면 클라이언트에게 알려줍니다

## 프론트엔드, 백엔드 뭘 배워야 하나요?

### 웹 개발자 로드맵 구경하기

https://roadmap.sh/

# 오늘 Todo

- 프로젝트 환경 세팅
- git 기초 + github.io 개인페이지 실제 배포하기
- localhost에서 프런트서버 만들기
- HTML, CSS, JS 기초
- 다른 언어와 JS 차이 정리
- React 맛보기

# 프로젝트 환경 세팅

## VSCODE 설치

https://code.visualstudio.com/

## git bash 설치

https://gitforwindows.org/

## github 가입

https://github.com/

## git bash - VSCODE 연결

VSCODE - FILE - Preferrence - Settings - terminal.integrated.shell.windows 입력 - Edit in settings.json 클릭

"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe" 복붙

---

## VSCODE Extension 설치

- Live Server
- HTML CSS Support
- JavaScript (ES6) code snippets
- Beautify
- Prettier - Code formatter
- Auto Import
- ES7 React
- ESLint

# git 기초 + github.io 개인페이지 배포하기

## 1. git 설정하기

```
git config --global user.name "사용자명"
git config --global user.email "메일주소"
```

## 2. 깃허브 repository 만들기

## 3. index.html README.md 만들기

## 3.

```
git add remote origin 주소
git add index.html README.md
git commit -m "Add index.html README.md"
git push origin master
```

## 4.

Settings - Github Pages - Source - Branch:master - Save

조금 기다렸다가 재접속.... 배포완료!

# 우리가 뭘 했나요?

1. `프런트 서버를 만듬` (github가 제공하는 간단한 방법으로.... 원래는 훨씬 복잡)
2. 프런트 서버에게 `index.html`을 주고
3. https://sa02045.github.io/KNU-MERN-STUDY/ `주소로 접속할 때마다 브라우저에게 index.html을 제공(server)하도록 만듬`

# HTML

| 태그를 이용해 `구조를 정의`

- 미리 정해진 규칙에 따라 구조화된 요소들로 이루어진 마크업 언어
- 브라우저마다 해석이 다르다. ex) 크롬에서 button과 explorer에서 button이 다름

### 모든 태그를 다 알아야 하나요?

- 자주 쓰이는 태그 정리
- https://www.advancedwebranking.com/html/

### 혹시 항상 div만 사용하나요??

- 카카오 프론트엔드 코딩테스트 기출문제 중
- HTML을 "시맨틱" 하게 태그를 작성하시오
- https://ui.toast.com/fe-guide/ko_HTMLCSS#%EB%AA%A9%EC%A0%81%EC%97%90-%EB%A7%9E%EB%8A%94-html-%ED%83%9C%EA%B7%B8%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%9C%EB%8B%A4

## HTML 실습하기

1. !DOCTYPE : HTML문서임을 브라우저에게 알려주는 태그
2. head태그 : 메타데이터를 알려주는 역할 (ex. 홈페이지 아이콘, 홈페이지 타이틀등)
3. body태그 : HTML의 본문

### div태그를 만들고 그 안에 h1태그와 button태그를 만들어보자

## display inline vs block

- block 태그는 높이만큼 줄을 차지
- inline 태그는 줄 바꿈을 하지 않는다

# CSS

| HTML을 꾸며준다

## 1.button을 파란색으로 꾸며보자

## 2.선택자

- 태그
- class
- id

| 일단 무조건 class 선택자를 사용합니다

https://ui.toast.com/fe-guide/ko_HTMLCSS#%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%A7%80%EC%A0%95-%EC%8B%9C-%EC%95%84%EC%9D%B4%EB%94%94-%EB%8C%80%EC%8B%A0-%ED%81%B4%EB%9E%98%EC%8A%A4%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%9C%EB%8B%A4

## 3. BOX 모델

![11](https://user-images.githubusercontent.com/50866506/115513662-4892d380-a2be-11eb-8056-b45f9340e1ff.png)

button에 margin과 padding을 적용해보고 F12를 눌러 확인해봅시다

## 4. Flex

Flex는 태그들을 위치시키고 정렬하는 방법입니다

![flex](https://user-images.githubusercontent.com/50866506/115513894-8859bb00-a2be-11eb-89af-03c011a5efb1.jpg)

![flex column](https://user-images.githubusercontent.com/50866506/115514046-ac1d0100-a2be-11eb-9312-1bddcb1bf6b5.jpg)

# JS

## 1. button을 누르면 button 색깔을 파란색으로 바꿔보자

- const?
- document?
- addEventListenr?
- 콜백함수?

# JS 함수를 작성하는 방법

# Q) 매개변수 a,b를 받아 a+b를 return하는 sum함수 작성하기

1. function 키워드 + 함수 선언식
2. function 키워드 + 함수 표현식
3. 익명함수 + 함수 표현식
4. 화살표함수 + 함수 표현식

## 표현식을 사용하는 이유?

- 함수를 인자로 넘길 수 있음 (콜백함수)
- 호이스팅(넘어가도됨)

## 표현식으로 button 클릭 이벤트 콜백함수 작성해보기

# 브라우저는 어떻게 동작하는가?

## 웹 개발자 필독 아티클 -

https://d2.naver.com/helloworld/59361