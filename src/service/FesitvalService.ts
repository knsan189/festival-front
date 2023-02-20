import axios, { AxiosResponse } from "axios";
import { OPEN_API_KEY } from "../config/const";

const BASE_URL = "https://apis.data.go.kr/B551011/KorService";

interface GetFestivalsResponse extends FestivalServerRespose {
  response: {
    header: FestivalServerRespose["response"]["header"];
    body: {
      items: { item: Festival[] };
      numOfRows: number;
      pageNo: number;
      totalCount: number;
    };
  };
}

class FestivalService {
  private static module = axios.create({
    baseURL: BASE_URL,
    params: {
      serviceKey: OPEN_API_KEY,
    },
  });

  public static getFestivals(month: number): Promise<GetFestivalsResponse> {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const year = new Date().getFullYear();
          const parsedMonth = `${month < 10 ? "0" : ""}${month}`;
          const target = `${year}${parsedMonth}`;
          const response: AxiosResponse<GetFestivalsResponse> = await FestivalService.module({
            url: "/searchFestival",
            params: {
              numOfRows: 30,
              pageNo: 1,
              _type: "json",
              arrange: "R",
              listYN: "Y",
              eventStartDate: `${target}01`,
              eventEndDate: `${target}30`,
              MobileOS: "ETC",
              MobileApp: "AppTest",
            },
          });
          resolve(response.data);
        } catch (error) {
          reject(error);
        }
      })();
    });
  }

  public static seasonData(
    eventStartDate: string,
    eventEndDate: string,
    numOfRows = 30,
  ): Promise<GetFestivalsResponse> {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const year = new Date().getFullYear();
          const response: AxiosResponse<GetFestivalsResponse> = await FestivalService.module({
            url: "/searchFestival",
            params: {
              numOfRows,
              pageNo: 1,
              _type: "json",
              arrange: "R",
              listYN: "Y",
              eventStartDate: `${year}${eventStartDate}`,
              eventEndDate: `${year}${eventEndDate}`,
              MobileOS: "ETC",
              MobileApp: "AppTest",
            },
          });
          resolve(response.data);
        } catch (error) {
          reject(error);
        }
      })();
    });
  }

  // public static thisMonthFestival(
  //   eventDate: string,
  //   pageNo: string,
  //   arrange: string,
  //   areaCode: string,
  // ) {
  //   return new Promise((resolve, reject) => {
  //     (async () => {
  //       try {
  //         const response = await axios({
  //           url: "/searchFestival",
  //           baseURL: BASE_URL,
  //           params: {
  //             pageNo,
  //             numOfRows: "10",
  //             type: "_json",
  //             MobileOS: "ETC",
  //             MobileApp: "Festival",
  //             arrange,
  //             listYN: "Y",
  //             eventStartDate: eventDate,
  //             areaCode: areaCode || null,
  //             eventEndDate: eventDate,
  //           },
  //         });
  //         resolve(response.data.response.body);
  //       } catch (error) {
  //         reject(error);
  //       }
  //     })();
  //   });
  // }

  // static async areaCodes() {
  //   const response = await this.festival.get("/areaCode", {
  //     params: {
  //       pageNo: "1",
  //       numOfRows: "20",
  //       type: "_json",
  //       MobileOS: "ETC",
  //       MobileApp: "Festival",
  //     },
  //   });
  //   return response.data.response.body.items.item;
  // }

  // static async contentInfo(contentId) {
  //   const response = await this.festival.get("/detailCommon", {
  //     params: {
  //       type: "_json",
  //       MobileOS: "ETC",
  //       MobileApp: "Festival",
  //       contentId: contentId,
  //       defaultYN: "Y",
  //       firstImageYN: "Y",
  //       areacodeYN: "Y",
  //       addrinfoYN: "Y",
  //       mapinfoYN: "Y",
  //       overviewYN: "Y",
  //     },
  //   });
  //   return response.data.response.body.items.item;
  // }

  // static async contentImg(contentId) {
  //   const response = await this.festival.get("/detailImage", {
  //     params: {
  //       type: "_json",
  //       MobileOS: "ETC",
  //       MobileApp: "Festival",
  //       contentId: contentId,
  //     },
  //   });
  //   return response.data.response.body.items.item;
  // }

  // static async contentDetail(contentId) {
  //   const response = await this.festival.get("/detailInfo", {
  //     params: {
  //       type: "_json",
  //       MobileOS: "ETC",
  //       MobileApp: "Festival",
  //       contentId: contentId,
  //       contentTypeId: 15,
  //     },
  //   });
  //   return response.data.response.body.items.item;
  // }

  // static async contentIntro(contentId) {
  //   const response = await this.festival.get("/detailIntro", {
  //     params: {
  //       type: "_json",
  //       MobileOS: "ETC",
  //       MobileApp: "Festival",
  //       contentId: contentId,
  //       contentTypeId: 15,
  //     },
  //   });
  //   return response.data.response.body.items.item;
  // }

  // static async searchKeyword(keyword, pageNo, arrage) {
  //   const response = await this.festival.get("/searchKeyword", {
  //     params: {
  //       MobileOS: "ETC",
  //       MobileApp: "Festival",
  //       contentTypeId: 15,
  //       keyword: keyword,
  //       pageNo: pageNo || 1,
  //     },
  //   });
  //   return response.data.response.body;
  // }

  public static temp() {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          resolve("");
        } catch (error) {
          reject(error);
        }
      })();
    });
  }
}

export default FestivalService;
