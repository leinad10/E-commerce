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

const aja = document.createElement('div');



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

const imagenes = async () => {
  
  const imagenes = await (fetch('http://localhost:3003/api/uploads', {
  method: 'GET',
  headers: {
      'Content-type': 'application/json',
   },
  }));
  console.log(auth);
  const imagenesJSON = await imagenes.json();
  

  return {imagenes, imagenesJSON}
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
      cortina.classList.toggle('show-transform');
    }, 5000);
    setTimeout(() => {
        enviarMensaje.innerHTML=''
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

botonDrop.addEventListener('click', (e) => {
    e.preventDefault();
    if (!(sideMobil.classList.contains("transition"))) {
        sideMobil.classList.add('showw');
        sideMobil.classList.add('transition');
        cortina.classList.toggle('cortina-t')

        console.log(aja);
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

imagenes().then(e => {
  console.log(e.imagenes);
  console.log(e.imagenesJSON);
  const aja = e.imagenesJSON.docs
  console.log(aja);
  const evento = [];
  const producto = [];
  const produccion = [];
  aja.forEach(element => {
    if (element.category==="evento") {
      evento.push(element);
    } else if (element.category==="producto") {
      producto.push(element);
    } else if (element.category==="produccion") {
      produccion.push(element);
    }
  })
  console.log(evento);
  console.log(producto);
  console.log(produccion);
  const mostrar  = (x) => {
    const categoria = x[0]
    const categoriia = categoria.category
    const CATEGORIA = categoriia.toUpperCase();
    console.log(categoriia);
    const eso = document.createElement('div');
    const titulo = document.createElement('div');
    titulo.innerHTML= `${CATEGORIA}`;
    titulo.classList.add('titleDiv')
    const seccion = document.createElement('div');
    seccion.classList.add('seccionDiv');
    const equis = document.createElement('span');
    equis.innerHTML = 'X'
    equis.classList.add('equis')
    
    eso.append(titulo);
    eso.append(seccion);
    eso.append(equis);
    eso.classList.add(`divImage-${categoriia}`)
    let i = 1
    const bueno = (e, i) => {
      const h = document.createElement('div');
      h.innerHTML = `
      <img class='galleryImage' src="../../images/aja/${e.name}">
      `
      h.classList.add(`categoryDiv`);
      h.classList.add(`${i}`)
      seccion.append(h);
    }
    x.forEach(e => {
      bueno(e, i);
      i++
    })
    // x.forEach(e => {
    //   const h = document.createElement('div');
    //   h.innerHTML = `
    //   <img class='galleryImage' src="../../images/aja/${e.name}">
    //   `
    //   h.classList.add('categoryDiv');
    //   seccion.append(h);
    // })
    div.append(eso);
  }
  const opacity = (e) => {
    const aja = div.children
    console.log(aja);
    const evento = aja[0];
    const producto = aja[1];
    const produccion = aja[2];
    const evento1 = evento.children;
    const producto1 = producto.children;
    const produccion1 = produccion.children;
    const evento2 = evento1[1];
    const producto2 = producto1[1];
    const produccion2 = produccion1[1];
    const evento3 = evento2.children;
    const producto3 = producto2.children;
    const produccion3 = produccion2.children;

    const eventoArray = Array.from(evento3);
    const productoArray = Array.from(producto3);
    const produccionArray = Array.from(produccion3);

    console.log(eventoArray);
    
    const transition = (array) => {
      let i = 0
      const lenght = array.length 
      console.log(lenght);
        array[i].classList.add('ver');
      setInterval(() => {
        array[i].classList.toggle('ver');
        i++
        if (i>=lenght) {
          i = 0
          console.log('idiota');
          console.log(i);
        }
        array[i].classList.toggle('ver');
        
      }, 5000);
    }

    transition(eventoArray);
    transition(productoArray);
    transition(produccionArray);

    body.addEventListener('mouseover', e => {
      e.preventDefault();
      
      // console.log(e.target.parentElement.parentElement.parentElement.parentElement.children);
      const a = document.querySelector('.divImage-evento');
      const b = document.querySelector('.divImage-producto');
      const c = document.querySelector('.divImage-produccion');
      const laEquisa = a.children[2];
      const laEquisb = b.children[2];
      const laEquisc = c.children[2];
      const aChild = a.children[1];
      const bChild = b.children[1];
      const cChild = c.children[1];
      const aArray = aChild.children;
      const bArray = bChild.children;
      const cArray = cChild.children;
      console.log(bArray, cArray);
      const aa = Array.from(aArray);
      const bb = Array.from(bArray);
      const cc = Array.from(cArray);
      console.log(e.target);
      const aja = e.target.parentElement.parentElement.parentElement.className
      const eso = e.target.parentElement.className
      const bueno = e.target.parentElement.parentElement.parentElement
      console.log(aja);
      console.log(e.target);
      console.log(aja==='divImage-evento showing-evento');
      console.log(aja);

      c
      console.log(aja.startsWith('divImage-evento'),eso.startsWith('divImage-evento'), bueno.classList.contains('divImage-evento'), !(aja==='divImage-evento showing-evento'));
      if (aja==='divImage-evento showing-evento') {
        console.log(e.target);
        console.log('hola');
        laEquisc.classList.remove('showEquis');
        aa.forEach(e => {
          e.style.height="0%"
        })
        e.target.parentElement.style.height='100%'
        console.log(e.target);
        
        laEquisa.classList.add('showEquis');
        laEquisa.addEventListener('click' , e => {
          e.preventDefault();
          laEquisa.classList.remove('showEquis');
        })

        
      } else if (aja==='divImage-producto showing-producto') {
        console.log('producto');
        laEquisc.classList.remove('showEquis');
        bb.forEach(e => {
          e.style.height="0%"
        })
        e.target.parentElement.style.height='100%'
        console.log(e.target);
        
        laEquisb.classList.add('showEquis');
        laEquisb.addEventListener('click' , e => {
          e.preventDefault();
          laEquisb.classList.remove('showEquis');
        })
      } else if (aja==='divImage-produccion showing-produccion') {
        console.log('produccion');
        cc.forEach(e => {
          e.style.height="0%"
        })
        e.target.parentElement.style.height='100%'
        console.log(e.target);
        
        
        laEquisc.addEventListener('click' , e => {
          e.preventDefault();
          laEquisc.classList.remove('showEquis');
        })
      } else if (aja.startsWith('divImage-evento') || eso.startsWith('divImage-evento') || bueno.classList.contains('divImage-evento') && (!(aja==='divImage-evento showing-evento'))) {
        setTimeout(() => {
          console.log(a,b,c);
        console.log('qlqlq1');

        a.className = "divImage-evento"
        b.className = "divImage-producto"
        c.className = "divImage-produccion"


        laEquisa.classList.remove('showEquis');
        laEquisb.classList.remove('showEquis');
        laEquisc.classList.remove('showEquis');
        aa.forEach(e => {
          e.classList.remove('oculto');
          e.classList.remove('showing');
          const child = e.children[0];
          console.log(child);
          child.classList.remove('cropping');
          e.style.height = "0%";
        })
        bb.forEach(e => {
          e.classList.remove('oculto');
          e.classList.remove('showing');
          const child = e.children[0];
          console.log(child);
          child.classList.remove('cropping');
          e.style.height = "0%";
        })
        cc.forEach(e => {
          e.classList.remove('oculto');
          e.classList.remove('showing');
          const child = e.children[0];
          console.log(child);
          child.classList.remove('cropping');
          e.style.height = "0%";
        })
        
        a.className = "divImage-evento showing-evento"
        b.className = "divImage-producto showing-evento-in-producto"
        c.className = "divImage-produccion showing-evento-in-produccion"
        
        

        const aLenght = aa.length;
        console.log(aLenght);
        let porcentaje = ""
        if (aLenght>=4) {
          a.style.overflow = "auto"
          porcentaje = 25
        } else {
          a.style.overflow = "auto"
          porcentaje = 100/aLenght;
        }
        aa.forEach(e => {
          e.classList.add('showing');
          const child = e.children[0];
          console.log(child);
          child.classList.add('cropping');
          e.style.height = `${porcentaje}%`
        })
        bb.forEach(e => {
          e.style.height = "0%"
          setTimeout(() => {
            e.classList.remove('showing');
            e.classList.add('oculto');
          }, 200);
          
        })
        cc.forEach(e => {
          e.style.height = "0%"
          setTimeout(() => {
            e.classList.remove('showing');
            e.classList.add('oculto');
          }, 200);
        })

        }, 100);
        
        
        
        } else if (aja.startsWith('divImage-producto') || eso.startsWith('divImage-producto') || bueno.classList.contains('divImage-producto')) {
        console.log('qlqlq2');
        console.log(a,b,c);
        console.log('qlqlq2');
        
        a.className = "divImage-evento"
        b.className = "divImage-producto"
        c.className = "divImage-produccion"
        laEquisa.classList.remove('showEquis');
        laEquisb.classList.remove('showEquis');
        laEquisc.classList.remove('showEquis');


        aa.forEach(e => {
          e.classList.remove('oculto');
          e.classList.remove('showing');
          const child = e.children[0];
          console.log(child);
          child.classList.remove('cropping');
          e.style.height = "0%";
        })
        bb.forEach(e => {
          e.classList.remove('oculto');
          e.classList.remove('showing');
          const child = e.children[0];
          console.log(child);
          child.classList.remove('cropping');
          e.style.height = "0%";
        })
        cc.forEach(e => {
          e.classList.remove('oculto');
          e.classList.remove('showing');
          const child = e.children[0];
          console.log(child);
          child.classList.remove('cropping');
          e.style.height = "0%";
        })

        a.className = "divImage-evento showing-producto-in-evento"
        b.className = "divImage-producto showing-producto"
        c.className = "divImage-produccion showing-producto-in-produccion"
        // a.classList.add('showing-producto-in-evento');
        // b.classList.add('showing-producto');
        // c.classList.add('showing-producto-in-produccion');
        

        const bLenght = bb.length;
        console.log(bLenght);
        let porcentaje = ""
        if (bLenght>=4) {
          b.style.overflow = "auto"
          porcentaje = 25
        } else {
          
          b.style.overflow = "hidden"
          porcentaje = 100/bLenght;
        }
        aa.forEach(e => {
          e.style.height = "0%"
          setTimeout(() => {
            e.classList.remove('showing');
            e.classList.add('oculto');
          }, 200);
          
          
        })



        bb.forEach(e => {
          e.classList.add('showing');
          const child = e.children[0];
          console.log(child);
          child.classList.add('cropping');
          e.style.height = `${porcentaje}%`
        })

        cc.forEach(e => {
          e.style.height = "0%"
          setTimeout(() => {
            e.classList.remove('showing');
            e.classList.add('oculto');
          }, 200);
        })
        
        
        } else if (aja.startsWith('divImage-produccion') || eso.startsWith('divImage-produccion') || bueno.classList.contains('divImage-produccion')) {
        console.log('qlqlq3');
        console.log(a,b,c);

        a.className = "divImage-evento"
        b.className = "divImage-producto"
        c.className = "divImage-produccion"

        laEquisa.classList.remove('showEquis');
        laEquisb.classList.remove('showEquis');
        laEquisc.classList.remove('showEquis');
        aa.forEach(e => {
          e.classList.remove('oculto');
          e.classList.remove('showing');
          const child = e.children[0];
          console.log(child);
          child.classList.remove('cropping');
          e.style.height = "0%";
        })
        bb.forEach(e => {
          e.classList.remove('oculto');
          e.classList.remove('showing');
          const child = e.children[0];
          console.log(child);
          child.classList.remove('cropping');
          e.style.height = "0%";
        })
        cc.forEach(e => {
          e.classList.remove('oculto');
          e.classList.remove('showing');
          const child = e.children[0];
          console.log(child);
          child.classList.remove('cropping');
          e.style.height = "0%";
        })

        a.className = "divImage-evento showing-produccion-in-evento"
        b.className = "divImage-producto showing-produccion-in-producto"
        c.className = "divImage-produccion showing-produccion"
        // a.classList.add('showing-produccion-in-evento');
        // b.classList.add('showing-produccion-in-producto');
        // c.classList.add('showing-peoduccion');

        const cLenght = cc.length;
        console.log(cLenght);
        let porcentaje = ""
        if (cLenght>=4) {
          c.style.overflow = "auto"
          porcentaje = 25
        } else {
          c.style.overflow = "hidden"
          porcentaje = 100/cLenght;
        }
        aa.forEach(e => {
          e.style.height = "0%"
          setTimeout(() => {
            e.classList.remove('showing');
            e.classList.add('oculto');
          }, 200);
        })



        bb.forEach(e => {
          e.style.height = "0%"
          setTimeout(() => {
            e.classList.remove('showing');
            e.classList.add('oculto');
          }, 200);
        })

        cc.forEach(e => {
          e.classList.add('showing');
          const child = e.children[0];
          console.log(child);
          child.classList.add('cropping');
          e.style.height = `${porcentaje}%`

        })
        } 
      
      
     
    })
    
    // eventoArray.forEach(e => {
    //   if (e.classList.contains("1")) {
    //     e.classList.toggle("ver")
    //   }
    // })

  }
  mostrar(evento);
  mostrar(producto);
  mostrar(produccion);
  opacity();
})

// const eso = document.createElement('div');
    // eso.innerHTML = `
    // <img class='galleryImage' src="../../images/aja/${element.name}">
    // `
    // eso.classList.add(`divImages-${element.category}`);
    // div.append(eso);

console.log("abueno");


