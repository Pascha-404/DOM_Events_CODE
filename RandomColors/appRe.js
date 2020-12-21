const btn = document.querySelector('button');
const btn2 = document.querySelector('button:nth-of-type(2)')
const h1 = document.querySelector('h1')

btn.addEventListener('click', () => {
    
        changeAll();



})
btn2.addEventListener('click', () => {
    clearInterval(strobo)
})

const changeAll = () => {
    const newClr = rndmClr();
    document.body.style.backgroundColor = `${newClr}`;
    h1.innerText = `${newClr}`;
}

const rndmClr = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    if (r + g + b <= 180) {
        h1.style.color = 'white';
    } else {
        h1.style.color = 'black';
    }
    return `rgb(${r},${g},${b})`
}