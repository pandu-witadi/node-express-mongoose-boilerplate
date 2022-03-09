
//
//
//
let CF = {
    app: {
        name: "node-express-mongoose-boilerplate",
        version: "0.0.1"
    },

    server: {
        port: 5152,
        apiPath: '/api'
    },

    // mongodb setting
    mongoose: {
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        url : 'mongodb://127.0.0.1:27017/',
        dbname : 'test'
    }
}


module.exports = CF
