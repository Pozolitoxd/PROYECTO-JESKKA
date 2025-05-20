window.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const colProductos = document.querySelector('.col-md-8');
    if (!colProductos) return;

    carrito.forEach((producto, idx) => {
        const row = document.createElement('div');
        row.className = 'row align-items-center mb-4 producto-dinamico';
        row.innerHTML = `
            <div class="col">
                <img src="${producto.img}" class="product-img me-3 mi-imagen" alt="Zapatilla">
            </div>
            <div class="col">
                <h5>${producto.title}</h5>
                <p class="mb-1 text-muted">Blue/White - EU 35.5</p>
                <p class="mb-1 text-muted">Style: Men</p>
                <div class="d-flex align-items-center">
                    <label class="me-2">Cantidad:</label>
                    <button class="btn btn-outline-secondary btn-sm me-1 btn-restar" data-idx="${idx}">-</button>
                    <span>${producto.cantidad}</span>
                    <button class="btn btn-outline-secondary btn-sm ms-1 btn-sumar" data-idx="${idx}">+</button>
                </div>
            </div>
            <div class="col">
                <h5>${producto.price}</h5>
                <button class="btn btn-outline-primary w-50 mt-5 btn-eliminar" data-idx="${idx}">Eliminar</button>
            </div>
        `;
        colProductos.appendChild(row);
    });

    colProductos.addEventListener('click', function(e) {
        const row = e.target.closest('.producto-dinamico');
        if (!row) return;

        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const idx = e.target.dataset.idx;
        if (e.target.classList.contains('btn-sumar')) {
            carrito[idx].cantidad += 1;
            localStorage.setItem('carrito', JSON.stringify(carrito));
            location.reload();
        }
        if (e.target.classList.contains('btn-restar')) {
            if (carrito[idx].cantidad > 1) {
                carrito[idx].cantidad -= 1;
                localStorage.setItem('carrito', JSON.stringify(carrito));
                location.reload();
            }
        }
        if (e.target.classList.contains('btn-eliminar')) {
            carrito.splice(idx, 1);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            location.reload();
        }
    });
});