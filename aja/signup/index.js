const botonDrop = document.querySelector("#botonDrop");
const sideMobil = document.querySelector("#side");
const a = document.querySelector('#side-t');
const b = document.querySelector('#registro-2')
const c = document.querySelector('#login-2');
const f = document.querySelector('#h');
const cortina = document.querySelector('#cortina')
const cortina2 = document.querySelector('#cortina-2')
const body = document.querySelector('body');
const usernameInput = document.querySelector('#usuarioInput');
const usernameP = document.querySelector('#p-username');
const emailInput = document.querySelector('#emailInput');
const numberInput = document.querySelector('#numberInput');
const formulario = document.querySelector("#formulario");
const select = document.querySelector("#select-number");
const paswordInput = document.querySelector('#contraseñaInput');
const mensaje = document.querySelector('#messageFromDB');
const spiner = document.querySelector('#loader');
const mensajeContainer = document.querySelector('#container-message');
const verificarPasword = document.querySelector('#validacionContraseñaInput');
const btn = document.querySelector('#boton-registrar');
const sideText = document.querySelectorAll('.side-t-p')
const sideImg = document.querySelectorAll(".side-t-img");
const side = document.querySelector("#side-2");

body.addEventListener('mouseover', e => {
  e.preventDefault();
  if (e.target.classList.contains('side-button-2') || e.target.classList.contains('aja')) {
    console.log('qlqlq');
    side.classList.add('side-hover');
    sideText.forEach(e => {
      e.classList.remove('hidden');
    })
    sideImg.forEach(e => {
      e.classList.add('hidden');
    })

  } else {
    side.classList.remove('side-hover');
    sideText.forEach(e => {
      e.classList.add('hidden');
    })
    sideImg.forEach(e => {
      e.classList.remove('hidden');
    })
  }
})


botonDrop.addEventListener('click', (e) => {
    e.preventDefault();
    if (!(sideMobil.classList.contains("transition"))) {
        sideMobil.classList.add('transition');
        cortina.classList.toggle('cortina-t')

        setTimeout(() => {
            a.classList.add('hiden');
            b.classList.add('hiden');
            c.classList.add('hiden');
            f.classList.add('hiden');
        }, 500);
    } 
    else {
        a.classList.remove('hiden');
        b.classList.remove('hiden');
        c.classList.remove('hiden');
        f.classList.remove('hiden');
        cortina.classList.toggle('cortina-t')
        sideMobil.classList.remove('transition');
    }
})

cortina.addEventListener('click' , (e) => {
    e.preventDefault();
    console.log("jaja")
    a.classList.remove('hiden');
    b.classList.remove('hiden');
    c.classList.remove('hiden');
    f.classList.remove('hiden');
    cortina.classList.toggle('cortina-t')
    sideMobil.classList.remove('transition');
})

let usernameValidation = false;
let emailValidation = false;
let paswordValidation = false;
let numberValidation = false;
let selectChecked = false

const validation = (input, regexValidation) => {
  btn.disabled =
    !usernameValidation ||
    !emailValidation ||
    !paswordValidation ||
    !paswordMatch ||
    !numberValidation ||
    !selectChecked

      ? true
      : false;
  if (usernameInput.valuet==='') {
    usernameInput.classList.remove('correct')
    usernameInput.classList.remove('incorrect')
  }
  if (emailInput.valuet==='') {
    emailInput.classList.remove('correct')
    emailInput.classList.remove('incorrect')
  }
  if (paswordInput.value==='') {
    paswordInput.classList.remove('correct')
    paswordInput.classList.remove('incorrect')
  }
  if (verificarPasword.value==='') {
    verificarPasword.classList.remove('correct')
    verificarPasword.classList.remove('incorrect')
  }
  if (numberInput.value==='') {
    numberInput.classList.remove('correct')
    numberInput.classList.remove('incorrect')
  }
  if (!regexValidation && input.value !== '') {
    input.parentElement.children[1].classList.add('show');
    input.classList.add('incorrect');
    input.classList.remove('correct');
  } else if (regexValidation) {
    input.parentElement.children[1].classList.remove('show');
    input.classList.add('correct');
    input.classList.remove('incorrect');
  } else if (input.value === '') {
    input.parentElement.children[1].classList.remove('show');
    input.classList.remove('incorrect');
    input.classList.remove('correct');
  }
};

usernameInput.addEventListener('input', e => {
  const USERNAME_REGEX = /^(?=.*[a-z])[a-z0-9].{3,24}$/;
  usernameValidation = USERNAME_REGEX.test(e.target.value);
  validation(usernameInput, usernameValidation);
});

emailInput.addEventListener('input', e => {
  const EMAIL_REGEX =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  emailValidation = EMAIL_REGEX.test(e.target.value);
  validation(emailInput, emailValidation);
});

numberInput.addEventListener('input', e => {
    const NUMBER_REGEX = /^\d{7}$/;
    numberValidation = NUMBER_REGEX.test(e.target.value);
    validation(numberInput, numberValidation);
  });

paswordInput.addEventListener('input', e => {
  const PASWORD_REGEX =
    /^(?=.*[a-z])(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).{4,24}$/;
  paswordValidation = PASWORD_REGEX.test(e.target.value);
  validation(paswordInput, paswordValidation);
  paswordMatch = e.target.value === verificarPasword.value;
  console.log(paswordMatch);
  validation(verificarPasword, paswordMatch);
});

verificarPasword.addEventListener('input', e => {
  paswordMatch = paswordInput.value === e.target.value;
  console.log(paswordMatch);
  validation(verificarPasword, paswordMatch);
});

select.addEventListener('change', e => {
    e.preventDefault();
    if (select.value === "") {
      e.target.classList.remove('correct')
    }
    console.log("jaja");
    console.log(e.target);
    selectChecked = true
    e.target.classList.toggle('correct')
    validation(select, select)
})

formulario.addEventListener('submit', e => {
  e.preventDefault();
  const registroUser = {
    username : usernameInput.value,
    email : emailInput.value,
    codeNumber: select.value,
    phone: numberInput.value,
    password : paswordInput.value,
  }
  const enviarEmail = {
    username : usernameInput.value,
    email : emailInput.value,
  }
 
  mensajeContainer.classList.add('show-transform');
  cortina2.classList.add('show-transform');
    
  
  const aja = async () => {
    console.log(registroUser);
    console.log(JSON.stringify(registroUser));
    try {
      const registro = await (fetch('https://four-estaciones-gp8t.onrender.com/api/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(registroUser)
    }));
    const registroJSON = await registro.json();
    return {registro,registroJSON}
  }
    catch {
      console.log('error');
      console.log(error.message);
      console.log(error);
    } 
  }; 

  const email = async () => {
    try {
      const sendEmail = await (fetch('https://four-estaciones-gp8t.onrender.com/api/email', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(enviarEmail)
    }));
    const sendEmailJSON = await registro.json();
    return {sendEmail,sendEmailJSON}
  }
    catch {
      console.log('error');
      console.log(error.message);
      console.log(error);
    } 
  };


  aja().then(contactos => {
    email().then(e => {
      console.log(e.sendEmail);
      console.log(e.sendEmailJSON);
    })

    console.log(contactos.registroJSON);
    console.log(contactos.registro);
    if (contactos.registro.status === 400) {
      spiner.classList.toggle('hidden');
      mensajeContainer.classList.add("fail");
      mensaje.innerHTML=''
      const enviarMensaje = document.createElement('div');
      enviarMensaje.innerHTML = `
      <img class="bueno" src="../../images/error-svgrepo-com.svg" alt="">
      <h1 style="text-align: justify;">${contactos.registroJSON.error}</h1>
      `
      mensaje.append(enviarMensaje);
      mensaje.classList.toggle('show-transform');
      setTimeout(() => {
        mensaje.classList.toggle('show-transform');
        mensajeContainer.classList.remove('fail');
        mensajeContainer.classList.remove('show-transform');
        cortina2.classList.remove('show-transform');
        spiner.classList.toggle('hidden');
        mensajeContainer.classList.add('hidden');
        }, 5000);
        setTimeout(()=>{
          mensajeContainer.classList.remove('hidden');
        },100);
    } else {
        spiner.classList.toggle('hidden');
        mensajeContainer.classList.add("succes");
        console.log("jajaj");
        mensaje.innerHTML = ''
        const enviarMensaje = document.createElement('div');
        enviarMensaje.innerHTML = `
        <img class="bueno" src="../../images/check-symbol-4794.svg" alt="">
        <h1 style="text-align: justify;">Usuario creado exitosamente<br>Bienvenido ${contactos.registroJSON.savedUser.username}</h1>
        `
        localStorage.setItem('jsw',contactos.registroJSON.savedUser.username);
        mensaje.append(enviarMensaje);
        mensaje.classList.toggle('show-transform');
        setTimeout(() => {
          mensaje.classList.toggle('show-transform');
          mensajeContainer.classList.remove('succes');
          mensajeContainer.classList.remove('show-transform');
          cortina2.classList.remove('show-transform');
          spiner.classList.toggle('hidden');
          mensajeContainer.classList.add('hidden');
          window.location = "../login"
        }, 5000);
        setTimeout(()=>{
          mensajeContainer.classList.remove('hidden');
        },600);
        usernameInput.value = ''
        emailInput.value = ''
        paswordInput.value = ''
        verificarPasword.value = ''
        numberInput.value = ""
        select.value = ""
        usernameValidation = false;
        emailValidation = false;
        numberValidation = false;
        paswordValidation = false;
        selectChecked = false;
        select.classList.remove('correct')
        validation(verificarPasword, paswordMatch);
        validation(emailInput, emailValidation);
        validation(usernameInput, usernameValidation);
        validation(select, select);
        validation(numberInput, numberValidation);
        // setInterval(() => {
        //   window.location.href = '../loginn/index.html'
        // }, 3000);
    }
  })
  console.log(aja);
});


