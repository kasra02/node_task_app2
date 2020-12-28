const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = ''
//Kasra2kasra2kasra2kasra2Kasra2kasra2kasra2kasra
//blackloginmanage@gmail.com
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    // sgMail.send({
    //     to:email,
    //     from: 'kasra@gmail.com',
    //     subject:'thanks for joining in',
    //     text:`${name} welcome to the app. let me know how you get along with the app`,
    //      html:'fasfsd'
    // })
    console.log(email,name)
}

const sendCancelationEmail = (email, name) => {
    // sgMail.send({
    //     to: email,
    //     from:'afds',
    //     subject:'thanks for joining in',
    //     text:`${name} welcome to the app. let me know how you get along with the app`,
    // })
    console.log('sendCancelationEmail',email,name)
}


module.exports = {
    sendWelcomeEmail,sendCancelationEmail
}