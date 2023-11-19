// Carregar total da página de despesas

// Puxar valor total das Despesas
let valor = JSON.parse(localStorage.getItem("filteredItems"))

// Calculos

// Poupança

var pp3 = valor * Math.pow(1.005, 3)
var pp6 = valor * Math.pow(1.005, 6)
var pp12 = valor * Math.pow(1.005, 12)

// Arredondando para 2 casas decimais

var pp3arr = pp3.toFixed(2)
var pp6arr = pp6.toFixed(2)
var pp12arr = pp12.toFixed(2)

// CDI

var cdi3 = valor * Math.pow(1.009601, 3)
var cdi6 = valor * Math.pow(1.009601, 6)
var cdi12 = valor * Math.pow(1.009601, 12)

// Arredondando para 2 casas decimais

var cdi3arr = cdi3.toFixed(2)
var cdi6arr = cdi6.toFixed(2)
var cdi12arr = cdi12.toFixed(2)

// Prefixado

var pre3 = valor * Math.pow(1.008583, 3)
var pre6 = valor * Math.pow(1.008583, 6)
var pre12 = valor * Math.pow(1.008583, 12)

// Arredondando para 2 casas decimais

var pre3arr = pre3.toFixed(2)
var pre6arr = pre6.toFixed(2)
var pre12arr = pre12.toFixed(2)

// Alterando valores  HTML

document.querySelector('#tb-linha-pp3').innerHTML = "R$" + pp3arr



















