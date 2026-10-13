const {
  paises,
  pessoas
} = require('./banco.js')

const contries = new Promise(resolve => setTimeout(() => resolve(paises), 1000))

const people = new Promise(resolve => setTimeout(() => resolve(pessoas), 2000))


Promise.all([contries, people])
.then(([Paises, Pessoas]) => exibir(Paises, Pessoas))


function exibir(paises, pessoas) {
  for (let c of paises) {
    for (let i in c) {
      console.log(i, c[i])
    } 
    console.log('=========================')
  }
}