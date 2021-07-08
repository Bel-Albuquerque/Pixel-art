let black = document.querySelector('.preto')
let colorBlack = black.style.backgroundColor='black'
let red = document.querySelector('.vermelho')
let colorRed = red.style.backgroundColor = 'red'
let blue = document.querySelector('.azul')
let colorBlue = blue.style.backgroundColor = 'blue'
let yellow = document.querySelector('.amarelo')
let colorYellow = yellow.style.backgroundColor = 'yellow'
let palette = document.querySelector('.palette')
let pixelBoard = document.querySelector('#pixel-board')


function colorselect (event) {
  let colorSelect = document.querySelector('.select')
  colorSelect.classList.remove('select')
  event.target.classList.add('select')
}
palette.addEventListener('click', colorselect)


function selectPixel (event) {
  let pixelSelect= document.querySelector('.selectPixel')
  pixelSelect.classList.remove('selectPixel')
  event.target.classList.add('selectPixel')
}
pixelBoard.addEventListener('click', selectPixel)

function pixelColor (event) {
  let colorSelect = document.querySelector('.select')
  let pixelSelect = document.querySelector('.selectPixel')
  let colorSelectFundo =colorSelect.style.backgroundColor
  pixelSelect.style.backgroundColor = colorSelectFundo
}
let h1 = document.querySelector('h1')

pixelBoard.addEventListener('click', pixelColor)


