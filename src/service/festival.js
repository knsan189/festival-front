class Festival {
    constructor(festivalClient) {
        this.festival = festivalClient
    }

    async thisMonthFestival(today) {
                const response = await this.festival.get('', {
                    params: {
                        pageNo: '1',
                        numOfRows: '100',
                        type: '_json',
                        MobileOS : 'ETC',
                        MobileApp : 'Festival',
                        arrange : 'P',
                        listYN : 'Y',
                        eventStartDate : today
                    },
                })
    
                return response.data.response.body
    }

    async select(info) {
        const response = await this.festival.get('', {
            params : {
                pageNo: '1',
                numOfRows: '20',
                type: '_json',
                MobileOS : 'ETC',
                MobileApp : 'Festival',
                arrange : 'P',
                listYN : 'Y',
                eventStartDate : info
            },
        })
        return  response.data.response.body
    }
}

export default Festival