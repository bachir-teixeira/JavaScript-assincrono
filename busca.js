import {
  pedidos
} from './banco.js' 
const promessa = new Promise( resolve => setTimeout(() => resolve(pedidos),1000))
function exibir(pedidos) {
let div = document.getElementById('valores')
  let mostrar = pedidos.map(p => {
    return `<div id='elements'>
    <p>${p.produto}</p> 
    <p>${p.categoria}</p>
    <p>${p.valor}</p>
    <p>${p.status}</p>
    </di>`
  }).join('')
  div.innerHTML = mostrar
} 
promessa.then( dados => exibir(dados) ) 