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

const input = document.querySelector('input')
let inputButton =document.querySelector('#inputButton')
let num = 0
let h1 = document.querySelector('h1')


function colorselect (event) {
  let colorSelect = document.querySelector('.selected')
  colorSelect.classList.remove('selected')
  event.target.classList.add('selected')
}
palette.addEventListener('click', colorselect)


function selectPixel (event) {
  let pixelSelect= document.querySelector('.selectPixel')
  pixelSelect.classList.remove('selectPixel')
  event.target.classList.add('selectPixel')
}
pixelBoard.addEventListener('click', selectPixel)

function pixelColor (event) {
  let colorSelect = document.querySelector('.selected')
  let pixelSelect = document.querySelector('.selectPixel')
  let colorSelectFundo =colorSelect.style.backgroundColor
  pixelSelect.style.backgroundColor = colorSelectFundo
}
pixelBoard.addEventListener('click', pixelColor)

function buttonLimparJogo (buttonName) {
  let buttonPai = document.querySelector('#button')
  let buttonFilho = document.createElement('button')
  let buttonId = 'clear-board'

  buttonFilho.innerHTML = buttonName
  buttonFilho.id = buttonId
  buttonPai.appendChild(buttonFilho) 
 }
buttonLimparJogo("Limpar")

let button = document.querySelector('#clear-board')

function buttonInput (vqv) {
  let buttonInput =document.createElement('button')
  let inputId = 'generate-board'

  buttonInput.innerHTML = vqv
  buttonInput.id = inputId
  inputButton.appendChild(buttonInput)
}
buttonInput('VQV')

let buttonImp = document.querySelector('#generate-board')

let num2

function valueInput(event) {
  num= event.target.value
  num2=parseInt(num)
  
}
input.addEventListener('input', valueInput)



function multiplicaLimpaInput() {
  let div = document.querySelector('#pixel-board')
  div.innerHTML=''
  if (input.value == 0){
    alert("Board inválido!")
  } else if (parseInt(num)>=5 && parseInt(num)<=50){
    for (let index= 0; index <parseInt(num); index += 1) {
     let divPai = document.querySelector('#pixel-board')
      let divNovaLinha = document.createElement('div')
      divNovaLinha.classList.add('linha')
      divPai.appendChild(divNovaLinha)
        for (let index = 0; index < parseInt(num); index += 1) {
          let divQuadradinho = document.createElement('div')
          divQuadradinho.classList.add('pixel')
          divNovaLinha.appendChild(divQuadradinho)
        }
    }
  } else if (parseInt(num)<5) {
    for (let index= 0; index <5; index += 1) {
      let divPai = document.querySelector('#pixel-board')
      let divNovaLinha = document.createElement('div')
      divNovaLinha.classList.add('linha')
      divPai.appendChild(divNovaLinha)
        for (let index = 0; index < 5; index += 1) {
           let divQuadradinho = document.createElement('div')
           divQuadradinho.classList.add('pixel')
           divNovaLinha.appendChild(divQuadradinho)
        }
      }
  } else if (parseInt(num)>50) {
    for (let index= 0; index <50; index += 1) {
      let divPai = document.querySelector('#pixel-board')
      let divNovaLinha = document.createElement('div')
      divNovaLinha.classList.add('linha')
      divPai.appendChild(divNovaLinha)
        for (let index = 0; index < 50; index += 1) {
           let divQuadradinho = document.createElement('div')
           divQuadradinho.classList.add('pixel')
           divNovaLinha.appendChild(divQuadradinho)
        }
      }
  }
    let primeiroQuadradinho = document.querySelector('.pixel')
    primeiroQuadradinho.classList.add('selectPixel')
    input.value = ''
    
    num=''
  
}


buttonImp.addEventListener('click', multiplicaLimpaInput)

let pixel = document.querySelectorAll('.pixel')

function limparJogo (event) {
  let colorSelect = document.querySelector('.selected')
  colorSelect.classList.remove('selected')
   black.classList.add('selected')
   let pixel = document.querySelectorAll('.pixel')
   for (let index = 0; index < pixel.length; index += 1) {
     let quadradinho = pixel[index]
     quadradinho.style.backgroundColor = 'white'
   }
  let div = document.querySelector('#pixel-board')
   div.innerHTML=''
   input.value = ''
}
 button.addEventListener('click', limparJogo)

 let linhaT = document.querySelectorłø('.line')
 let linhaTamanho = linhaT.style.width
 let caixa = document.querySelector('#pixel-board')
 caixa.style.width = linhaTamanho