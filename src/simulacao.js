// Carregar total da página de despesas

// Puxar valor total das Despesas
let valor = JSON.parse(localStorage.getItem("filteredItems"))

var valor2 = valor.toFixed(2)

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

window.addEventListener('pageshow', function () {

    const txth1 = document.getElementById('valor-h1')
    console.log(txth1)
    txth1.innerHTML = "R$ " + valor2

    const td1 = document.getElementById('tb-linha-pp3')
    console.log(td1)
    td1.innerHTML = "R$ " + pp3arr

    const td2 = document.getElementById('tb-linha-pp6')
    console.log(td2)
    td2.innerHTML = "R$ " + pp6arr

    const td3 = document.getElementById('tb-linha-pp12')
    console.log(td3)
    td3.innerHTML = "R$ " + pp12arr

    const td4 = document.getElementById('tb-linha-cdi3')
    console.log(td4)
    td4.innerHTML = "R$ " + cdi3arr

    const td5 = document.getElementById('tb-linha-cdi6')
    console.log(td5)
    td5.innerHTML = "R$ " + cdi6arr

    const td6 = document.getElementById('tb-linha-cdi12')
    console.log(td6)
    td6.innerHTML = "R$ " + cdi12arr

    const td7 = document.getElementById('tb-linha-pre3')
    console.log(td7)
    td7.innerHTML = "R$ " + pre3arr

    const td8 = document.getElementById('tb-linha-pre6')
    console.log(td8)
    td8.innerHTML = "R$ " + pre6arr

    const td9 = document.getElementById('tb-linha-pre12')
    console.log(td9)
    td9.innerHTML = "R$ " + pre12arr

})



















