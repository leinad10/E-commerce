const botonDrop = document.querySelector("#botonDrop");
const sideMobil = document.querySelector("#side");
const a = document.querySelector('#side-t');
const b = document.querySelector('#side-f');
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

const auth = async () => {
  data = {
    username: usuario
  }
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

mensajeContainer.classList.toggle('show-transform');
auth().then(e => {
  
  if (e.auth.status===400) {
    spiner.classList.toggle('hidden')
    mensajeContainer.classList.add('fail')
    mensaje.innerHTML=''
    const enviarMensaje = document.createElement('div');
    enviarMensaje.innerHTML = `
    <img class="bueno" src="../../images/error-svgrepo-com.svg" alt="">
    <h1 style="text-align: justify;">${e.authJSON.message}</h1>
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
    return 
  }
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
            cuenta2.classList.add('hiden');
        }, 500);
    } 
    else {
        a.classList.remove('hiden');
        b.classList.remove('hiden');
        c.classList.remove('hiden');
        d.classList.remove('hiden');
        f.classList.remove('hiden');
        cuenta2.classList.add('hiden');
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
    cuenta2.classList.remove('hiden');
    cortina.classList.toggle('cortina-t')
    sideMobil.classList.remove('transition');
})



console.log("abueno");


