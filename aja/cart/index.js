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
const preguntaContainer = document.querySelector('#container-pregunta');
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


const bot = async (data) => {
  console.log(data);
  const factura = await (fetch('http://localhost:4000/send-message-provider', {
  method: 'POST',
  headers: {
      'Content-type': 'application/json',
   },
  body: JSON.stringify(data)
  }));
  console.log(auth);
  const facturaJSON = await factura.json();
  

  return {factura, facturaJSON}
}

const whats = async (data) => {
  
  console.log(data);
  const what = await (fetch('https://four-estaciones-gp8t.onrender.com/api/whats', {
  method: 'POST',
  headers: {
      'Content-type': 'application/json',
   },
  body: JSON.stringify(data)
  }));
  console.log(auth);
  const whatJSON = await what.json();
  

  return {what, whatJSON}
}

const precios = async () => {
  const aja = await (fetch('https://four-estaciones-gp8t.onrender.com/api/prueba', {
  method: 'GET',
  headers: {
      'Content-type': 'application/json',
   },
   mode: "cors"
  }));
  const ajaJSON = await aja.json();
  console.log(aja);
  console.log(ajaJSON);
  return {aja, ajaJSON}
}

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
      setTimeout(() => {
        // window.location = "../login"
        mensaje.innerHTML=""
      }, 5000);
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
  const data = {
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

const facturaa = async (data) => {
  
  console.log(data);
  const factura = await (fetch('https://four-estaciones-gp8t.onrender.com/api/factura', {
  method: 'POST',
  headers: {
      'Content-type': 'application/json',
   },
  body: JSON.stringify(data)
  }));
  console.log(auth);
  const facturaJSON = await factura.json();
  

  return {factura, facturaJSON}
}

const bueno = async (e) => {
  const data = {
      name: "",
     value: "",
     image: "",
     description: "",
     category:"",
     metodo: "get",
     id: e,
  }
  console.log(data);
  const producto = await (fetch('https://four-estaciones-gp8t.onrender.com/api/products', {
  method: 'POST',
  headers: {
      'Content-type': 'application/json',
   },
  body: JSON.stringify(data)
  }));
  console.log(auth);
  const productoJSON = await producto.json();
  

  return {producto, productoJSON}
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

redirect();

setInterval(() => {
  redirect();
}, 1100000);


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
      <p class="value">${element.productValue} $</p>
      <p class="descripcion">${element.decription}</p>
      <button id="${element.id}" class="side-button-aja">Ordenar</button>
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
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}


  }
  productos.forEach(element => {
    aja(element, i)
    i++
  });
  
  const verga = []
  
  div.addEventListener("click", e => {
    e.preventDefault();
    if (e.target.classList.contains("side-button-aja")) {
      console.log("risa");
      const id = e.target.id
      bueno(id).then(e => {
        console.log("qlq");
        console.log(e.producto);
        console.log(e.productoJSON);
        const element = e.productoJSON;
        console.log(element);
        
        const eso = {
          imagen: element.productImage,
          producto: element.productName,
          value: element.productValue,
          descripcion: element.decription,
          cantidad: 1
        }
        const esto = (verga, eso) => {
          console.log("qlq");
          if (verga.length===0) {
            verga.push(eso)
            console.log("hola");
          } else {
              console.log("aja");
              let b = Boolean
              let i = 0
              for (const e of verga) {
                console.log(verga.length);
                if (e.producto===eso.producto) {
                  console.log("qlq");
                  e.cantidad = e.cantidad + 1
                  return
                } else {
                  i = i+1
                  if (i === verga.length) {
                    verga.push(eso);
                    i = 0
                    return
                  }
                }

              }
          }
          console.log(verga);
          console.log("perra");
          
          
        }
        esto(verga,eso)
        console.log(eso);
        console.log(verga);
        mensaje.innerHTML=""
        spiner.classList.add('show-none');
        mensajeContainer.classList.toggle('show-transform');
        mensaje.classList.toggle('show-transform');
        let i = 1
        function pero(element,i) {
          const nuevoMensaje = document.createElement('div');
          console.log(element);
          nuevoMensaje.innerHTML = `
            <img class="imagen" src="${element.imagen}" alt="Mountains" style="width:100%">
            <h4 class="nombre">${element.producto}</h4>
            <div class="ccantidad">
              <p class="value">${element.value} $</p>
              <input class="cantidadd" tye='numeric' id="q" value='${element.cantidad}'></input>
            </div>
            
          
          `
         
           
          nuevoMensaje.classList.add('pedido')
          mensaje.append(nuevoMensaje);
          nuevoMensaje.style.gridArea = `numero-${i}`
          mensaje.className = `show-transform messageGrid cantidad${i}` 
        };

        verga.forEach(element => {
          pero(element, i)
          i++
        });
        const puls = document.createElement('div');
        puls.innerHTML = `
        <button id="plus" type="button" class='pluss'>➕</button>
        `
        mensaje.append(puls);
        puls.classList.add('plusContainer')
        
        

        const Order = document.createElement('div');
        Order.innerHTML = `
        <button id="ordenar" class="side-button-bueno" type="button" class='plus'>ordenar</button>

        `
        mensaje.append(Order);
        Order.classList.add('realizar');

        const plus = document.querySelector('#plus');

        plus.addEventListener("click", e => {
          e.preventDefault();
          mensajeContainer.classList.toggle('show-transform');
          mensaje.classList.toggle('show-transform');
        })

        const ordenar = document.querySelector('#ordenar');

        ordenar.addEventListener('click', e => {
          e.preventDefault();
          console.log(mensaje.children);
          const factura = mensaje.children
          console.log(factura);
          const arr = Array.from(factura);
          console.log(arr);
          const k = []
          arr.forEach(element => {
            if (element.classList.contains("pedido")) {
                k.push(element);
            }
          });
          console.log(k);
          const a = []
          k.forEach(element => {
            console.log(element.innerHTML); 
            const s = element.children
            console.log(s);
            const t = []
            const arr = Array.from(s);
            console.log(arr);
            arr.forEach(element => {
              console.log(element);
              console.log(element.innerHTML);
              let ok = element.innerHTML
              if (element.classList.contains('ccantidad')) {
                console.log(element.children);
                const daw = element.children[0].innerHTML
                t.push(daw)
                ok = element.children[1].value
              } 

              
              t.push(ok);
              
            });
            console.log(t);
            const aja = {
              nombre : t[1],
              valor: t[2],
              cantidad: t[3]
            }
            a.push(aja);
          });
          console.log(a);
          const c = []
          a.forEach(element => {
             console.log(element);
             const eso = element.valor
             console.log(eso);
             const aja = Number(element.cantidad)
             const v = eso.split(" ")
             const j = v[0]
             const g = j.replace("," , ".")
             console.log(g);
             console.log(aja);
             
             const total = g * aja
             console.log(total);
             c.push(total);
          });
          console.log(c);
          let totall = c.reduce((a, b) => a + b, 0);
          console.log(totall);
          precios().then(e => {
            console.log(e.aja);
            console.log(e.ajaJSON);
            const aja = e.ajaJSON.ajaJSON
            console.log(aja[0].exchange);
            const dolar = aja[0].exchange
            const bs = dolar * totall
            console.log(bs);
            mensaje.innerHTML=""
            console.log(a);
            console.log(a[0].cantidad);
            console.log(a[0].nombre);
            a.forEach(element => {
              const dola = element.valor.split(" ");
              console.log(dola);
              const eso = dola[0]
              const vee = eso.replace(",", ".")
              console.log(eso);
              const precio = element.cantidad * vee * dolar
              console.log(precio);
              const bueno = precio.toFixed(2);
              console.log(bueno);
              const factura = document.createElement('div');
              factura.innerHTML=`
              <h4 class="nombree">${element.nombre}</h4>
              <p class="valuee">${element.valor}</p>
              <p class="cantidadd" id="q">${element.cantidad}</p>
              <p class="bs">${bueno} Bs.</p>
              `
              factura.classList.add('factura');
              mensaje.append(factura);
              
            });
            const confirmar = document.createElement('div');
            confirmar.innerHTML=`
              <button id="confirmar" class="side-button-aja" type="button" class='plus'>confirmar</button>
              <button id="cancelar" class="side-button-aja" type="button" class='plus'>cancelar</button>
            `
            confirmar.classList.add('factura');
            mensaje.append(confirmar);
            mensaje.className = "show-transform ffaactura"

            const confirmarr = document.querySelector('#confirmar');
            const cancelar = document.querySelector('#cancelar');

            confirmarr.addEventListener('click', e => {
              e.preventDefault();
              const preghunta = document.createElement('div');
              preghunta.innerHTML=`
              <p class="">Indicanos donde recibiras tu pedido.</p>
              <textarea id="textArea" name="textarea" rows="5" cols="25" placeholder="Escribe tu direccion aca."></textarea>
              <button id="confirm" class="side-button-aja" type="button" class='plus'>Confirmar</button>
              `
              preguntaContainer.append(preghunta);
              preghunta.classList.add('pregunta')
              mensajeContainer.classList.toggle('show-transform');
              preguntaContainer.classList.toggle('show-transform');
              const confirm = document.querySelector('#confirm');
              const textArea = document.querySelector('#textArea');

              confirm.addEventListener ('click', e => {
                e.preventDefault();
                const direeccion = textArea.value
                console.log(direeccion);
                console.log(a);
                console.log(totall);
                console.log(totall * dolar);
                const bolivar = totall * dolar
                preguntaContainer.innerHTML=""
                preghunta.innerHTML=`
                <div id="pagoMobil" class="metodoo">
                    <h1>Pago Mobil</h1>
                    <p>Cedula</p>
                    <p>Numero de telefono</p>
                    <p>Banco</p>
                    <input id="referencia" placeholder="Numero de referencia"></input>
                </div>
                <div id="efectivo" class="metodoo">
                    <h1>Efectivo</h1>
                </div>
                `
                preghunta.classList.add('metodo');
                preguntaContainer.append(preghunta);
                const referencia = document.querySelector('#referencia')
                const pagoMobil = document.querySelector('#pagoMobil');
                const efectivo = document.querySelector('#efectivo');

                efectivo.addEventListener('click', e => {
                  e.preventDefault();
                  const metodoDePago = "Efectivo"
                    const data = {
                      productos: a,
                      totalDolars: totall,
                      totalBolivares: bolivar,
                      estado: "En proceso",
                      metodo: "",
                      direccion: direeccion,
                      usuario: usuario,
                      metodoDePago: metodoDePago,
                    }
                    user().then(e => {
                      console.log(e.userJSON);
                      const users = e.userJSON.docs
                      const aja = users.filter(element => element.username===usuario);
                      console.log(aja);

                      facturaa(data).then(e => {
                        console.log(e.factura);
                        console.log(e.facturaJSON);
                        const iidd = e.facturaJSON.savedfactura.id
                        const data = {
                          phone: "584120297347",
                          id: iidd,
                          metodo: "get"
                        }
                        bot(data).then(e => {
                          console.log(e.facturaJSON);
                          console.log(e.factura);
                          preguntaContainer.innerHTML=""
                          preghunta.innerHTML=`
                          <p>El #id de su orden es ${iidd}</p>
                          <p>Verifica el estado de tu orden en la pestaña de <a href="../account">Cuenta</a>.</p>
                          `
                          preguntaContainer.append(preghunta);
                          preghunta.className = "final"
                          console.log(preguntaContainer);
                        })
                        
                      })
                    })
                })

                pagoMobil.addEventListener('click', e => {
                  e.preventDefault();
                  if (referencia.value === "") {
                    referencia.classList.add('incorrect');
                  } else {
                    referencia.classList.remove('incorrect');
                    const numeroRef = referencia.value
                    const metodoDePago = "Pago Mobil"
                    const data = {
                      productos: a,
                      totalDolars: totall,
                      totalBolivares: bolivar,
                      estado: "En proceso",
                      metodo: "",
                      direccion: direeccion,
                      usuario: usuario,
                      metodoDePago: metodoDePago,
                      numeroRef: numeroRef
                    }
                    user().then(e => {
                      console.log(e.userJSON);
                      const users = e.userJSON
                      const aja = users.filter(element => element.username===usuario);
                      console.log(aja);

                      facturaa(data).then(e => {
                        console.log(e.factura);
                        console.log(e.facturaJSON);
                        const iidd = e.facturaJSON.savedfactura.id
                        const data = {
                          phone: "584120297347",
                          id: iidd,
                          metodo: "get"
                        }
                        bot(data).then(e => {
                          console.log(e.facturaJSON);
                          console.log(e.factura);
                          preguntaContainer.innerHTML=""
                          preghunta.innerHTML=`
                          <p>El #id de su orden es ${iidd}</p>
                          <p>Verifica el estado de tu orden en la pestaña de <a href="../account">Cuenta</a>.</p>
                          `
                          preguntaContainer.append(preghunta);
                          preghunta.className = "final"
                          console.log(preguntaContainer);
                        })
                        
                      })
                    })
                    

                  }

                })

              })
            

            })
            
            cancelar.addEventListener('click', e => {
              e.preventDefault();
              location.reload();
              
            })
            
          })
          
            
        })
        
        
        console.log(mensaje);
      })
      
    }
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
        cortina.classList.toggle('cortina-t');
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

  if (e.target.classList.contains('imagen')||e.target.classList.contains('nombre')||e.target.classList.contains('value')&& !(e.target.classList.contains('side-button-aja'))) {
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
  } else if (!(e.target.classList.contains('side-button-aja'))) {
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


console.log("abueno");


