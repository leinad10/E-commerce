const botonDrop = document.querySelector("#botonDrop");
const sideMobil = document.querySelector("#side");
const a = document.querySelector('#side-t');
const c = document.querySelector('#login-2')
const d = document.querySelector('#registro-2');
const f = document.querySelector('#h')
const cortina = document.querySelector('#cortina');
const cortina2 = document.querySelector('#cortina-2')
const username = localStorage.getItem("jsw");
const mensaje = document.querySelector('#messageFromDB');
const spiner = document.querySelector('#loader');
const mensajeContainer = document.querySelector('#container-message');
const usernameInput  = document.querySelector('#usuarioInput');
const passwordInput = document.querySelector('#contraseñaInput');
const boton = document.querySelector('#boton-login');
const form = document.querySelector("#formulario");
const usuario = localStorage.getItem("Usuario");
const sideText = document.querySelectorAll('.side-t-p')
const sideImg = document.querySelectorAll(".side-t-img");
const side = document.querySelector("#side-2");
const body = document.querySelector('body');

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

const auth = async () => {
  const auth = await (fetch('https://four-estaciones-gp8t.onrender.com/api/auth', {
  method: 'POST',
  headers: {
      'Content-type': 'application/json',
   },
  body: JSON.stringify(usuario)
  }));
  console.log(auth);
  const authJSON = await auth.json();
  

  return {auth, authJSON}
}

const aja = async (pillo) => {
  const login = await (fetch('https://four-estaciones-gp8t.onrender.com/api/login', {
  method: 'POST',
  headers: {
      'Content-type': 'application/json',
   },
  body: JSON.stringify(pillo)
  }));
  console.log(login);
  const loginJSON = await login.json();
  console.log(loginJSON);

  return {login, loginJSON}
}
// if (usernameInput.value===""|| passwordInput.value==="") {
//   boton.disabled = true
// } else {boton.disabled=false}



form.addEventListener('submit', e => {
    e.preventDefault();
    
    const username = usernameInput.value;
    const password = passwordInput.value;
    const pillo = {username: username, password: password}
    console.log(pillo);
    console.log(username);
    console.log(password);
    cortina2.classList.toggle('show-transform');
    mensajeContainer.classList.toggle('show-transform');

    aja(pillo).then(e => {
      console.log(e);

      if (e.login.status===400) {
        spiner.classList.toggle('hidden')
        mensajeContainer.classList.add('fail')
        mensaje.innerHTML=''
        const enviarMensaje = document.createElement('div');
        enviarMensaje.innerHTML = `
        <img class="bueno" src="../../images/error-svgrepo-com.svg" alt="">
        <h1 style="text-align: justify;">${e.loginJSON.error}</h1>
        `
        mensaje.append(enviarMensaje);
        mensaje.classList.toggle('show-transform');
        setTimeout(() => {
          mensaje.classList.toggle('show-transform');
          spiner.classList.toggle('hidden');
          mensajeContainer.classList.toggle('show-transform');
          mensajeContainer.classList.toggle('fail');
          cortina2.classList.toggle('show-transform');
        }, 5000);
        setTimeout(() => {
            enviarMensaje.innerHTML=''
        }, 5000);
      } else {
        spiner.classList.toggle('hidden')
        mensajeContainer.classList.add('succes')
        mensaje.innerHTML=''
        const enviarMensaje = document.createElement('div');
        enviarMensaje.innerHTML = `
        <img class="bueno" src="../../images/check-symbol-4794.svg" alt="">
        <h1 style="text-align: justify;">Inicio de secion exitoso</h1>
        `
        mensaje.append(enviarMensaje);
        mensaje.classList.toggle('show-transform');
        setTimeout(() => {
          mensaje.classList.toggle('show-transform');
          spiner.classList.toggle('hidden');
          mensajeContainer.classList.toggle('show-transform');
          mensajeContainer.classList.toggle('succes');
          cortina2.classList.toggle('show-transform');
        }, 5000);
        setTimeout(() => {
            enviarMensaje.innerHTML=''
            localStorage.setItem('Usuario', username)
            window.location.href='../'
        }, 8000);
        
      }
    })
});





botonDrop.addEventListener('click', (e) => {
    e.preventDefault();
    if (!(sideMobil.classList.contains("transition"))) {
        sideMobil.classList.add('transition');
        cortina.classList.toggle('cortina-t')

        console.log(aja);
        setTimeout(() => {
            a.classList.add('hiden');
            c.classList.add('hiden');
            d.classList.add('hiden');
            f.classList.add('hiden');
        }, 500);
    }
    else {
        a.classList.remove('hiden');
        c.classList.remove('hiden');
        d.classList.remove('hiden');
        f.classList.remove('hiden');
        cortina.classList.toggle('cortina-t')
        sideMobil.classList.remove('transition');
    }
})

cortina.addEventListener('click' , (e) => {
    e.preventDefault();
    console.log("jaja")
    a.classList.remove('hiden');
    c.classList.remove('hiden');
    d.classList.remove('hiden');
    f.classList.remove('hiden');
    cortina.classList.toggle('cortina-t')
    sideMobil.classList.remove('transition');
})







