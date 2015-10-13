var settings = {
    environment: global.environment || process.env.NODE_ENV || 'development',
    database: {
        production: {
            url: 'mongodb://locahost/brain-dare'
        },
        test: {
            url: 'mongodb://localhost/brain-dare-test'
        },
        development: {
            url: 'mongodb://localhost/brain-dare-dev'
        }
    },
    port: process.env.PORT || 3000
};

module.exports = settings;