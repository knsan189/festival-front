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

    async dateChange(date) {
        const response = await this.holiday.get('', {
            params : {
                solYear : date.format('YYYY'),
                solMonth : date.format('MM'),
                _type : 'json'
            },
        })
        return  response.data.response.body.items.item
    }

    async news(date) {
        const response = await this.holiday.get('', {
            params : {
            },
        })
        return  response.data.response.body.items.item
    }


}

export default Holiday