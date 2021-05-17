# 미스홍 투어

전국 축제 조회 서비스
메인 : https://knsan189.github.io/festival_project/

## 목차

1. 제작 기간 & 참여 인원
2. 사용 기술
3. 핵심 기능
4. 트러블 슈팅

### 1. 제작기간 & 참여인원

- 2021년 05월 01 ~ 2021년 05월 24일
- 진하늘 (프론트엔드)
- 홍선기 (프론트엔드)

### 2. 사용기술

- React
- React-Router
- Axios
- PostCSS
- WebPack 
- MomentJs (https://momentjs.com/)

### 3. 핵심 기능
#### 3.1 

### 4. 핵심 트러블 슈팅

#### 4.1 MIXED CONTENT 문제
Mixed Content는 https, http 간 통신 규약이 매칭되지 않을 때 생기는 문제.
한국관광공사에서 제공해주는 API가 https를 제공하지 않아, API 요청시 거부가 되어
프록시서버를 만들어 서버에서 API데이터를 송신하는 방식으로 사용했습니다.

- https://github.com/Rob--W/cors-anywhere
- https://festivalprojectapp.herokuapp.com

#### 4.2 새로고침시 state가 사라지는 문제
- React는 SPA이므로 새로고침을 했을때, state에 있는 정보(API 요청키 등)의 정보가 지워져 여러 오류를 발생시켰습니다.
- 이를 해결하기 위해서 브라우저 저장소를 이용 하여 문제를 해결했습니다.
