// change button state

const mainBlock = document.querySelector('.button-wrap');
const buttonCircle = mainBlock.querySelector('.circle');

const rangeInput = document.querySelector('input[type="range"]')

mainBlock.addEventListener('click', function() {
    buttonCircle.classList.toggle('change')
    mainBlock.classList.toggle('changeColor')
})

rangeInput.addEventListener('input', function() {
    console.log(rangeInput.value)
})
