'use strict';

module.exports = {
    //MongoDB configuration
    development: {
        db: 'mongodb://localhost:27017/graphql',
        app: {
            name: 'graphql'
        }
    },
    production: {
        db: process.env.url,
        app: {
            name: 'graphql'
        }
    }
};
//# sourceMappingURL=config.js.map