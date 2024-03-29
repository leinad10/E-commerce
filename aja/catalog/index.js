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
const div = document.querySelector('#div1');
const all = document.querySelector('#all');
const productoss = document.querySelector('#Productos');
const postres = document.querySelector('#Postres');
const combos = document.querySelector('#Combos');
const bebidas = document.querySelector('#Bebidas');
const sideText = document.querySelectorAll('.side-t-p')
const sideImg = document.querySelectorAll(".side-t-img");
const side = document.querySelector("#side-2");
const body = document.querySelector('body');
import { wrapGrid } from 'https://cdn.skypack.dev/animate-css-grid';
import animateCssGrid from 'https://cdn.skypack.dev/animate-css-grid';

wrapGrid(div ,{
  // int: default is 0 ms
  stagger: 20,
  // int: default is 250 ms
  duration: 250,
  // string: default is 'easeInOut'
  easing: 'backInOut',
});
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

  if (e.target.classList.contains('imagen')||e.target.classList.contains('nombre')||e.target.classList.contains('value')) {
    console.log(e.target.parentElement);
    const content = document.querySelectorAll('.column')
    console.log('aja');
    
    content.forEach(e => {
      console.log(e.children);
      const k = e.children[0]
      console.log(k.children[3]);
      k.children[3].classList.remove('show-grid')
      
    })
    const bueno = e.target.parentElement.parentElement
    
    console.log(e.target.parentElement.parentElement.classList[2]);
    const current = bueno.classList[2];
    div.className= `big${current}`
    // console.log(current);
    // console.log(e.target.parentElement.parentElement.parentElement.children[current-2]);
    // console.log(current%2);
    // let eso = ''
    // if (current%2 === '0') {
    //   eso = current/2
    // } else {
    //   eso = (current/2)
    // }
     
    // bueno.style.gridRow = `${eso}`
    // console.log(e.target.parentElement.children[3]);
    e.target.parentElement.children[3].classList.add('show-grid')
    // e.target.parentElement.parentElement.style.gridRow = '0'
  } else {
    const content = document.querySelectorAll('.column')
    console.log('aja');
    
    content.forEach(e => {
      console.log(e.children);
      const k = e.children[0]
      console.log(k.children[3]);
      k.children[3].classList.remove('show-grid')
      
    })
    div.className = "";
  }
})


const auth = async () => {
  const data = {
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
const products = async () => {
  const aja = await (fetch('https://four-estaciones-gp8t.onrender.com/api/products', {
  method: 'GET',
  headers: {
      'Content-type': 'application/json',
   },
  }));
  
  const ajaJSON = await aja.json();
  

  return {aja, ajaJSON}
}



mensajeContainer.classList.toggle('show-transform');
products().then(e => {
  mensajeContainer.classList.toggle('show-transform');
  console.log(e.aja);
  console.log(e.ajaJSON);
  const productos = e.ajaJSON.docs
  console.log(productos.length);
  let i = 1
  function aja(element, i) {
    const mostrarProductos = document.createElement('div');
    mostrarProductos.innerHTML = `
      <div class="content">
        <img class="imagen" src="${element.productImage}" alt="Mountains" style="width:100%">
        <h4 class="nombre">${element.productName}</h4>
        <p class="value">${element.productValue}</p>
        <p class="descripcion">${element.decription}</p>
      </div>
    `
    mostrarProductos.classList.add('column');
    mostrarProductos.classList.add(`${element.category}`);
    mostrarProductos.classList.add(`numero-${i}`);
  // 
  div.append(mostrarProductos);
  filterSelection("all");
    all.addEventListener('click', e => {
      e.preventDefault();
      filterSelection("all");
    })
    postres.addEventListener('click', e => {
      e.preventDefault();
      filterSelection("Postre");
    })
    productoss.addEventListener('click', e => {
      e.preventDefault();
      filterSelection("Producto");
    })
    combos.addEventListener('click', e => {
      e.preventDefault();
      filterSelection("Combos");
    })
    bebidas.addEventListener('click', e => {
      e.preventDefault();
      filterSelection("Bebidas");
    })

 // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") {c = ""};
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "showw");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "showw");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", e => {
    e.preventDefault();
    const current = document.getElementsByClassName("active");
    // current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}
  }
  productos.forEach(element => {
    aja(element, i)
    i++
  });
  

}) 





auth().then(e => {
  
  if (e.auth.status===400) {
    
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
    sideMobil.classList.remove('showw');
    setTimeout(() => {
      sideMobil.classList.remove('showw'); 
    }, 1000);
})



console.log("abueno");


