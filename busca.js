import {
  pedidos
} from './dados.js' // tem que importar

const Dados = new Promise(resolve => resolve(pedidos))

function exibir(dados) {
  let products = document.getElementById('produto')
  let category = document.getElementById('categoria')
  let value = document.getElementById('valor')

  let stats = document.getElementById('status')
  // pega o primeiro pedido
  for (let c of dados) {
    products.innerText += `${c.produto} \n`
    value.innerText += `${c.valor} \n`
    category.innerText += `${c.categoria} \n`
    stats.innerText += `${c.status} \n`
  }
}

Dados.then(dados => exibir(dados))