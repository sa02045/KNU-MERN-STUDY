# 프로젝트 개요

## 최종목표 - 이 그림을 이해하자!

![프로젝트 개요](https://user-images.githubusercontent.com/50866506/115214132-2d4c8a80-a13d-11eb-9e71-95654bfc433d.png)

#### 코드 한 줄 한 줄보다는 전체적인 흐름을 살피자!

# 오늘 Todo

- 프로젝트 환경 세팅
- git 기초 + github.io 개인페이지 만들기
- localhost에서 프런트서버 만들기
- 프런트서버의 한계 : TodoList

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

## 안되면 알려주세요!!!

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

## 조금 기다렸다가 재접속.... 배포완료!
