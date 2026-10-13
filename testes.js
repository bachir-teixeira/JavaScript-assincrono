const {
  paises,
  pessoas
} = require('./banco.js')

const contries = new Promise(resolve => setTimeout(() => resolve(paises), 1000))

const people = new Promise(resolve => setTimeout(() => resolve(pessoas), 2000))


Promise.race([contries, people])
.then(primeiro => exibir(primeiro)) 

function exibir(first){
  console.log(first)
}