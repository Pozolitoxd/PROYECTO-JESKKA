// script carrusel con splide js
document.querySelectorAll('.splide').forEach((carrusel) => {
  new Splide(carrusel, {
    type: 'loop',
    perPage: 4,
    focus: "center",
    breakpoints: {
      640: {
        perPage: 1,
        focus: "center"
      },
      1024: {
        perPage: 3,
        focus: "center"
      },
    },
  }).mount();
});
// Validación de inicio de sesión
const iniciarSesion = document.getElementById('iniciarsesion');
iniciarSesion.onclick = function (event) {
  event.preventDefault(); 

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  emailInput.classList.remove('is-invalid');
  passwordInput.classList.remove('is-invalid');

  if (email === '' || password === '') {
    if (email === '') emailInput.classList.add('is-invalid');
    if (password === '') passwordInput.classList.add('is-invalid');
    return;
  }

  if (email === 'admin@gmail.com' && password === '123456') {
    window.location.href = 'Assets/pages/admin.html';
  } else {
    emailInput.classList.add('is-invalid');
    passwordInput.classList.add('is-invalid');
  }
};

