const EErrors = require("../../services/errors/enumsErrors");

const switchError = (error, req, res, next) =>{
    console.log(error.cause)
    switch (error.code){
        case EErrors.INVALID_TYPES_ERROR:
            res.send({status: "success", error: error.name})
        break;

        default:
            res.send({status: "success", error: error.name})
        break;
    }
} 

module.exports = switchError

