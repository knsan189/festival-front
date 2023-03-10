import axios from "axios";
import { OPEN_API_KEY } from "../config/const";

export default class HolidayService {
  private static instance = axios.create({
    baseURL: "http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService",
    params: {
      serviceKey: OPEN_API_KEY,
    },
  });

  public static async getHolidays(date: Date) {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const response = await HolidayService.instance({
            method: "GET",
            params: {
              pageNo: 1,
              numOfRows: 30,
              solYear: "2023",
              solMonth: "03",
            },
          });
          resolve(response.data);
        } catch (error) {
          reject(error);
        }
      })();
    });
  }
}
