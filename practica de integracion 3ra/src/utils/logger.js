const winston = require('winston');
const LOGGER = require('../config/config.js')
const customLevelsOptions = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        http: 4,
        debug: 5,
    },
    colors: {
        fatal: 'magenta',
        error: 'red',
        warning: 'yellow',
        info: 'green',
        http: 'cyan',
        debug: 'gray',
    }
};

const buildProdLogger = () => {

    const logger = winston.createLogger({
        levels: customLevelsOptions.levels,
        transports: [
            new winston.transports.Console({
                level: 'info',
                format: winston.format.combine(
                    winston.format.colorize({ colors: customLevelsOptions.colors }),
                    winston.format.timestamp(),
                    winston.format.simple()
                )
            }),
            new winston.transports.File({
                filename: './error.log',
                level: 'warning',
                format: winston.format.simple()
            })
        ]
    })
    return logger;
}

const buildDevLogger = () => {
    const logger = winston.createLogger({
        levels: customLevelsOptions.levels,
        transports: [
            new winston.transports.Console({
                level: 'debug',
                format: winston.format.combine(
                    winston.format.colorize({ colors: customLevelsOptions.colors }),
                    winston.format.timestamp(),
                    winston.format.simple()
                )
            }),
            //new winston.transports.File({ filename: './file.log', level: 'info' })
        ]
    })
    return logger;
}

/* 
const logger = winston.createLogger({
    levels: customLevelsOptions.levels,
    transports: [
        new winston.transports.Console({
            level: "info",
            format: winston.format.combine(
                winston.format.colorize({ colors: customLevelsOptions.colors }),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            filename: './error.log',
            level: 'warning',
            format: winston.format.simple()
        })
    ]
});  */

//testear 
if (LOGGER === "production") {
    logger = buildProdLogger()
} else {
    logger = buildDevLogger()
}


const addLogger = (req, res, next) => {
    req.logger = logger;
    //req.logger.http(`${req.method} en ${req.url} - ${new Date().toLocaleDateString}`)
    next();
}

module.exports = addLogger 