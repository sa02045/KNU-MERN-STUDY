# 2일차 React

## 0. 프로젝트하기 전 자바스크립트 문법 정리하기

[문법정리하기](https://repetition-motivation.tistory.com/manage/posts/)

## 1.NodeJS 이해하기

[NodeJS 이해하기](https://repetition-motivation.tistory.com/164)

## 2. 모듈 이해하기

[모듈 이해하기](https://repetition-motivation.tistory.com/163)

## 3 CRA없이 React 시작하기

[React시작](https://repetition-motivation.tistory.com/166)

## 3-2 웹팩 실습하기

[웹팩기초실습](https://repetition-motivation.tistory.com/167)

## 4. CRA로 React 시작하기

프로그램을 만드는 과정을 그림 그리기에 비유해봅시다
어떤 대규모의 큰 그림을 만드는 작업을 할 때 처음부터 선 하나하나를 그린다음 색칠을 해도 되지만 ,색칠공부 책처럼 이미 그려진 그림을 가져오고 그 위에 색칠만 하는 작업을 해도 충분합니다.

이렇게 이미 만들어진 무언가를 사용하는 것을 프레임워크라고 합니다

비슷한 개념으로는 라이브러리가 있는데요, 라이브러리는 모듈을 가져와 사용하는 것처럼 어떤 완성된 코드를 내 프로젝트에 가져와서 사용하는 것을 말합니다

가장 인기있는 웹 프론트엔드 프레임워크 중 하나인 React를 사용해봅시다

사실 웹 프레임워크라고 했지만 React는 라이브러리입니다. 공식문서에서도 "사용자 인터페이스를 만들기 위한 JavaScript 라이브러리"라고 React를 소개하고 있습니다

하지만 점점 React가 거대해져가고, CRA의 등장으로 인해 리액트를 프레임워크라고 부르는 개발자들도 많아지고 있습니다.

CRA(create-react-app)으로 리액트를 시작해봅시다

```js
npx create-react-app knutalk-frontend
```

CRA란?

- 리액트 프로젝트를 쉽게 시작할수 있게 도와주는 도구입니다
- 이미 설정된 폴더구조, 패키지를 이용하고, 웹팩이나 바벨같은 빌드환경역시 세팅되어있습니다
- 우리는 빌드환경 걱정없이 추상화 레벨에서 코드를 작성하기만 하면 됩니다

# 컴포넌트란?

리액트는 컴포넌트 기반으로 작성됩니다. 기능과 역할에 따라 코드를 분리해서 관리함으로서 재사용을 하기에 용이합니다.
레고블럭처럼 컴포넌트를 조합하여 프로그램을 완성한다고 생각하면 쉽습니다

1. src - components 폴더를 만들어줍니다.
   그리고 Body, Chat, Head폴더를 만들고 각각의 폴더에 js파일과 css 파일을 만듭니다

2. rfce 스니펫을 이용해 빠르게 함수형 코드를 작성합니다

3. App.js 파일에서 컴포넌트를 불러온 후 다음과 같이 작성합니다

```js
return (
  <div className="App">
    <KnuHead />
    <KnuBody />
    <KnuChat />
  </div>
)
```

이제 각각의 컴포넌트를 작성하여 프로그램을 완성해봅시다

# chat 컴포넌트

# body 컴포넌트

# head 컴포넌트

# props 이해하기

# useState 이해하기

# event.target 이해하기
