const form = document.querySelector('form');
const list = document.querySelector('#list')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const productInput = document.querySelector('input:nth-of-type(1)');
    const quantityInput = document.querySelector('input:nth-of-type(2)');
    addItem(productInput.value, quantityInput.value);
    productInput.value = '';
    quantityInput.value = '';
})

function addItem(product, quantity) {
    const item = document.createElement('li');
    item.innerText = `${product} - ${quantity}`;

    list.appendChild(item);
}