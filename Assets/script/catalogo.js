var buttons = document.getElementsByClassName('cartBtn');
var alerta = document.querySelector('.custom-alert');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        alerta.classList.remove('hide');
        alerta.classList.add('show');
        setTimeout(() => {
            alerta.classList.remove('show');
            alerta.classList.add('hide');
        }, 2000);
    }
}
alerta.addEventListener('animationend', function(event) {
    if (event.animationName === 'slideOutRight') {
        alerta.style.display = 'none';
    } else if (event.animationName === 'slideInRight') {
        alerta.style.display = 'flex';
    }
});
document.querySelectorAll('.cartBtn').forEach((btn, idx) => {
    btn.addEventListener('click', function () {
        const card = btn.closest('.card');
        const title = card.querySelector('.card-title').textContent;
        const price = card.querySelector('.card-text').textContent;
        const img = card.querySelector('img').getAttribute('src');
        const producto = {
            title,
            price,
            img,
            cantidad: 1
        };
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        const existe = carrito.find(p => p.title === producto.title && p.price === producto.price);
        if (existe) {
            existe.cantidad += 1;
        } else {
            carrito.push(producto);
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
    });
});