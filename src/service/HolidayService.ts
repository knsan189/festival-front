import axios from "axios";
import moment from "moment";
import { OPEN_API_KEY } from "../config/const";

type GetHolidaysResponse = FestivalServerRespose<Holiday>;

export default class HolidayService {
  private static instance = axios.create({
    baseURL: "http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService",
    params: {
      serviceKey: OPEN_API_KEY,
      _type: "json",
    },
  });

  public static async getHolidays(date: Date): Promise<GetHolidaysResponse> {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const year = moment(date).format("yy");
          const month = moment(date).format("MM");
          const response = await HolidayService.instance({
            url: "/getRestDeInfo",
            method: "GET",
            params: {
              pageNo: 1,
              numOfRows: 30,
              solYear: year,
              solMonth: month,
            },
          });

          console.log(response.data);
          if (!response.data.response.body.items) {
            response.data.response.body.items = {};
            response.data.response.body.items.item = [];
          }
          if (response.data.response.body.items.item.length === undefined) {
            response.data.response.body.items.item = [response.data.response.body.items.item];
          }
          resolve(response.data);
        } catch (error) {
          reject(error);
        }
      })();
    });
  }
}
