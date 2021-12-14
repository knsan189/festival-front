# 미스홍 투어

전국 축제 조회 서비스
메인 : https://knsan189.github.io/festival_project/

## 목차

1. 제작 기간 & 참여 인원
2. 사용 기술
3. 핵심 기능
4. 트러블 슈팅
5. 향후 계획

---

### 1. 제작기간 & 참여인원

- 2021년 05월 01일 ~ 05월 24일
- 진하늘 (프론트엔드, 파이어베이스)
- 홍선기 (프론트엔드)

---

### 2. 사용기술

- React
- React-Router
- Axios
- PostCSS
- WebPack
- MomentJs (https://momentjs.com/)
- FireBase (https://firebase.google.com/)

---

### 3. 핵심 기능

#### 3.1 공휴일이 포함된 달력 표시

- 공공데이터포털에서 제공하는 특일 정보와 MomentJS를 활용해만든 달력을 연동해, 매월 공휴일을 조회할 수 있습니다.

<details>
    <summary>이미지 보기</summary>
    <div markdown="1">
        <img src="https://user-images.githubusercontent.com/77265562/118586417-ab03c480-b7d5-11eb-8b80-4ad4b6dd23a2.jpg">
    </div>
</details>

#### 3.2 원하는 날짜 혹은 지역을 클릭시 해당 조건에 맞는 축제들만 표시

- 한국관광공사에서 제공하는 Tour API를 이용해 전국에 있는 축제 정보들을 데이터를 받아오고, 사용자가 원하는 날짜 혹은 지도, 인기순 최신순 정렬에 맞게 노출시켜주도록 했습니다.
<details>
    <summary>자세히 보기</summary>
    <div markdown="1">
        <img src="https://user-images.githubusercontent.com/77265562/118586513-db4b6300-b7d5-11eb-8315-4af3142b1c91.PNG">
    </div>
</details>

#### 3.3 카카오맵 API와 연동하여, 원하는 축제장소 위치 확인 가능

<details>
    <summary>자세히 보기</summary>
    <div markdown="1">
        <img src="https://user-images.githubusercontent.com/77265562/118586580-fcac4f00-b7d5-11eb-96e5-3a8c4d90441b.PNG">
    </div>
</details>

#### 3.4 SNS 로그인 기능과 사용자가 마음에 든 축제를 찜 목록에 저장하고 확인 가능

- FireBase를 이용해 SNS 로그인 기능과 실시간 데이터베이스에 로그인한 사용자가 원하는 축제들을 담아둘 수 있도록 했습니다.

---

### 4. 핵심 트러블 슈팅

#### 4.1 MIXED CONTENT 문제

Mixed Content는 https, http 간 통신 규약이 매칭되지 않을 때 생기는 문제.
한국관광공사에서 제공해주는 API가 https를 제공하지 않아, API 요청시 브라우저에서 거부가 되어
프록시서버를 만들어 서버에서 API데이터를 송신하는 방식으로 사용했습니다.

<details>
<summary>Before</summary>
<div markdown="1">
        
```javascript
   const httpClient = axios.create({
   baseURL : 'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo',
   params : { 
   serviceKey : "서비스키"
   }}
```
        
</div>
</details>

<details>
<summary>After</summary>
<div markdown="1">
        
```javascript
   const httpClient = axios.create({
   baseURL : 'https://festivalprojectapp.herokuapp.com/http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo',
   params : { 
   serviceKey : "서비스키"
   }}
```
        
</div>
</details>

- https://github.com/Rob--W/cors-anywhere
- https://festivalprojectapp.herokuapp.com

#### 4.2 새로고침시 state가 사라지는 문제

- React는 SPA이므로 새로고침을 했을때, state에 있는 정보(API 요청키 등)의 정보가 지워져 여러 오류를 발생시켰습니다.
- 이를 해결하기 위해서 브라우저 저장소를 이용 하여 문제를 해결했습니다.

<details>
<summary>Solution</summary>
<div markdown="1">

```javascript
let data = useLocation().state;
const sessionData = JSON.parse(sessionStorage.getItem("data"));
if (sessionData) {
  data = sessionData;
}
const { festivalInfo } = data;

useEffect(() => {
  sessionStorage.setItem("data", JSON.stringify(data));
}, [data]);
```

</div>
</details>

### 4.3 로그아웃 후 재로그인 할때 useEffect Cleanup 문제

- router 이동 후, 이동 전 컴포넌트에서 state를 바꾸려는 시도가 있을 때 메모리 lack 에러

<details>
<summary>이전코드</summary>
<div markdown="1">

```javascript
useEffect(() => {
  const stopAuth = () =>
    authService.onAuthChange((user) => {
      if (user) setUserId(user.uid);
      else setUserId(null);
    });
  return () => {
    stopAuth();
  };
});
```

</div>
</details>

- 라우트를 이동전 해당 컴포넌트가 언마운트가 될때 isMount 변수에 Boolean값을 주어 해결했습니다.

<details>
<summary>이후 코드</summary>
<div markdown="1">

```javascript
useEffect(() => {
  let isMount = true;
  authService.onAuthChange((user) => {
    if (isMount) {
      setUserId(user);
    }
  });
  return () => {
    isMount = false;
  };
}, [authService]);
```

</div>
</details>

---

### 5. 향후 계획

1. 코드의 가독성을 높이기 위해 Typescript로 변경예정
2. 반응형 작업
