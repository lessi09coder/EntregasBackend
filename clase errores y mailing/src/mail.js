
const nodemailer = require('nodemailer');

//hljkhswvwfhiblxa

const gmailConfig = {
    service: "gmail",
    auth: {
        user: "alexis.bonetti@gmail.com",
        pass: "hljkhswvwfhiblxa"
    }
};

//texto basico:
/* const mailContent = {
    from : "alexis.bonetti@gmail.com",
    to: "alexis.bonetti@gmail.com",
    subject: "Hello ✔",
    text: "Hello world ✔",
} */

//con imagen basico:
const mailContent = {
    from : "alexis.bonetti@gmail.com",
    to: "alexis.bonetti@gmail.com",
    subject: "Hello ✔",
    html: `
        <p>Hello world ✔</p>
        <h2>imagen abajo </h2>
        <img src="cid:imageTest1.jpg">
    `,
    attachments: [{
        filaname: "imageTest1.jpg",
        path: "./src/images/imageTest1.jpg",
        cid: "imageTest1.jpg"
    }]
}
const sendMail = async (config, mailCont) => {
    const transporter = nodemailer.createTransport(config);
    let resp = await transporter.sendMail(mailCont)
    console.log(resp)
}

sendMail(gmailConfig, mailContent)