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

home.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target);

  console.log("q pedi");
  if (window.location==="aja/home") {
    console.log("jajadddd");
  } else {
    console.log("pa ver")
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
}, 8000)


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
function currentSlide(n) {
    showSlides(slideIndex = n);
  }

console.log("abueno");


