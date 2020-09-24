let nota1 = 10
let nota2 = 10
let nota3 = 10
let nota4 = 10
let quantidadeNotas = 4
let media = (nota1 + nota2 + nota3 + nota4) / quantidadeNotas

console.log(`A média do aluno é: ${media}`)
if (media >= 7) {
    if (media == 10) {
        console.log('O Aluno foi aprovado com perfeição!')
    }
    else
    console.log('O aluno esta aprovado')
}
else if (media >= 5) {
    console.log('O aluno esta de recuperação')
}
else if (media < 5 && media >= 0) {
    console.log('O aluno está reprovado')
}
else {
    console.log('ERRO INTERNO!!!')
}