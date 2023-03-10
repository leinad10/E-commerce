const User = require('../models/user');
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
require('dotenv').config();

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.CORREO_ELECTRONICO, // generated ethereal user
    pass: process.env.CORREO_PASSWORD, // generated ethereal password
  },
});


exports.insertData = (async (request, response) => {

  const { username, email } = request.body;
  const usuarioValido = {username: username};
  function generateAccessToken(usuarioValido) {
    return jwt.sign(usuarioValido, process.env.SECRET, {expiresIn: '10m'});
  }
  const accessToken =  generateAccessToken(usuarioValido);
  response.cookie(`acces-token-${username}`, accessToken, { httpOnly: true })
          

  console.log('aver');
  let mailOptions = {
    from: `"Verification 👻" <${process.env.CORREO_ELECTRONICO}>`, // sender address
    to: email, // list of receivers
    subject: "Verifica tu usuario ✔", 
    html: `<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
        p, a, h1, h2, h3, h4, h5, h6 {font-family: 'Roboto', sans-serif !important;}
        h1{ font-size: 30px !important;}
        h2{ font-size: 25px !important;}
        h3{ font-size: 18px !important;}
        h4{ font-size: 16px !important;}
        p, a{font-size: 15px !important;}

        *{
          list-style: none;
          text-decoration: none;
        }
        .claseBoton{
            width: 30%;
                background-color: #fcae3b;
                border: 2px solid #fcae3b;
                color: black; 
                padding: 16px 32px;
                text-align: center;
                text-decoration: none;
                font-weight: bold;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                transition-duration: 0.4s;
                cursor: pointer;
        }
        .claseBoton:hover{
            background-color: #000000;
            color: #ffffff;
        }
        .imag{
            width: 20px;
            height: 20px;
        }
        .contA{
            margin: 0px 5px 0 5px;
        }
        .afooter{
            color: #ffffff !important; 
            text-decoration: none;
            font-size: 13px !important;
        }
        .side-button-2{
            font-size: 1rem;
            color: white;
            background-color: black;
            border: 4px solid orange;
            border-radius: 10px;
            padding: 0.5rem;
        }
        .side-button-2:hover{
          cursor: pointer;
          color: orange;
        }
    </style>
</head>
<body>
        <div style="width: 100%; background-color: #e3e3e3;">
            <div style="padding: 20px 10px 20px 10px; border:#000000 1px solid">
                <!-- Imagen inicial -->
                <div style="background-color: #ffa500; padding: 10px 0px 10px 0px; width: 100%; text-align: center; ">
                </div>
                <!-- Imagen inicial -->
    
                <!-- Contenido principal -->
                <div style="background-color: #d3d3d3; padding: 20px 0px 10px 0px; width: 100%; text-align: center; ">
                    <h1 id="hi">Titulo de la notificación</h1>
                    <p>Verifica tu Usuario haciendo click el link de abajo.</p>
                    <a id="verificar" class="side-button-2" href="https://four-estaciones-gp8t.onrender.com/verify">
                        Verificar
                    </a>
                    <!-- Gracias -->
                    <p>Gracias por tu tiempo.</p>
                    <p style="margin-bottom: 50px;"><i>Atentamente:</i><br>4 Estaciones</p>
    
                    <!-- Botón -->
                </div>
                <!-- Contenido principal -->
    
                <!-- Footer -->
                <div style="background-color: #717171; color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
                   
                    <!-- Redes sociales -->
    
                    <h4>Soporte</h4>
                    <p style="background-color: #ffa500; padding: 10px 0px 10px 0px; font-size: 12px !important;">
    
                    </p>
                </div>
                <!-- Footer -->
            </div>
        </div>
        <script>
        </script>
    </body>`,
  };

  transporter.sendMail(mailOptions, async (err, info) => {
    if (err)  {
        return response.status(500).json({error: "Email, not sended"})
    } else {
        return response.status(200).json({ok: "Email enviado"})
  }})
  }
);

  // User.create(username, email, passwordHash, (err, docs) => {
  //   if (err) {
  //     console.log('error')
  //   ;}  response.send({data: docs})
  // })
