class Festival {
    constructor(festivalClient) {
        this.festival = festivalClient
    }

    async thisMonthFestival(day) {
        try{
                const response = await this.festival.get('', {
                    statusCode: 200,
                    params: {
                        pageNo: '1',
                        numOfRows: '100',
                        type: 'json',
                        fstvlStartDate: `2021-05-${day}`
                    },
                })
    
                return response.data.response.body.items
        }
        catch(e){
        }
    }

    // async search(query) {
    //     const response = await this.youtube.get('search', {
    //         params : {
    //             part : 'snippet',
    //             maxResults: 25,
    //             type : 'video',
    //             q : query
    //         },
    //     })
    //     return response.data.items.map(item => ({...item, id : item.id.videoid}))
    // }
}

export default Festival