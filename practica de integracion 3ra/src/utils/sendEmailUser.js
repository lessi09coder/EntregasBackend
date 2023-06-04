const nodemailer = require('nodemailer');
const { PASSEMAIL, MYUSEREMAIL } = require('../config/config.js');

const sendMailToUser = (token, userEmail, resetUrl) => {
    const gmailConfig = {
        service: "gmail",
        auth: {
            user: "alexis.bonetti@gmail.com",
            pass: PASSEMAIL
        }
    };


    const mailContent = {
        from: MYUSEREMAIL,
        to: userEmail,
        subject: "Reset Password",
        html: `
        <p>Tu password necesita el siguiente TOKEN</p>
        <h2> ${token} </h2> 
        <p> <a href="${resetUrl}"> ir al link para reset password </a> </p>
    `
    }
    const sendMail = async (config, mailCont) => {
        const transporter = nodemailer.createTransport(config);
        let resp = await transporter.sendMail(mailCont)
        //console.log(resp)
    }
    
    sendMail(gmailConfig, mailContent)
};

module.exports = sendMailToUser;