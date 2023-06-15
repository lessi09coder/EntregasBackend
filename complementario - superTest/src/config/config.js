require('dotenv').config();

const PORT = process.env.PORT || 8080;
const MONGODB = process.env.MONGODB
const SECRETSESSION = process.env.SECRETSESSION
const LOGGER = process.env.LOGGER
const PASSEMAIL = process.env.PASSEMAIL
const MYUSEREMAIL = process.env.MYUSEREMAIL
module.exports = {PORT , MONGODB , SECRETSESSION, LOGGER, PASSEMAIL, MYUSEREMAIL}