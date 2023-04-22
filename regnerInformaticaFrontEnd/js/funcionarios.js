const formulario = document.querySelector("form")

const Inome = document.querySelector(".nome")
const Isobrenome = document.querySelector(".sobrenome")
const IdtNascimento = document.querySelector(".dtNascimento")
const Icpf = document.querySelector(".cpf")
const Irg = document.querySelector(".rg")
const Isetor = document.querySelector(".setor")
const Iemail = document.querySelector(".email")
const Isenha = document.querySelector(".senha")

function cadastrar() {

  fetch("http://localhost:8080/funcionarios", 
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({ 
      nome: Inome.value,
      sobrenome: Isobrenome.value,
      dtNascimento: IdtNascimento.value,
      cpf: Icpf.value,
      rg: Irg.value,
      setor: Isetor.value,
      email: Iemail.value,
      senha: Isenha.value
     })
  })
  .then(function (res) { console.log(res) })
  .catch(function (res) { console.log(res) })
}

function limpar() {
    Inome.value = ""
    Isobrenome.value = ""
    IdtNascimento.value = ""
    Icpf.value = ""
    Irg.value = ""
    Isetor.value = ""
    Iemail.value = ""
    Isenha.value = ""
}

formulario.addEventListener('submit', function (event) {
  event.preventDefault()

  // const dados = {
  //   nome: Inome.value,
  //   sobrenome: Isobrenome.value,
  //   dtNascimento: IdtNascimento.value,
  //   cpf: Icpf.value,
  //   rg: Irg.value,
  //   setor: Isetor.value,
  //   email: Iemail.value,
  //   senha: Isenha.value
  // }

  // console.log(dados)

  cadastrar()
  limpar()
})