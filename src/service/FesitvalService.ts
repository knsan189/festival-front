import axios, { AxiosResponse } from "axios";
import { OPEN_API_KEY } from "../config/const";

const BASE_URL = "https://apis.data.go.kr/B551011/KorService1";

type GetFestivalsResponse = FestivalServerRespose<Festival>;
type GetDetailCommonResponse = FestivalServerRespose<FestivalDetailCommon>;
type GetDetailIntroResponse = FestivalServerRespose<FestivalDetailIntro>;
type GetDetailInfoResponse = FestivalServerRespose<FestivalDetailInfo>;
type GetDetailImageResponse = FestivalServerRespose<FestivalDetailImage>;

class FestivalService {
  private static instance = axios.create({
    baseURL: BASE_URL,
    params: {
      serviceKey: OPEN_API_KEY,
      _type: "json",
      MobileOS: "ETC",
      MobileApp: "AppTest",
    },
  });

  public static getFestivals(month: number): Promise<GetFestivalsResponse> {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const year = new Date().getFullYear();
          const parsedMonth = `${month < 10 ? "0" : ""}${month}`;
          const target = `${year}${parsedMonth}`;
          const response: AxiosResponse<GetFestivalsResponse> = await FestivalService.instance({
            url: "/searchFestival1",
            params: {
              numOfRows: 30,
              pageNo: 1,
              arrange: "R",
              listYN: "Y",
              eventStartDate: `${target}01`,
              eventEndDate: `${target}30`,
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
          const response: AxiosResponse<GetFestivalsResponse> = await FestivalService.instance({
            url: "/searchFestival1",
            params: {
              numOfRows,
              pageNo: 1,
              arrange: "R",
              listYN: "Y",
              eventStartDate: `${year}${eventStartDate}`,
              eventEndDate: `${year}${eventEndDate}`,
            },
          });
          resolve(response.data);
        } catch (error) {
          reject(error);
        }
      })();
    });
  }

  public static getDetailCommon(contentId: string | number): Promise<GetDetailCommonResponse> {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const response: AxiosResponse<GetDetailCommonResponse> = await FestivalService.instance({
            url: "/detailCommon1",
            params: {
              contentId,
              defaultYN: "Y",
              firstImageYN: "Y",
              areacodeYN: "Y",
              addrinfoYN: "Y",
              mapinfoYN: "Y",
              overviewYN: "Y",
            },
          });
          resolve(response.data);
        } catch (error) {
          reject(error);
        }
      })();
    });
  }

  public static getDetailIntro(contentId: string | number): Promise<GetDetailIntroResponse> {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const response: AxiosResponse<GetDetailIntroResponse> = await FestivalService.instance({
            url: "/detailIntro1",
            params: {
              contentId,
              contentTypeId: 15,
            },
          });
          resolve(response.data);
        } catch (error) {
          reject(error);
        }
      })();
    });
  }

  public static getDetailInfo(contentId: string | number): Promise<GetDetailInfoResponse> {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const response: AxiosResponse<GetDetailInfoResponse> = await FestivalService.instance({
            url: "/detailInfo1",
            params: {
              contentId,
              contentTypeId: 15,
            },
          });
          resolve(response.data);
        } catch (error) {
          reject(error);
        }
      })();
    });
  }

  public static getDetailImage(contentId: string | number): Promise<GetDetailImageResponse> {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const response: AxiosResponse<GetDetailImageResponse> = await FestivalService.instance({
            url: "/detailImage1",
            params: {
              contentId,
              imageYN: "Y",
              subImageYN: "Y",
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
