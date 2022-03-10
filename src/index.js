//
//
//
const mongoose = require('mongoose')
const app = require('./app')

const CF = require('./config/config')


let server
mongoose.connect(CF.mongoose.url + CF.mongoose.dbname, CF.mongoose.options)
    .then(() => {
        console.log('... db connect to ' + CF.mongoose.url + CF.mongoose.dbname)

        let port = process.env.PORT || CF.server.port
        server = app.listen(port, () => {
            console.log(`${CF.app.name} server started - listening to port ${CF.server.port}`)
    })
})
