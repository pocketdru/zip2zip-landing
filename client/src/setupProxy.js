const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/v1/rates", {
            target: "https://api.shipengine.com",
            secure: false,
            changeOrigin: true
        })
    )

    // app.use(
    //     proxy("/v1/rates", {
    //         target: "https://api.shipengine.com",
    //         changeOrigin: true
    //     })
    // )
}