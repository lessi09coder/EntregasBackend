const EErrors = require("../../services/errors/enumsErrors");

const switchError = (error, req, res, next) => {
    //console.log(error)
    //console.log("el error que tira el index cause con el error:" , error.cause);
    //console.log("el error que tira el index code con el error:" , error.code)
    switch (error.code) {
        case EErrors.EMPTY_FIELD_ERROR:
            res.send({ status: "error", error: error.name })
            break;

        default:
            res.send({ status: "error", error: "hola soy default EErrors" })
    }
}

module.exports = switchError

