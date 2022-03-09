//
//  /api/test
//
const CF = require('../config/config')


const test_get = async (req, res) => {
    curDate = new Date()
    return res.status(200).json({
        appName: CF.app.name,
        port: CF.server.port,
        appVersion: CF.app.version,
        serverDate: curDate.getFullYear() + "-" + (curDate.getMonth() + 1) + "-" + curDate.getDate(),
        serverTime: curDate.toLocaleTimeString(),
        random: Math.random()
    })

}


const test_post = async (req, res) => {
    try {
        return res.send(req.body)
    } catch (err) {
        return res.status(500).json({ errors:err })
    }
}



module.exports = {
    test_get,
    test_post
}
