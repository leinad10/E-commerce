

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
const preguntaContainer = document.querySelector('#container-pregunta');
const spiner = document.querySelector('#loader');
const div = document.querySelector('#div1');
const all = document.querySelector('#all');
const productoss = document.querySelector('#Productos');
const postres = document.querySelector('#Postres');
const combos = document.querySelector('#Combos');
const bebidas = document.querySelector('#Bebidas');

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

const factura = async (data) => {
  
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
  data = {
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
  console.log(productos);
  productos.forEach(element => {
    const mostrarProductos = document.createElement('div');
    mostrarProductos.innerHTML = `
      <div class="content">
        <img class="imagen" src="${element.productImage}" alt="Mountains" style="width:100%">
        <h4 class="nombre">${element.productName}</h4>
        <p class="value">${element.productValue}</p>
        <p class="descripcion">${element.decription}</p>
        <button id="${element.id}" class="side-button-2">Ordenar</button>
      </div>
    `
    mostrarProductos.classList.add('column');
    mostrarProductos.classList.add(`${element.category}`);
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


  });
  
  const verga = []
  
  div.addEventListener("click", e => {
    e.preventDefault();
    if (e.target.classList.contains("side-button-2")) {
      console.log("risa");
      const id = e.target.id
      bueno(id).then(e => {
        console.log("qlq");
        console.log(e.producto);
        console.log(e.productoJSON);
        const element = e.productoJSON.aja[0]
        console.log(element);
        
        const eso = {
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
        verga.forEach(element => {
          const nuevoMensaje = document.createElement('div');
          nuevoMensaje.innerHTML = `
            <h4 class="nombree">${element.producto}</h4>
            <p class="valuee">${element.value} $</p>
            <p class="descripcionn">${element.descripcion}</p>
            <input class="cantidadd" tye='numeric' id="q" value='${element.cantidad}'></input>
          `
          nuevoMensaje.classList.add('pedido')
          mensaje.append(nuevoMensaje);
        });


        const pulsOrder = document.createElement('div');
        pulsOrder.innerHTML = `
        <button id="plus" type="button" class='plus'>➕</button>
        <button id="ordenar" class="side-button-2" type="button" class='plus'>ordenar</button>

        `
        mensaje.append(pulsOrder);
        pulsOrder.classList.add('order');

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
            arr.forEach(element => {
              console.log(element);
              let ok = element.innerHTML
              if (element.classList.contains('cantidadd')) {
                ok = element.value
              } 

              
              t.push(ok);
              
            });
            const aja = {
              nombre : t[0],
              valor: t[1],
              descripcion: t[2],
              cantidad: t[3]
            }
            a.push(aja);
          });
          console.log(a);
          const c = []
          a.forEach(element => {
             console.log(element);
             const eso = element.valor
             const aja = Number(element.cantidad)
             const v = eso.split(" ")
             console.log(v[0]);
             const total = v[0] * aja
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
              const eso = dola[0]
              const precio = element.cantidad * eso * dolar
              const bueno = precio.toFixed(2);
              const factura = document.createElement('div');
              factura.innerHTML=`
              <h4 class="nombree">${element.nombre}</h4>
              <p class="valuee">${element.valor}</p>
              <p class="descripcionn">${element.descripcion}</p>
              <p class="cantidadd" id="q">${element.cantidad}</p>
              <p class="bs">${bueno} Bs.</p>
              `
              factura.classList.add('factura');
              mensaje.append(factura);
            });
            const confirmar = document.createElement('div');
            confirmar.innerHTML=`
              <button id="confirmar" class="side-button-2" type="button" class='plus'>confirmar</button>
              <button id="cancelar" class="side-button-2" type="button" class='plus'>cancelar</button>
            `
            confirmar.classList.add('factura');
            mensaje.append(confirmar);

            const confirmarr = document.querySelector('#confirmar');
            const cancelar = document.querySelector('#cancelar');

            confirmarr.addEventListener('click', e => {
              e.preventDefault();
              const preghunta = document.createElement('div');
              preghunta.innerHTML=`
              <p class="">Indicanos donde recibiras tu pedido.</p>
              <textarea id="textArea" name="textarea" rows="5" cols="25" placeholder="Escribe tu direccion aca."></textarea>
              <button id="confirm" class="side-button-2" type="button" class='plus'>Confirmar</button>
              `
              preguntaContainer.append(preghunta);
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
                const data = {
                  productos: a,
                  totalDolars: totall,
                  totalBolivares: bolivar,
                  estado: "Pending",
                  metodo: "Post",
                  direccion: direeccion,
                }
                factura(data).then(e => {
                  console.log(e.factura);
                  console.log(e.facturaJSON);
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


