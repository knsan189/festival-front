class Festival {
    constructor(festivalClient) {
        this.festival = festivalClient
    }

    async thisMonthFestival(eventDate, pageNo, arrange, areaCode) {
                const response = await this.festival.get('', {
                    params: {
                        pageNo: '1',
                        numOfRows: '10',
                        type: '_json',
                        MobileOS : 'ETC',
                        MobileApp : 'Festival',
                        arrange : 'P',
                        listYN : 'Y',
                        eventStartDate : eventDate,
                        areaCode : areaCode || null
                    },
                })
    
                return response.data.response.body
    }

    // async select(info) {
    //     const response = await this.festival.get('', {
    //         params : {
    //             pageNo: '1',
    //             numOfRows: '20',
    //             type: '_json',
    //             MobileOS : 'ETC',
    //             MobileApp : 'Festival',
    //             arrange : 'P',
    //             listYN : 'Y',
    //             eventStartDate : info,
    //             areaCode : ''
    //         },
    //     })
    //     return  response.data.response.body
    // }
}

export default Festival