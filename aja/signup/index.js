const botonDrop = document.querySelector("#botonDrop");
const sideMobil = document.querySelector("#side");
const a = document.querySelector('#side-t');
const b = document.querySelector('#side-f');
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

const home = document.querySelector('#home');
const catalog = document.querySelector('#catalog');
const account = document.querySelector('#account');
const cart = document.querySelector('#cart');
const gallery = document.querySelector('#gallery');
const home2 = document.querySelector('#home-2');
const catalog2 = document.querySelector('#catalog-2');
const account2 = document.querySelector('#account-2');
const cart2 = document.querySelector('#cart-2');
const gallery2 = document.querySelector('#gallery-2');

home.addEventListener('click', e => {
  e.preventDefault();
  if (window.location==="../") {
    console.log("jajadddd");
  } else {
    window.location="../"
  }
});
home2.addEventListener('click', e => {
  e.preventDefault();
  if (window.location==="../") {
    console.log("jajadddd");
  } else {
    window.location="../"
  }
});
catalog.addEventListener('click', e => {
  e.preventDefault();
  if (window.location==="../") {
    console.log("jajadddd");
  } else {
    window.location="../"
  }
});
catalog2.addEventListener('click', e => {
  e.preventDefault();
  if (window.location==="../") {
    console.log("jajadddd");
  } else {
    window.location="../"
  }
});
account.addEventListener('click', e => {
  e.preventDefault();
  if (window.location==="../") {
    console.log("jajadddd");
  } else {
    window.location="../"
  }
});
account2.addEventListener('click', e => {
  e.preventDefault();
  if (window.location==="../") {
    console.log("jajadddd");
  } else {
    window.location="../"
  }
});
cart.addEventListener('click', e => {
  e.preventDefault();
  if (window.location==="../") {
    console.log("jajadddd");
  } else {
    window.location="../"
  }
});
cart2.addEventListener('click', e => {
  e.preventDefault();
  if (window.location==="../") {
    console.log("jajadddd");
  } else {
    window.location="../"
  }
});
gallery.addEventListener('click', e => {
  e.preventDefault();
  if (window.location==="../") {
    console.log("jajadddd");
  } else {
    window.location="../"
  }
});
gallery2.addEventListener('click', e => {
  e.preventDefault();
  if (window.location==="../") {
    console.log("jajadddd");
  } else {
    window.location="../"
  }
});

botonDrop.addEventListener('click', (e) => {
    e.preventDefault();
    if (!(sideMobil.classList.contains("transition"))) {
        sideMobil.classList.add('transition');
        cortina.classList.toggle('cortina-t')

        console.log(aja);
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
  aja().then(contactos => {

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


