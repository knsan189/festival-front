import axios from 'axios';

class Festival {
    constructor() {
        this.festival = axios.create({
            baseURL: 'https://festivalprojectapp.herokuapp.com/http://api.visitkorea.or.kr/openapi/service',
        });
    }
    
    async festivalData( mon, area) {
      const areaNumber = area === 0 ? area = '' : area
      const startDate = Number('2021' + (mon < 10 ? '0' : '') + mon + '01')
      const endDate = Number('2021' + (mon < 10 ? '0' : '') + mon + '31')
      
      
      const response = await this.festival.get("/rest/KorService/searchFestival?serviceKey=L2W%2FBNzWhCoJV%2F8gq1%2BNd%2Fhsm%2BylsyWMJxDnD3ZzIx3%2FltSKOKVOSXIfqdEBtVqJGSXC%2BPBranUO%2FrNfskcUAw%3D%3D", {
          params: {
            numOfRows: 500,
            pageNo: 1,
            _type: "json",
            arrange: "P",
            listYN: "Y",
            eventStartDate: startDate,
            eventEndDate: endDate,
            MobileOS: "ETC",
            MobileApp: "AppTest",
            areaCode: areaNumber,
          },
        });
        return response.data.response.body.items.item;
    }   
    
    async seasonData(start, end) {
      
      const response = await this.festival.get("/rest/KorService/searchFestival?serviceKey=L2W%2FBNzWhCoJV%2F8gq1%2BNd%2Fhsm%2BylsyWMJxDnD3ZzIx3%2FltSKOKVOSXIfqdEBtVqJGSXC%2BPBranUO%2FrNfskcUAw%3D%3D", {
          params: {
            numOfRows: 21,
            pageNo: 1,
            _type: "json",
            arrange: "P",
            listYN: "Y",
            eventStartDate: start || 20210301,
            eventEndDate: end || 20210531,
            MobileOS: "ETC",
            MobileApp: "AppTest",
            areaCode: '',
          },
        });
        return response.data.response.body.items.item;
    }   

  

    async detailImg(id) {
      
      const response = await this.festival.get("/rest/KorService/detailImage?serviceKey=L2W%2FBNzWhCoJV%2F8gq1%2BNd%2Fhsm%2BylsyWMJxDnD3ZzIx3%2FltSKOKVOSXIfqdEBtVqJGSXC%2BPBranUO%2FrNfskcUAw%3D%3D", {
          params: {
            numOfRows: 10,
            pageNo: 1,
            _type: "json",
            MobileOS: "ETC",
            MobileApp: "AppTest",
            contentId: id,
            imageYN: "Y",
            subImageYN: "Y",

          },
        });
        return response.data.response.body.items.item;
    }
}

export default Festival;