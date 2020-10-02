// criar variavel para guardar o salario e subtrair 7.5% e retornar o saldo final
const salario = require('./aula06')
function CalculaImpostoDeRenda() {
    let impostoDeRenda = 0.075
    let salarioLiquido = salario() - (salario() * impostoDeRenda)
    console.log(salarioLiquido)
}


//Somar()
CalculaImpostoDeRenda()