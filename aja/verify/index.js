const botonDrop = document.querySelector("#botonDrop");
const sideMobil = document.querySelector("#side");
const a = document.querySelector('#side-t');
const b = document.querySelector('#side-f');
const c = document.querySelector('#login-2');
const d = document.querySelector('#registro-2');
const f = document.querySelector('#h')
const cortina = document.querySelector('#cortina')

const username = localStorage.getItem("jsw");
const mensaje = document.querySelector('#messageFromDB');
const spiner = document.querySelector('#loader');
const mensajeContainer = document.querySelector('#container-message');

const data = {username : username}

const aja = async (enviarEmail) => {
  
  
  try {
    console.log("try");
    const tuEmail = await (fetch('https://four-estaciones-gp8t.onrender.com/api/email', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(enviarEmail)
  }));
  const tuEmailJSON = await tuEmail.json();
  return {tuEmail,tuEmailJSON}
}
  catch {
    console.log("cath");
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
    spiner.classList.toggle('hidden');
    mensaje.innerHTML=""
    localStorage.setItem('jsw', input.value);
    getUsersInformacion().then(e => {
      const users = e.losUsersJson.docs
      const verifiedUser = users.filter(e => e.username === username)
      console.log(verifiedUser);
      console.log("pruebamelo");
      const enviarEmail = {
        username: verifiedUser[0].username,
        email: verifiedUser[0].email,
      } 
      console.log(enviarEmail);
      aja(enviarEmail).then(e => {
        console.log(e.tuEmail);
        console.log(e.tuEmailJSON);
        if (e.tuEmail.status===200) {
          spiner.classList.toggle('hidden');
          console.log("Usuario verificado exitosamente");
          mensajeContainer.classList.toggle("show-transform");
          mensajeContainer.classList.remove("fail");
          mensajeContainer.classList.add("stanby");
          console.log("jajaj");
          mensaje.innerHTML = ''
          const enviarMensaje = document.createElement('div');
          enviarMensaje.innerHTML = `
          <img class="bueno" src="../../images/check-symbol-4794.svg" alt="">
          <h1 class="texto">Hemos enviado un correo de verificacion nuevamente</h1>
          `
          mensaje.append(enviarMensaje);
        }
      })
    });
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







