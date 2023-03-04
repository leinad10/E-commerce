const botonDrop = document.querySelector("#botonDrop");
const sideMobil = document.querySelector("#side");
const a = document.querySelector('#side-t');
const b = document.querySelector('#side-f');
const c = document.querySelector('#login-2');
const d = document.querySelector('#registro-2');
const f = document.querySelector('#h')
const cortina = document.querySelector('#cortina');
const cortina2 = document.querySelector('#cortina-2')
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
const username = localStorage.getItem("jsw");
const mensaje = document.querySelector('#messageFromDB');
const spiner = document.querySelector('#loader');
const mensajeContainer = document.querySelector('#container-message');


const usernameInput  = document.querySelector('#usuarioInput');
const passwordInput = document.querySelector('#contraseñaInput');
const boton = document.querySelector('#boton-login');
const form = document.querySelector("#formulario");

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
      if (login.status===400) {
        spiner.classList.toggle('hidden')
        mensajeContainer.classList.add('fail')
        mensaje.innerHTML=''
        const enviarMensaje = document.createElement('div');
        enviarMensaje.innerHTML = `
        <img class="bueno" src="../../images/error-svgrepo-com.svg" alt="">
        <h1>${e.loginJSON.error}</h1>
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
        <h1>${e.loginJSON.error}</h1>
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
        }, 5000);
        localStorage.setItem('Usuario', username)
        window.location.href='../agenda/index.html'
      }
    })
});




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
            d.classList.add('hiden');
            f.classList.add('hiden');
        }, 500);
    }
    else {
        a.classList.remove('hiden');
        b.classList.remove('hiden');
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
    b.classList.remove('hiden');
    c.classList.remove('hiden');
    d.classList.remove('hiden');
    f.classList.remove('hiden');
    cortina.classList.toggle('cortina-t')
    sideMobil.classList.remove('transition');
})







