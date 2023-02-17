import axios from "axios";
import { OPEN_API_KEY } from "../config/const";

const BASE_URL = "https://apis.data.go.kr/B551011/KorService";

class FestivalService {
  private static module = axios.create({
    baseURL: BASE_URL,
    params: {
      serviceKey: OPEN_API_KEY,
    },
  });

  public static getFestivals(mon: number) {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const startDate = Number(`2021${mon < 10 ? "0" : ""}${mon}01`);
          const endDate = Number(`2021${mon < 10 ? "0" : ""}${mon}31`);
          const response = await FestivalService.module({
            url: "/searchFestival",
            params: {
              numOfRows: 500,
              pageNo: 1,
              _type: "json",
              arrange: "R",
              listYN: "Y",
              eventStartDate: startDate,
              eventEndDate: endDate,
              MobileOS: "ETC",
              MobileApp: "AppTest",
            },
          });
          resolve(response.data.response.body.items.item);
        } catch (error) {
          reject(error);
        }
      })();
    });
  }

  public static seasonData(eventStartDate: string, eventEndDate: string) {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const response = await FestivalService.module({
            url: "/searchFestival",
            params: {
              numOfRows: 500,
              pageNo: 1,
              _type: "json",
              arrange: "R",
              listYN: "Y",
              eventStartDate,
              eventEndDate,
              MobileOS: "ETC",
              MobileApp: "AppTest",
            },
          });
          resolve(response.data.response.body.items.item);
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
