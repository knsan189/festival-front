const createProxyMiddleware = require('http-proxy-middleware');


module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://apis.data.go.kr/',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '' // URL ^/api -> 공백 변경
            }
        })
    );
    app.use(
        '/festival',
        createProxyMiddleware({
            target: 'http://api.visitkorea.or.kr/',
            changeOrigin: true,
            pathRewrite: {
                '^/festival': ''
            }
        })
    );
};