interface Festival {
  addr1: stirng;
  addr2: stirng;
  booktour: stirng;
  cat1: stirng;
  cat2: stirng;
  cat3: stirng;
  contentid: stirng;
  contenttypeid: stirng;
  createdtime: stirng;
  eventstartdate: stirng;
  eventenddate: stirng;
  firstimage: stirng;
  firstimage2: stirng;
  mapx: stirng;
  mapy: stirng;
  mlevel: stirng;
  modifiedtime: stirng;
  readcount: number;
  areacode: stirng;
  sigungucode: stirng;
  tel: stirng;
  title: stirng;
}

interface FestivalDetailCommon {
  contentid: string;
  contenttypeid: string;
  title: string;
  createdtime: string;
  modifiedtime: string;
  tel: string;
  telname: string;
  homepage: string;
  booktour: string;
  firstimage: string;
  firstimage2: string;
  areacode: string;
  sigungucode: string;
  addr1: string;
  addr2: string;
  zipcode: string;
  mapx: string;
  mapy: string;
  mlevel: string;
  overview: string;
}

interface FestivalDetailIntro {
  contentid: string;
  contenttypeid: string;
  sponsor1: string;
  sponsor1tel: string;
  sponsor2: string;
  sponsor2tel: string;
  eventenddate: string;
  playtime: string;
  eventplace: string;
  eventhomepage: string;
  agelimit: string;
  bookingplace: string;
  placeinfo: string;
  subevent: string;
  program: string;
  eventstartdate: string;
  usetimefestival: string;
  discountinfofestival: string;
  spendtimefestival: string;
  festivalgrade: string;
}

interface FestivalDetailInfo {
  contentid: string;
  contenttypeid: string;
  serialnum: string;
  infoname: string;
  infotext: string;
  fldgubun: string;
}

interface FestivalDetailImage {
  contentid: string;
  originimgurl: string;
  imgname: string;
  smallimageurl: string;
  cpyrhtDivCd: string;
  serialnum: string;
}

interface AreaCode {
  rnum: number;
  code: string;
  name: string;
}
