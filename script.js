const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

function goBack() {
    window.history.back(); // Goes back to the previous page
}



//2.
//3. handle product clicks and redirect to singleProduct1.html
const productElements = document.querySelectorAll('.pro');

productElements.forEach(product => {
    product.addEventListener('click', () => {
        const imageSrc = product.dataset.imageSrc;
        window.location.href = `singleProduct1.html?image=${encodeURIComponent(imageSrc)}`;
    });
});