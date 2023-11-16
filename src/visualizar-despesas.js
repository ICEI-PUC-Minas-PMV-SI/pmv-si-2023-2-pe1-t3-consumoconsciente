const expensesMock = [
    {
        "id": 85239,
        "expenseName": "Cafézinho",
        "purchaseDate": "2023-03-02",
        "isEssential": false,
        "cost": 7.50
    },
    {
        "id": 45647,
        "expenseName": "Conta de energia elétrica",
        "purchaseDate": "2023-10-02",
        "isEssential": true,
        "cost": 153.00
    },
    {
        "id": 36451,
        "expenseName": "Tênis da nike",
        "purchaseDate": "2023-04-15",
        "isEssential": false,
        "cost": 450.00
    },
    {
        "id": 36451,
        "expenseName": "Conserto do carro",
        "purchaseDate": "2023-05-24",
        "isEssential": true,
        "cost": 1200.00
    }
]

//************************************************************************************************************ */

//ADICIONAR DISPESAS:

function adicionarDespesa() {
    window.alert('Dispesa adicionada!')
    const nomeDespesa = document.getElementById('expenseName').value;
    const dataCompra = document.getElementById('purchaseDate').value;
    const essencial = document.getElementById('isEssential').value === 'essencial';
    const valor = parseFloat(document.getElementById('cost').value);

    const novaDespesa = {
        id: Date.now(), 
        expenseName: nomeDespesa,
        purchaseDate: dataCompra,
        isEssential: essencial,
        cost: valor
    };

    expensesMock.push(novaDespesa);
    
// localStorage.setItem("expenses", JSON.stringify(expensesMock));
console.log(expensesMock);
}

document.getElementById('addExpenseBtn').addEventListener('click', adicionarDespesa);


console.log(expensesMock);


//************************************************************************************************************ */



window.addEventListener('pageshow', function () {
    localStorage.setItem("expenses", JSON.stringify(expensesMock))
})

// Dropdown logic:
let isDropdownOpen = false
const dropdownContent = document.getElementById('dropdown-content')
document.getElementById('dropdown').addEventListener('click', function () {
    if (!isDropdownOpen) {
        dropdownContent.style.display = "block";
    } else {
        dropdownContent.style.display = "none";
    }
    isDropdownOpen = !isDropdownOpen
})

// Format dates logic:
const formatDate = (date) => {
    const year = date.slice(0, 4)
    const day = date.slice(8, 10)
    const month = date.slice(5, 7)
    return {
        formatedDate: `${day}/${month}/${year}`,
        timestamp: new Date(`${month}/${day}/${year}`).getTime()
    }
}

// Display expenses logic:
const tableContainer = document.getElementById('table-wrapper')
let expenses
let filteredExpenses

window.addEventListener('pageshow', function () {
    expenses = JSON.parse(localStorage.getItem("expenses"))
    tableContainer.innerHTML = mapTableData(expenses);
    filteredExpenses = expenses
})

function mapTableData(expenses) {
    let table = '<table>'
    table += '<tr><th>Nome do Item/Despesa</th><th>Data de Compra</th><th>Classificação</th><th>Custo</th></tr>'
    expenses.forEach(expense => {
        table += `<tr><td>${expense.expenseName}</td><td>${formatDate(expense.purchaseDate).formatedDate}</td><td>${expense.isEssential ? "Essencial" : "Não Essencial"}</td><td class="cell-with-pencil">R$${expense.cost.toFixed(2)} <img src="./images/pencil.svg" alt="pencil"></td></tr>`;
    });
    table += '</table>'

    return table
}

// Filters logic:
const select = document.getElementById('filter-select')
const startDateInput = document.getElementById('start-date')
const endDateInput = document.getElementById('end-date')

const filterElements = [select, startDateInput, endDateInput]

filterElements.forEach(function (element) {
    element.addEventListener("change", function () {
        filteredExpenses = filterExpenses()
        tableContainer.innerHTML = mapTableData(filteredExpenses)
    })
})

const filterExpenses = () => {
    filteredExpenses = expenses
    selectOptions = {
        essencial: filteredExpenses.filter(expense => {
            return expense.isEssential
        }),
        naoEssencial: filteredExpenses.filter(expense => {
            return !expense.isEssential
        }),
        default: filteredExpenses
    }
    filteredExpenses = selectOptions[select.value]

    const startDate = new Date(startDateInput.value).getTime()
    const endDate = new Date(endDateInput.value).getTime()

    if (startDate && endDate) {
        return filteredExpenses.filter(expense => {
            const formatedPurchaseDate = formatDate(expense.purchaseDate).timestamp
            return formatedPurchaseDate >= startDate && formatedPurchaseDate <= endDate
        })
    } else return filteredExpenses

}

//Clear filters logic:

const clearButton = document.getElementById('clear-filters')

clearButton.addEventListener('click', function () {
    select.value = "default"
    startDateInput.value = ""
    endDateInput.value = ""
    tableContainer.innerHTML = mapTableData(expenses)
})
