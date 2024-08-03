function clicou() {

    const min = Math.ceil( document.querySelector(".min-input").value)
    const max = Math.floor( document.querySelector(".max-input").value)
   let resultado = Math.floor(Math.random()*(max-min +1))+min
   alert(resultado)

    console.log(min, max)
}