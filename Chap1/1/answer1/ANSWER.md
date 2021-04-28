# 올바른 코드를 작성하는 연습

## 0.

1. `<script>` 는 body태그 하단에서 불러옵니다

- HTML 파서는 `<script>`를 만나면 HTML 파싱을 멈추고 `<script>` 자바스크립트를 실행합니다
- `<script>`를 HTML상단에 불러오면 만들어지지않은 DOM을 조작하는 오류가 생깁니다

2. `<link>`는 head태그에서 불러옵니다

## 1. CSS로 HTML 태그의 style을 바꿔봅시다

- HTML 태그를 선택하는 선택자는 3가지가 있습니다

  1. 태그선택자 ex) body, div
  2. 클래스 선택자

  - "."을 앞에 붙입니다
  - ex) .btn .article

  3. 아이디 선택자

  - "#"을 앞에 붙입니다
  - ex) #btn #photo

[style을 지정할 때 무조건 클래스를 사용합니다](https://ui.toast.com/fe-guide/ko_HTMLCSS#%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%A7%80%EC%A0%95-%EC%8B%9C-%EC%95%84%EC%9D%B4%EB%94%94-%EB%8C%80%EC%8B%A0-%ED%81%B4%EB%9E%98%EC%8A%A4%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%9C%EB%8B%A4)

- 선택자에는 우선순위가 있는데, 유지보수 측면에서 아이디 선택자를 (잘) 사용하지 않습니다
- 아이디 선택자가 클래스선택자보다 우선순위가 높기때문에 예측하지 못한 상황이 일어 날 수 있습니다

## 1-1. CSS 색깔을 지정할때는 변수를 사용합시다

- "red" "blue"등의 키워드는 브라우저마다 해석이 달라 원하는 색깔을 정확히 보여주기 어렵습니다
- 유지보수 측면에서 변수를 이용해서 관리해야합니다

ex) 글씨 색깔이 원래 #fefefe였는데 #bcbcbc로 바꾸고 싶어요

```
.title{
  color: #fefefe;
}

.title2{
  color:#fefefe;
}


...
...
...
```

만약 태그의 개수가 수백개, 수천개라면?

## 2. 자바스크립트로 DOM을 조작해봅시다

[스타일지정을 위해 사용된 클래스를 사용하지 않습니다](https://ui.toast.com/fe-guide/ko_HTMLCSS#%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-hook%EC%97%90%EC%84%9C-%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%A7%80%EC%A0%95%EC%9D%84-%EC%9C%84%ED%95%B4-%EB%A7%8C%EB%93%A4%EC%96%B4%EC%A7%84-%ED%81%B4%EB%9E%98%EC%8A%A4%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%A7%80-%EC%95%8A%EB%8A%94%EB%8B%A4)

1. 프로그래밍의 원칙인 책임에 따른 분리
2. CSS 스타일 지정클래스와 JS 동작제어 클래스를 분리해서 관리해야합니다
3. 접두어 js-를 붙입니다

## 3.HTML 태그로 구조를 정의해봅시다

- `<h1>` 제목을 정의합니다
- `<button>` 버튼을 정의합니다
- `<div>` division이라는 의미로 영역을 정의합니다

[div만 사용하지 말고, 시맨틱 태그작성을 해야합니다](https://ui.toast.com/fe-guide/ko_HTMLCSS#%EB%AA%A9%EC%A0%81%EC%97%90-%EB%A7%9E%EB%8A%94-html-%ED%83%9C%EA%B7%B8%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%9C%EB%8B%A4)

- 코딩테스트 기출문제 : `<div>`태그로 작성된 코드를 시맨틱하게 리팩토링해주세요
- SEO(검색엔진 최적화)에 도움됩니다
- 유지보수 및 다른 개발자들이 접근성이 용이합니다

## 4. JS 코딩스타일

함수선언식 대신 함수 표현식으로 작성합시다 feat. Airbnb JS 스타일가이드

```js
// bad
function clickHandler() {
  title.style.color = "#FF0000"
}

const clickHandler = function () {
  title.style.color = "#FF0000"
}
```

# 브라우저 동작원리

- 이미지 프로그램 (꿀뷰,알씨)는 이미지 파일(.jpg .png)을 해석하고 우리에게 이미지를 보여줍니다
- 동영상 프로그램 (곰플레이어,KM플레이어)는 동영상 파일을 해석하고 우리에게 영상을 보여줍니다
- 게임 프로그램 (롤,스타)은 클릭,키보드누르는 것을 해석하고 우리에게 결과를 보여줍니다

### 그렇다면 브라우저는 HTML, CSS, JS파일을 어떻게 해석해서 화면으로 보여주는 걸까요?

### DOM과 CSSOM을 이해합시다

1. 브라우저는 HTML 파서(해석기)로 HTML파일을 해석하고, DOM트리를 구축합니다
2. DOM은 자바스크립트가 HTML태그를 조작하기 위한 객체이자 API입니다

- DOM(Document Object Model)
- DOM에는 HTML태그의 정보가 들어있습니다
- DOM은 HTML(document)를 Node객체로 표현합니다.
- `Element`와 `Node`는 정확하게는 다르지만, 지금 당장은 같다고 이해합시다
- `createElement` `getElementById`

[노드vs엘리먼트](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcxY8s1%2FbtqziD5fNy3%2Fri1R7tkD108xKle2BgRE8k%2Fimg.jpg)

3. 브라우저는 CSS 파서로 CSS파일을 해석하고 CSSOM트리를 구축합니다

- CSSOM에는 CSS파일로 작성한 스타일정보가 들어있습니다

4. DOM 트리 + CSSOM 트리 = 렌더링 트리를 구축합니다

5. 브라우저의 렌더링엔진은 렌더링트리에 따라 px,레이아웃 위치등을 계산하고 브라우저 화면에 결과를 그립니다

- 렌더링 엔진
- 크롬(웹킷)

6. DOM엘리먼트가 바뀔 때마다 브라우저는 다시 렌더링됩니다

- VirtualDOM, React가 나오게 된 배경

[브라우저는 어떻게 동작하는가](https://d2.naver.com/helloworld/59361)

### Javascript 엔진

- 크롬의 V8엔진
- 모질라의 라이노

#### JS엔진은 자바스크립트 파일을 실행합니다

#### Node.JS는 브라우저의 V8엔진을 가져와서 만든 런타임!(실행기)

- Node.JS 공식 설명

  > Node.js®는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임입니다.

- Node.JS는 django, spring과 같은 프레임워크가 아닙니다!

- Node.js = v8엔진 + libuv라이브러리(비동기입출력) + 기타 환경

[V8엔진은 어떻게 작동하는가](https://engineering.huiseoul.com/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%9E%91%EB%8F%99%ED%95%98%EB%8A%94%EA%B0%80-v8-%EC%97%94%EC%A7%84%EC%9D%98-%EB%82%B4%EB%B6%80-%EC%B5%9C%EC%A0%81%ED%99%94%EB%90%9C-%EC%BD%94%EB%93%9C%EB%A5%BC-%EC%9E%91%EC%84%B1%EC%9D%84-%EC%9C%84%ED%95%9C-%EB%8B%A4%EC%84%AF-%EA%B0%80%EC%A7%80-%ED%8C%81-6c6f9832c1d9)
