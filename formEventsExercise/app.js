const itemForm = document.querySelector('form')
const listContainer = document.querySelector('#list')

itemForm.addEventListener('submit', (e) => {
    e.preventDefault()

const product = document.querySelector('input:nth-of-type(1)');
const quantity = document.querySelector('input:nth-of-type(2)');
addItem (product.value, quantity.value)
product.value = '';
quantity.value = '';
})

const addItem = (product, quantity) => {
const li = document.createElement('li')
li.innerText = `${product} - ${quantity}`

listContainer.appendChild(li)
}