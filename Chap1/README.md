# 프로젝트 개요

## 최종목표 - 이 그림을 이해하자!

![프로젝트 개요](https://user-images.githubusercontent.com/50866506/115214132-2d4c8a80-a13d-11eb-9e71-95654bfc433d.png)

## 프론트엔드, 백엔드 뭘 배워야 하나요?

### 헷갈릴 땐 로드맵을 따라가자

https://roadmap.sh/

# 오늘 Todo

- 프로젝트 환경 세팅
- git 기초 + github.io 개인페이지 실제 배포하기
- localhost에서 프런트서버 만들기
- HTML, CSS, JS 기초
- 다른 언어와 JS 차이 정리

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

- 미리 정해진 규칙에 따라 구조화된 요소들로 이루어진 마크업 언어
- 태그를 이용해 `구조를 정의`

모든 태그를 다 알아야 하나요?
자주 쓰이는 태그 정리
https://www.advancedwebranking.com/html/

## button 태그로 버튼 만들어보기

# CSS

- HTML을 꾸며준다

## 1.button을 파란색으로 꾸며보자

## 2.선택자

## inline vs Block

# JS

# 브라우저는 어떻게 동작하는가?

## 웹 개발자 필독 아티클 -

https://d2.naver.com/helloworld/59361
