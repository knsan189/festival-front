class Festival {
    constructor(festivalClient) {
        this.festival = festivalClient
    }

    async thisMonthFestival(eventDate, pageNo, arrange, areaCode) {
                const response = await this.festival.get('/searchFestival', {
                    params: {
                        pageNo: pageNo,
                        numOfRows: '10',
                        type: '_json',
                        MobileOS : 'ETC',
                        MobileApp : 'Festival',
                        arrange : arrange,
                        listYN : 'Y',
                        eventStartDate : eventDate,
                        areaCode : areaCode || null
                    },
                })
    
                return response.data.response.body
    }

    async areaCodes() {
        const response = await this.festival.get('/areaCode', {
            params : {
                pageNo: '1',
                numOfRows: '20',
                type: '_json',
                MobileOS : 'ETC',
                MobileApp : 'Festival',
            },
        })
        return  response.data.response.body.items.item
    }
}

export default Festival