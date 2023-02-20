export const OPEN_API_KEY = `${process.env.REACT_APP_PUBLIC_API_KEY}`;

export const AREA_CODES = [
  { name: "전국", value: "" },
  { name: "서울", value: "1" },
  { name: "인천", value: "2" },
  { name: "대전", value: "3" },
  { name: "대구", value: "4" },
  { name: "광주", value: "5" },
  { name: "부산", value: "6" },
  { name: "울산", value: "7" },
  { name: "세종시", value: "8" },
  { name: "경기도", value: "31" },
  { name: "강원도", value: "32" },
  { name: "충청북도", value: "33" },
  { name: "충청남도", value: "34" },
  { name: "경상북도", value: "35" },
  { name: "경상남도", value: "36" },
  { name: "전라북도", value: "37" },
  { name: "전라남도", value: "38" },
  { name: "제주도", value: "39" },
];

export const SEASON_LIST = [
  { name: "봄", start: "0301", end: "0531", id: 1 },
  { name: "여름", start: "0601", end: "0831", id: 2 },
  { name: "가을", start: "0901", end: "1130", id: 3 },
  { name: "겨울", start: "1201", end: "1231", id: 4 },
];

export const MONTH_DESCRIPTION = [
  { mon: 1, data: "집에서 즐기는 문화생활! 지금 아니면 안돼! 쇼핑부터 공연까지!" },
  { mon: 2, data: "겨울이 끝나기 전에 계절이 지나면 경험하기 힘든 먹거리, 놀거리, 볼거리" },
  { mon: 3, data: "한 해 진짜 시작! 굳었던 몸을 펴고, 힘차게 시작!" },
  { mon: 4, data: "씨앗이 움트고, 꽃이 피고 따뜻한 날씨에 봄꽃이 만개하는" },
  { mon: 5, data: "가족과 함께, 축제와 함께 매 해 돌아오는 가정의 달, 올해는 특별하게!" },
  { mon: 6, data: "여름의 시작, 축제의 시작 점점 더워지는 날씨, 지치지 말자구요!" },
  { mon: 7, data: "태양이 내리쬐는 계절 낮에도 즐기고, 밤에도 즐기고!" },
  { mon: 8, data: "찌는듯한 더위, 지친 몸을 식혀줄 축제에서 찾아보는 시원함!" },
  { mon: 9, data: "선선해지는 날씨 더운날씨에 제대로 즐기지 못했다면 바로 지금" },
  { mon: 10, data: "빨강, 노랑 알록달록 여름의 푸릇함과는 또 다른 매력" },
  { mon: 11, data: "찬바람이, 불어오면 지치지않고, 한층 더 즐길 수 있는" },
  { mon: 12, data: "하얀 입김과 잘 어우러지는 12월의 분위기, 크리스마스와 반짝반짝 조명들" },
];

export default {};
