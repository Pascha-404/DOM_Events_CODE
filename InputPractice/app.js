const h1 = document.querySelector('h1');
const username = document.querySelector('#username');

username.addEventListener('input', function () {
    if (this.value){
        h1.innerText = `Welcome, ${username.value}`;
    } else {
        h1.innerText = 'Enter Your Username'
    }
})