// Función del menú
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.menu-icon').addEventListener('click', () => {
        document.querySelector('.navigation').classList.toggle('active');
    });
});

// Scroll para el nav
document.addEventListener("DOMContentLoaded", function () {
    const body = document.body
    window.addEventListener("scroll", () => {
        const nav = document.querySelector("nav")
        nav.classList.toggle("nav-scroll", window.scrollY > 0)
    })
});

document.querySelectorAll('.navigation a').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelector('.menu-icon').click();
    })
});


//Alerta publicidad
window.addEventListener('load', function () {
    Swal.fire({
        html: `
        <div class="container mt-5">
        <div class="pm">
            <h1 class="pm-ti">Promociones del Mes!!</h1>
            <p class="pm-text">Descubre nuestras increíbles ofertas y ahorra en tus productos favoritos.</p>
        </div>
    `,

        width: 600,
        padding: "1em",
        color: "#716add",
        backdrop: `
            rgb(188, 228, 244)
            left top
            no-repeat
        `
    });
});


const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('click', () => {
        // Aquí puedes agregar la lógica para mostrar más información del producto
        console.log('Información del producto');
    });
});