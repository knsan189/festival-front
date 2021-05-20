
class Festival {
    constructor(festivalClient) {
        this.festival = festivalClient
    }

    async thisMonthFestival(eventDate, pageNo, arrange, areaCode, setLoading) {
                try {
                    setLoading(true)
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
                            areaCode : areaCode || null,
                            eventEndDate : eventDate
                        },
                    })
        
                    return response.data.response.body
               }
               catch (e){
                    console.log(e)
               }
               finally{
                    setLoading(false)
               }
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

    async contentInfo(contentId) {
        const response = await this.festival.get('/detailCommon', {
            params : {
                type: '_json',
                MobileOS : 'ETC',
                MobileApp : 'Festival',
                contentId : contentId,
                defaultYN : 'Y',
                firstImageYN : 'Y',
                areacodeYN : 'Y',
                addrinfoYN : 'Y',
                mapinfoYN : 'Y',
                overviewYN : 'Y'
            },
        })
        return  response.data.response.body.items.item
    }

    async contentImg(contentId){
        const response = await this.festival.get('/detailImage', {
            params : {
                type: '_json',
                MobileOS : 'ETC',
                MobileApp : 'Festival',
                contentId : contentId,
            },
        })
        return  response.data.response.body.items.item
    }

    async contentDetail(contentId){
        const response = await this.festival.get('/detailInfo', {
            params : {
                type: '_json',
                MobileOS : 'ETC',
                MobileApp : 'Festival',
                contentId : contentId,
                contentTypeId : 15
            },
        })
        return  response.data.response.body.items.item
    }

    async contentIntro(contentId){
        const response = await this.festival.get('/detailIntro', {
            params : {
                type: '_json',
                MobileOS : 'ETC',
                MobileApp : 'Festival',
                contentId : contentId,
                contentTypeId : 15
            },
        })
        return  response.data.response.body.items.item
    }
}

export default Festival