class Holiday{
    constructor(httpClient) {
        this.holiday = httpClient
    }

    async thisMonth() {
        const response = await this.holiday.get('', {
            statusCode: 200,
            params : {
                solYear : '2021',
                solMonth : '05',
                _type : 'json'
            },
        })
        return response.data.response.body.items.item
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

export default Holiday