// criar um array com 12 numeros representando resultado mensal
// mapear o array usando for
// somar todos os numeros desse array

function SomarSalarios() {
    let salarios = [600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600]
    let resultadoSalarios = 0

    for (let i = 0; i < salarios.length; i++) {
        resultadoSalarios += salarios[i]
    }

    return resultadoSalarios
}

module.exports = SomarSalarios