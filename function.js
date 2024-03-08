const form = document.querySelector('#form-atividade')
const atividades = []
const notas = []

const imgAprovado = '<img src="images/HP-Ideas/reliquias.png" />'
const imgReprovado = '<img src="images/HP-Ideas/marca.png" />'
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'

const notaMinima = parseFloat(prompt('Digite a nota mínima'))

let linhas = ''

form.addEventListener('submit', function (e) {
    e.preventDefault()

    inserirAtividade()
    atualizaTabela()
    atualizaMediaFinal()
})

function inserirAtividade() {
    const inputNomeAtividade = document.querySelector('.nome-atividade')
    const inputNotaAtividade = document.querySelector('.nota-atividade')

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    }
    else {
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))

        let linha = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += '</tr>'

        linhas += linha
    }

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal() {
    mediaFinal = parseInt(calculaMediaFinal())

    document.querySelector('.media-final-valor').innerHTML = mediaFinal
    document.querySelector('.media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado

}

function calculaMediaFinal() {
    let somaNotas = 0
    for (i = 0; i < notas.length; i++) {
        somaNotas += notas[i]
    }

    return somaNotas / notas.length
}