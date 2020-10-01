// criar um array com 12 numeros representando resultado mensal
// mapear o array usando for
// somar todos os numeros desse array
function Somar() {
    let salarios = [600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600]
    let resultadoSalarios = 0

    for (let i = 0; i < salarios.length; i++) {
        resultadoSalarios += salarios[i]
    }  
    console.log(resultadoSalarios)
}


// criar a funcao subtrair com base na somar
function Subtrair() {
    
}


Somar()