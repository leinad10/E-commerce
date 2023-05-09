

const botonDrop = document.querySelector("#botonDrop");
const sideMobil = document.querySelector("#side");
const a = document.querySelector('#side-t');

const c = document.querySelector('#login-2');
const d = document.querySelector('#registro-2');
const f = document.querySelector('#h');
const cortina = document.querySelector('#cortina')
const usuario = localStorage.getItem("Usuario");
const cuenta = document.querySelector('#j');
const cuenta2 = document.querySelector('#j-2');
const login = document.querySelector('#login');
const registro = document.querySelector('#registro');
const nav = document.querySelector('#nav');
const cuentaUsername = document.querySelector('#username');
const cuentaUsername2 = document.querySelector('#username-2');
const logout = document.querySelector("#log-out");
const logout2 = document.querySelector("#log-out-2");
const mensaje = document.querySelector('#messageFromDB');
const mensajeContainer = document.querySelector('#container-message');
const spiner = document.querySelector('#loader');
const sideText = document.querySelectorAll('.side-t-p')
const sideImg = document.querySelectorAll(".side-t-img");
const side = document.querySelector("#side-2");
const body = document.querySelector('body');
const div = document.querySelector('#div1');

const user = async () => {
  const user = await (fetch('https://four-estaciones-gp8t.onrender.com/api/users', {
  method: 'GET',
  headers: {
      'Content-type': 'application/json',
   },
  }));
  const userJSON = await user.json();
  
  return {user, userJSON}
}

const factura = async () => {
  const factura = await (fetch('https://four-estaciones-gp8t.onrender.com/api/factura', {
  method: 'GET',
  headers: {
      'Content-type': 'application/json',
   },
  }));
  const facturaJSON = await factura.json();
  
  return {factura, facturaJSON}
}

user().then(e => {
  const aja = e.userJSON.docs
  const eso = aja.filter(element => element.username===usuario);
  console.log(eso[0]);
  const ve = eso[0]
  if (ve.admin==="true") {
    console.log("soy admin");
    factura().then(e=>{
      console.log(e.facturaJSON);
      const eso = e.facturaJSON.docs
      const aja = e.facturaJSON.docs
      console.log(aja);
      
      div.innerHTML = "";
      const informacion = document.createElement('div');
      informacion.innerHTML = `<div class="informacion-div"> <p> Nombre de usuario: </p> <p>${ve.username}</p> </div>
      <div class="informacion-div"> <p> Telefono: </p> <p> ${ve.numberPhone}</p> </div>
      <div class="informacion-div"> <p> Id: </p> <p> ${ve.id}</p> </div>
      `
      div.append(informacion);
      informacion.classList.add('informacion');
      if (aja==="") {
        const facturas = document.createElement('div');
        facturas.innerHTML = `No has hecho ningun pedido hasta ahora, Realiza tu primer pedido aqui: <a href='../cart'> Ordenar </a>`
      } else {
        const k = document.createElement('div');
        k.innerHTML=""
        k.classList.add('grupo-facturas');
        div.append(k);
        aja.forEach(e => {
          const fua = e.productos
          const gua = e.totalBolivares.toFixed(2);
          const que = document.createElement('div');
          que.innerHTML = `<div class='facturas'> <p> Estado: </p> </p>${e.estado}</div>
          <div class='facturas'> <p> Id: </p> </p>${e.id}</div>
          <div class='facturas'> <p> Metodo de Pago: </p> </p>${e.metodoDePago}</div>
          <div class='facturas'> <p> Numero de Referencia: </p> </p>${e.numeroRef}</div>
          <div class='facturas'> <p> Total en Bolivares: </p> </p>${gua} Bs.</div>
          <div class='facturas'> <p> Total en Dolares: </p> </p>${e.totalDolars} $</div>
          <div class='facturas'> <p> Direccion de envio: </p> </p>${e.direccion}</div>
          `
          k.append(que);
          que.classList.add('facturita');
          const productoFactura = document.querySelector("#productos");

          fua.forEach(a => {
            const aja = document.createElement('div');
            console.log(a.nombre);
            aja.innerHTML = `<div class="facturas-producto"> <p>Producto:</p> <p>${a.nombre}</p> </div>
            <div class="facturas-producto"> <p>Cantidad:</p> <p>${a.cantidad}</p> </div>
            <div class="facturas-producto"> <p>Valor:</p> <p>${a.valor}</p> </div>` 
            aja.classList.add('factura-producto');
            que.append(aja);
          })
        })
      }
    })
    
  } else {
    factura().then(e=>{
      console.log(e.facturaJSON);
      const eso = e.facturaJSON.docs
      const aja = eso.filter(element => element.usuario===usuario);
      console.log(aja);
      console.log("no soy admin");
      div.innerHTML = "";
      const informacion = document.createElement('div');
      informacion.innerHTML = `<div class="informacion-div"> <p> Nombre de usuario: </p> <p>${ve.username}</p> </div>
      <div class="informacion-div"> <p> Telefono: </p> <p> ${ve.numberPhone}</p> </div>
      <div class="informacion-div"> <p> Id: </p> <p> ${ve.id}</p> </div>
      `
      div.append(informacion);
      informacion.classList.add('informacion');
      if (aja==="") {
        const facturas = document.createElement('div');
        facturas.innerHTML = `No has hecho ningun pedido hasta ahora, Realiza tu primer pedido aqui: <a href='../cart'> Ordenar </a>`
      } else {
        const k = document.createElement('div');
        k.innerHTML=""
        k.classList.add('grupo-facturas');
        div.append(k);
        aja.forEach(e => {
          const fua = e.productos
          const gua = e.totalBolivares.toFixed(2);
          const que = document.createElement('div');
          que.innerHTML = `<div class='facturas'> <p> Estado: </p> </p>${e.estado}</div>
          <div class='facturas'> <p> Id: </p> </p>${e.id}</div>
          <div class='facturas'> <p> Metodo de Pago: </p> </p>${e.metodoDePago}</div>
          <div class='facturas'> <p> Numero de Referencia: </p> </p>${e.numeroRef}</div>
          <div class='facturas'> <p> Total en Bolivares: </p> </p>${gua} Bs.</div>
          <div class='facturas'> <p> Total en Dolares: </p> </p>${e.totalDolars} $</div>
          <div class='facturas'> <p> Direccion de envio: </p> </p>${e.direccion}</div>
          `
          k.append(que);
          que.classList.add('facturita');
          const productoFactura = document.querySelector("#productos");

          fua.forEach(a => {
            const aja = document.createElement('div');
            console.log(a.nombre);
            aja.innerHTML = `<div class="facturas-producto"> <p>Producto:</p> <p>${a.nombre}</p> </div>
            <div class="facturas-producto"> <p>Cantidad:</p> <p>${a.cantidad}</p> </div>
            <div class="facturas-producto"> <p>Valor:</p> <p>${a.valor}</p> </div>` 
            aja.classList.add('factura-producto');
            que.append(aja);
          })
        })
      }
    })
  }
})


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


const redirect = () => {
  mensajeContainer.classList.toggle('show-transform');
  auth().then(e => {
    console.log(e.auth);
    if (e.auth.status===400) {
      spiner.classList.toggle('hidden')
      mensajeContainer.classList.add('fail')
      mensaje.innerHTML=''
      const enviarMensaje = document.createElement('div');
      enviarMensaje.innerHTML = `
      <img class="bueno" src="../../images/error-svgrepo-com.svg" alt="">
      <h1 class="texto">${e.authJSON.error}, debes iniciar secion para poder acceder a esta seccion</h1>
      `
      mensaje.append(enviarMensaje);
      mensaje.classList.toggle('show-transform');
      setTimeout(() => {
        mensaje.classList.toggle('show-transform');
        spiner.classList.toggle('hidden');
        mensajeContainer.classList.toggle('show-transform');
        mensajeContainer.classList.toggle('fail');
      }, 5000);
      // setTimeout(() => {
      //   window.location = "../login"
          
      // }, 5000);
      return 
    }
    mensajeContainer.classList.toggle('show-transform');
    c.classList.add('show-none');
    d.classList.add('show-none');
    nav.classList.add('show-none');
    f.classList.add('show-none');
    login.classList.add('show-none');
    registro.classList.add('show-none');
    cuenta.classList.add('show-flex');
    cuenta2.classList.add('show-flex-2');
    cuentaUsername.innerHTML = usuario
    cuentaUsername2.innerHTML = usuario

    logout.addEventListener("click", e =>{
      e.preventDefault();
      localStorage.setItem('Usuario', "");
      location.reload();
    })
    logout2.addEventListener("click", e =>{
      e.preventDefault();
      localStorage.setItem('Usuario', "");
      location.reload();
    })

    })
}
const auth = async () => {
  data = {
    username: usuario
  }
  console.log(data);
  const auth = await (fetch('https://four-estaciones-gp8t.onrender.com/api/auth', {
  method: 'POST',
  headers: {
      'Content-type': 'application/json',
   },
  body: JSON.stringify(data)
  }));
  console.log(auth);
  const authJSON = await auth.json();
  

  return {auth, authJSON}
}

redirect();

setInterval(() => {
  redirect();
}, 1100000);

botonDrop.addEventListener('click', (e) => {
    e.preventDefault();
    if (!(sideMobil.classList.contains("transition"))) {
        sideMobil.classList.add('showw') 
        sideMobil.classList.add('transition');
        cortina.classList.toggle('cortina-t')

        setTimeout(() => {
            a.classList.add('hiden');
            
            c.classList.add('hiden');
            d.classList.add('hiden');
            f.classList.add('hiden');
            cuenta2.classList.add('hiden');
        }, 500);
    } 
    else {
        a.classList.remove('hiden');
        
        c.classList.remove('hiden');
        d.classList.remove('hiden');
        f.classList.remove('hiden');
        cuenta2.classList.add('hiden');
        cortina.classList.toggle('cortina-t')
        sideMobil.classList.remove('transition');
        setTimeout(() => {
          sideMobil.classList.remove('showw'); 
        }, 1000);
    }
})

cortina.addEventListener('click' , (e) => {
    e.preventDefault();
    console.log("jaja")
    a.classList.remove('hiden');
    
    c.classList.remove('hiden');
    d.classList.remove('hiden');
    f.classList.remove('hiden');
    cuenta2.classList.remove('hiden');
    cortina.classList.toggle('cortina-t')
    sideMobil.classList.remove('transition');
    setTimeout(() => {
      sideMobil.classList.remove('showw'); 
    }, 1000);
})




console.log("abueno");


