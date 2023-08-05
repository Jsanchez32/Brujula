import nodemailer from 'nodemailer'

const sendEmail = async (req, res) => {
    try {
        
        const { correo, nombre, fecha, plan } = req.body;
      
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', 
            port: 587, 
            secure: false, 
            auth: {
                user: 'juanandressanchezrey@gmail.com', 
                pass: 'odnlnimebkrmywir',
            },
        });
      
        const mailOptions = {
            from: 'juanandressanchezrey@gmail.com', 
            to: correo, 
            subject: 'Confirmación de reservación', 
            text: `Hola ${nombre}, tu reservación  de ${plan} ha sido completada con éxito. No olvides que es el dia ${fecha}, ¡Disfruta la Experiencia!`, 
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Correo enviado:', info.response);
        res.status(200).send('Correo de verificación enviado correctamente.');
    } catch (error) {
        console.log('Error al enviar el correo:', error);
        res.status(500).send('Ha ocurrido un error al enviar el correo de verificación.');  
    }
}

export {
    sendEmail
}