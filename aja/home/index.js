const botonDrop = document.querySelector("#botonDrop");
const sideMobil = document.querySelector("#side");
const a = document.querySelector('#side-t');
const b = document.querySelector('#side-f');
const cortina = document.querySelector('#cortina')
const body = document.querySelector('body');

body.addEventListener('click' , e => {
  e.preventDefault();
  console.log(e.target);
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
        }, 2000);
    } 
    else {
        a.classList.remove('hiden');
        b.classList.remove('hiden');
        cortina.classList.toggle('cortina-t')
        sideMobil.classList.remove('transition');
    }
})

cortina.addEventListener('click' , (e) => {
    e.preventDefault();
    console.log("jaja")
    a.classList.remove('hiden');
    b.classList.remove('hiden');
    cortina.classList.toggle('cortina-t')
    sideMobil.classList.remove('transition');
})



// function showSlides(n) {
//   let i;
//   let dots = document.getElementsByClassName("dot");
//   let slides = document.getElementsByClassName("mySlides");
//   console.log(slides.length);
//   console.log(slides);
//   console.log(slideIndex);
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   for (i = 0; i < dots.length; i++) {
//           dots[i].className = dots[i].className.replace("active","");
//         }
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "flex";
//   dots[slideIndex-1].className += " active";
//   console.log(slideIndex);
//   setTimeout(showSlides, 10000); // Change image every 2 seconds
// }

// function plusSlides(n) {
//   showSlides(slideIndex + (n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// let slideIndex = 0;
// showSlides(slideIndex);

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




