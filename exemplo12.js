const pessoa = {
  nome: "Rodrigo",
  sobrenome: "Lima",
  sayFullName: () => {
    console.log(this.nome + ' ' + this.lastName)
  },
  setName() {
    this.nome = "Julio"
  },
  setLastName() {
    this.lastName = "Vieira"
  }
}

pessoa.setName()
pessoa.setLastName()
pessoa.sayFullName()