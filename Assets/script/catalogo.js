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