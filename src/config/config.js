module.exports = {
    //MongoDB configuration
    development: {
        db: 'mongodb://localhost:27017/graphql',
        app: {
            name: 'graphql'
        }
    },
    production: {
        db: 'mongodb+srv://shameerahamed:CKJmcmEQ0nT9AiNx@cluster0-r98dc.mongodb.net/lms?retryWrites=true',
        app: {
            name: 'graphql'
        }
    }
};