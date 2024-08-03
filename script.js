function clicou() {

    const min = Math.ceil(document.querySelector(".min-input").value)
    const max = Math.floor(document.querySelector(".max-input").value)

    if (max >min) {

        let resultado = Math.floor(Math.random() * (max - min + 1)) + min
    alert(resultado)
       
    }
    else { 
        alert('O Valor maximo tem que ser maior que o valor minimo')


    }
   
}


