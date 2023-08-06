import nodemailer from "nodemailer";
async function sendEmail(correo, nombre, fecha, plan) {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'juanandressanchezrey@gmail.com',
                pass: 'odnlnimebkrmywir'
            }
        });

        const mailOptions = {
            from: 'juanandressanchezrey@gmail.com',
            to: correo,
            subject: 'Confirmación de reserva',
            text: `Hola ${nombre}, tu reservación  de ${plan} ha sido completada con éxito. No olvides que es el dia ${fecha}, ¡Disfruta la Experiencia!`
        };

        await transporter.sendMail(mailOptions);
        console.log('Correo enviado a:', correo);
    } catch (error) {
        console.error('Error al enviar el correo:', error);
    }
}
export {
    sendEmail
}