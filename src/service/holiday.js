class Holiday{
    constructor(httpClient) {
        this.holiday = httpClient
        console.log(httpClient)
    }

    async thisYear() {
        const response = await this.holiday.get('', {
            params : {
                solYear : '2021',
            },
        })
        return response
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