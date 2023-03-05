const botonDrop = document.querySelector("#botonDrop");
const sideMobil = document.querySelector("#side");
const a = document.querySelector('#side-t');
const b = document.querySelector('#side-f');
const c = document.querySelector('#login-2');
const d = document.querySelector('#registro-2');
const f = document.querySelector('#h')
const cortina = document.querySelector('#cortina')
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

const data = {username : username}

const aja = async () => {
  const registroUser = {
    username: username,
    reSend : true,
  }
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

const verificar = async (data) => {
  console.log("probando");
  const prueba = await fetch('https://four-estaciones-gp8t.onrender.com/api/auth', {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(data)
  }); 
  console.log("probando2");
  const jsonprueba = await (prueba.json());
  return {prueba, jsonprueba};
}

const getUsersInformacion = async () => {
  console.log("probando");
  const losUsers = await (fetch('https://four-estaciones-gp8t.onrender.com/api/users', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    }));
  console.log("probando2");
const losUsersJson = await (losUsers.json());
return {losUsersJson, losUsers};
}

const reload = (elMensaje) => {
  console.log("eso");
  spiner.classList.toggle('hidden');
  mensajeContainer.classList.add('show-transform');
  mensajeContainer.classList.add("fail");
  mensajeContainer.classList.add('agrandar');
  mensaje.innerHTML=''
  const enviarMensaje = document.createElement('div');
  enviarMensaje.innerHTML = `
  <img class="bueno" src="../../images/error-svgrepo-com.svg" alt="">
  <h1 class="texto">${elMensaje}</h1>
  <form id="fformulario" autocomplete="off">
      <div class="input-container">
          <input type="text" class="inputs" id="usuarioInput" placeholder="Nombre de Usuario">
      </div>
      <button id="vverificar" type="submit" class="side-button-2">Verificar</button>
  </form>
  `
  // 
  mensaje.append(enviarMensaje);
  mensaje.classList.toggle('show-transform');
  const input = document.querySelector("#usuarioInput");
  const theForm = document.querySelector("#fformulario");
  theForm.addEventListener('submit', e => {
    e.preventDefault();
    localStorage.setItem('jsw', input.value);
    aja().then(e => {
      console.log(e.losUsers);
      console.log(e.losUsersJson);
    })
  }) 
}
 
  verificar(data).then(e =>{
    console.log(e.jsonprueba);
    console.log(e.prueba);
    if (data.username===null) {
      const elMensaje = "Hubo un error intenta verificarte de nuevo ingresando tu username y dandole click al boton de abajo"
      reload(elMensaje)
    } else {
    getUsersInformacion().then(e => {
      console.log(e.losUsers);
      console.log(e.losUsersJson);
      const users = e.losUsersJson.docs
      const verifiedUser = users.filter(e => e.username === username)
      console.log(verifiedUser);
      if (verifiedUser.length===1) {
        console.log("333");
        const arraay = verifiedUser[0].verify
      
          if (arraay===false) {
            console.log("111");
            const elMensaje = "Hubo un error intenta verificarte de nuevo ingresando tu username y dandole click al boton de abajo"
            reload(elMensaje);
          } else {
            console.log("Usuario verificado exitosamente");
            mensajeContainer.classList.add('show-transform');
            spiner.classList.toggle('hidden');
            mensajeContainer.classList.add("succes");
            console.log("jajaj");
            mensaje.innerHTML = ''
            const enviarMensaje = document.createElement('div');
            enviarMensaje.innerHTML = `
            <img class="bueno" src="../../images/check-symbol-4794.svg" alt="">
            <h1 class="texto">Usuario verificado exitosamente</h1>
            `
            mensaje.append(enviarMensaje);
            mensaje.classList.toggle('show-transform');
            setTimeout(() => {
              window.location = "../login"
            }, 5000);
          } 
        } else {
        console.log("222");
        const elMensaje = "No pudimos encontrar el username indicado, intenta de nuevo" 
        reload(elMensaje)
      }
      
      
      
     
    })
  }})

console.log(data);



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







