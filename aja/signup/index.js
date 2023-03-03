const botonDrop = document.querySelector("#botonDrop");
const sideMobil = document.querySelector("#side");
const a = document.querySelector('#side-t');
const b = document.querySelector('#side-f');
const c = document.querySelector('#login-2');
const f = document.querySelector('#h');
const cortina = document.querySelector('#cortina')
const body = document.querySelector('body');
const usernameInput = document.querySelector('#usuarioInput');
const usernameP = document.querySelector('#p-username');
const emailInput = document.querySelector('#emailInput');
const numberInput = document.querySelector('#numberInput');
const formulario = document.querySelector("#formulario");
const select = document.querySelector("#select-number");
const paswordInput = document.querySelector('#contraseñaInput');
const verificarPasword = document.querySelector('#validacionContraseñaInput');
const btn = document.querySelector('#boton-registrar');


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
            f.classList.add('hiden');
        }, 500);
    } 
    else {
        a.classList.remove('hiden');
        b.classList.remove('hiden');
        c.classList.remove('hiden');
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

let usernameValidation = false;
let emailValidation = false;
let paswordValidation = false;
let numberValidation = false;
let selectChecked = false

const validation = (input, regexValidation) => {
  btn.disabled =
    !usernameValidation ||
    !emailValidation ||
    !paswordValidation ||
    !paswordMatch ||
    !numberValidation ||
    !selectChecked

      ? true
      : false;
  if (usernameInput.valuet==='') {
    usernameInput.classList.remove('correct')
    usernameInput.classList.remove('incorrect')
  }
  if (emailInput.valuet==='') {
    emailInput.classList.remove('correct')
    emailInput.classList.remove('incorrect')
  }
  if (paswordInput.value==='') {
    paswordInput.classList.remove('correct')
    paswordInput.classList.remove('incorrect')
  }
  if (verificarPasword.value==='') {
    verificarPasword.classList.remove('correct')
    verificarPasword.classList.remove('incorrect')
  }
  if (numberInput.value==='') {
    numberInput.classList.remove('correct')
    numberInput.classList.remove('incorrect')
  }
  if (!regexValidation && input.value !== '') {
    input.parentElement.children[1].classList.add('show');
    input.classList.add('incorrect');
    input.classList.remove('correct');
  } else if (regexValidation) {
    input.parentElement.children[1].classList.remove('show');
    input.classList.add('correct');
    input.classList.remove('incorrect');
  } else if (input.value === '') {
    input.parentElement.children[1].classList.remove('show');
    input.classList.remove('incorrect');
    input.classList.remove('correct');
  }
};

usernameInput.addEventListener('input', e => {
  const USERNAME_REGEX = /^(?=.*[a-z])[a-z0-9].{3,24}$/;
  usernameValidation = USERNAME_REGEX.test(e.target.value);
  validation(usernameInput, usernameValidation);
});

emailInput.addEventListener('input', e => {
  const EMAIL_REGEX =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  emailValidation = EMAIL_REGEX.test(e.target.value);
  validation(emailInput, emailValidation);
});

numberInput.addEventListener('input', e => {
    const NUMBER_REGEX = /^\d{7}$/;
    numberValidation = NUMBER_REGEX.test(e.target.value);
    validation(numberInput, numberValidation);
  });

paswordInput.addEventListener('input', e => {
  const PASWORD_REGEX =
    /^(?=.*[a-z])(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).{4,24}$/;
  paswordValidation = PASWORD_REGEX.test(e.target.value);
  validation(paswordInput, paswordValidation);
  paswordMatch = e.target.value === verificarPasword.value;
  console.log(paswordMatch);
  validation(verificarPasword, paswordMatch);
});

verificarPasword.addEventListener('input', e => {
  paswordMatch = paswordInput.value === e.target.value;
  console.log(paswordMatch);
  validation(verificarPasword, paswordMatch);
});

formulario.addEventListener('submit', e => {
    e.preventDefault();
    console.log("jajajaj");
})

select.addEventListener('change', e => {
    e.preventDefault();
    console.log("jaja");
    console.log(e.target);
    selectChecked = true
    e.target.classList.add('correct')
    validation(select, select)
})


