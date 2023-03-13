import axios, { AxiosResponse } from "axios";
import { OPEN_API_KEY } from "../config/const";

const BASE_URL = "https://apis.data.go.kr/B551011/KorService1";

export type GetFestivalsResponse = FestivalServerRespose<Festival>;
type GetDetailCommonResponse = FestivalServerRespose<FestivalDetailCommon>;
type GetDetailIntroResponse = FestivalServerRespose<FestivalDetailIntro>;
type GetDetailInfoResponse = FestivalServerRespose<FestivalDetailInfo>;
type GetDetailImageResponse = FestivalServerRespose<FestivalDetailImage>;
type GetAreaCodesResponse = FestivalServerRespose<AreaCode>;

const resultMap = new Map<string, any>();

export interface GetFestivalsRequest {
  arrange?: "R" | "P";
  eventStartDate?: string;
  eventEndDate?: string;
  pageNo?: number;
  numOfRows?: number;
  areaCode?: string;
}

export interface SearchFestivalRequest {
  keyword: string;
  pageNo?: number;
  numOfRows?: number;
}

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

  public static getFestivals(request: GetFestivalsRequest): Promise<GetFestivalsResponse> {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const {
            arrange = "R",
            eventStartDate,
            eventEndDate,
            pageNo = 1,
            numOfRows = 30,
            areaCode,
          } = request;

          const key = JSON.stringify(request);
          const cache = resultMap.get(key) as GetFestivalsResponse;

          if (cache) {
            resolve(cache);
            return;
          }

          const response: AxiosResponse<GetFestivalsResponse> = await FestivalService.instance({
            url: "/searchFestival1",
            params: {
              numOfRows,
              pageNo,
              arrange,
              listYN: "Y",
              eventStartDate,
              eventEndDate,
              areaCode,
            },
          });

          resultMap.set(key, response.data);
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

  public static getAreaCodes(): Promise<GetAreaCodesResponse> {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const response: AxiosResponse<GetAreaCodesResponse> = await FestivalService.instance({
            url: "/areaCode1",
            params: {
              pageNo: 1,
              numOfRows: 30,
            },
          });
          resolve(response.data);
        } catch (error) {
          reject(error);
        }
      })();
    });
  }

  public static searchFestival({
    keyword,
    pageNo = 1,
    numOfRows = 15,
  }: SearchFestivalRequest): Promise<GetFestivalsResponse> {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const response: AxiosResponse<GetFestivalsResponse> = await FestivalService.instance({
            url: "/searchKeyword1",
            params: {
              pageNo,
              numOfRows,
              keyword,
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
