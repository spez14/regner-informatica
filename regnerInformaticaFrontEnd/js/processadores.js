const formulario = document.querySelector("form")

const Imodelo = document.querySelector(".modelo")
const Idescricao = document.querySelector(".descricao")
const Isoquete = document.querySelector(".soquete")
const Igeracao = document.querySelector(".geracao")
const Ifabricante = document.querySelector(".fabricante")
const Ifrequencia = document.querySelector(".frequencia")
const IestoqueAtual = document.querySelector(".estoqueAtual")
const IestoqueMaximo = document.querySelector(".estoqueMaximo")

function cadastrar() {

  fetch("http://localhost:8080/pecas/processador", 
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({ 
      modelo: Imodelo.value,
      descricao: Idescricao.value,
      soquete: Isoquete.value,
      geracao: Igeracao.value,
      fabricante: Ifabricante.value,
      frequencia: Ifrequencia.value,
      estoqueAtual: IestoqueAtual.value,
      estoqueMaximo: IestoqueMaximo.value
     })
  })
  .then(function (res) { console.log(res) })
  .catch(function (res) { console.log(res) })
}

function limpar() {
    Imodelo.value = ""
    Idescricao.value = ""
    Isoquete.value = ""
    Igeracao.value = ""
    Ifabricante.value = ""
    Ifrequencia.value = ""
    IestoqueAtual.value = ""
    IestoqueMaximo.value = ""
}

formulario.addEventListener('submit', function (event) {
  event.preventDefault()

  cadastrar()
  limpar()
})