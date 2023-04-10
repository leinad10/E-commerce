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

auth().then(e => {
  if (e.auth.status===400) {
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
})


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active","");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";

    
  }

let slideIndex = 1;
setInterval(()=>{
  showSlides(slideIndex);
  slideIndex++
}, 800000)


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
function currentSlide(n) {
    showSlides(slideIndex = n);
  }

console.log("abueno");


