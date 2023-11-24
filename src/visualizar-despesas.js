const expensesMock = [
    {
        "id": 45647,
        "expenseName": "Conta de energia elétrica",
        "purchaseDate": "2023-10-02",
        "isEssential": true,
        "cost": 153.00,
        "userId": "1"
    },
    {
        "id": 85239,
        "expenseName": "Cafézinho",
        "purchaseDate": "2023-03-02",
        "isEssential": false,
        "cost": 7.50,
        "userId": "1"
    },
    {
        "id": 36451,
        "expenseName": "Tênis da nike",
        "purchaseDate": "2023-04-15",
        "isEssential": false,
        "cost": 450.00,
        "userId": "2"
    },
    {
        "id": 36451,
        "expenseName": "Conserto do carro",
        "purchaseDate": "2023-06-22",
        "isEssential": true,
        "cost": 1200.00,
        "userId": "2"
    },
    {
        "id": 45622,
        "expenseName": "Jantar com a família",
        "purchaseDate": "2023-08-07",
        "isEssential": true,
        "cost": 220.00,
        "userId": "1"
    },
    {
        "id": 85211,
        "expenseName": "Video game novo",
        "purchaseDate": "2023-07-09",
        "isEssential": false,
        "cost": 259.99,
        "userId": "1"
    },
    {
        "id": 36478,
        "expenseName": "Presente de aniversário",
        "purchaseDate": "2023-11-12",
        "isEssential": true,
        "cost": 150.99,
        "userId": "2"
    },
    {
        "id": 36452,
        "expenseName": "Compras de mercado",
        "purchaseDate": "2023-01-31",
        "isEssential": true,
        "cost": 633.00,
        "userId": "2"
    }
]

//************************************************************************************************************ */

//ADICIONAR DISPESAS:

const addExpenseBtn = document.getElementById('addExpenseBtn');

addExpenseBtn && addExpenseBtn.addEventListener('click', function () {
    const expenseNameInput = document.getElementById('expenseName');
    const purchaseDateInput = document.getElementById('purchaseDate');
    const isEssentialSelect = document.getElementById('isEssential');
    const costInput = document.getElementById('cost');


    const newExpense = {
        "id": Math.floor(Math.random() * 100000),
        "expenseName": expenseNameInput.value,
        "purchaseDate": purchaseDateInput.value,
        "isEssential": isEssentialSelect.value === 'essencial',
        "cost": parseFloat(costInput.value)
    };


    expensesMock.push(newExpense);

    expenseNameInput.value = '';
    purchaseDateInput.value = '';
    isEssentialSelect.value = 'essencial';
    costInput.value = '';

    console.log(expensesMock);
});


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
const user = JSON.parse(localStorage.getItem("userlogado"))
let expenses
let filteredExpenses
const total = document.getElementById('total-value')

window.addEventListener('pageshow', function () {
    expenses = JSON.parse(localStorage.getItem("expenses"))
    expenses = expenses.filter(expense => {
        return expense.userId === user.id
    })
    if (tableContainer) {
        tableContainer.innerHTML = mapTableData(expenses);
        filteredExpenses = expenses
        total.innerHTML = `Total: R$${calculateCosts(filteredExpenses).replace(".", ",")}`
    }
})

function mapTableData(expenses) {
    let table = '<table>'
    table += '<tr><th>Nome do Item/Despesa</th><th>Data de Compra</th><th>Classificação</th><th>Custo</th></tr>'
    expenses.forEach(expense => {
        expense.isEssential ?
            table += `<tr><td>${expense.expenseName}</td><td>${formatDate(expense.purchaseDate).formatedDate}</td><td>Essencial</td><td class="cell-with-pencil"><div>R$${expense.cost.toFixed(2).replace(".", ",")} <img src="./images/pencil.svg" alt="pencil"></div></td></tr>` :
            table += `<tr class="non-essetial-row"><td>${expense.expenseName}</td><td>${formatDate(expense.purchaseDate).formatedDate}</td><td class="non-essential"><div>Não Essencial <img src="./images/wasted-money.png" alt="burning-money"></div></td><td class="cell-with-pencil"><div>R$${expense.cost.toFixed(2).replace(".", ",")} <img src="./images/pencil.svg" alt="pencil"></div></td></tr>`
    });
    table += '</table>'

    return table
}

// Filters logic:
const select = document.getElementById('filter-select')
const startDateInput = document.getElementById('start-date')
const endDateInput = document.getElementById('end-date')

const filterElements = [select, startDateInput, endDateInput]
filterElements[0] && filterElements.forEach(function (element) {
    element.addEventListener("change", function () {
        filteredExpenses = filterExpenses()
        tableContainer.innerHTML = mapTableData(filteredExpenses)
        total.innerHTML = `Total: R$${calculateCosts(filteredExpenses)}`
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

// Clear filters logic:
const clearButton = document.getElementById('clear-filters')

clearButton && clearButton.addEventListener('click', function () {
    select.value = "default"
    startDateInput.value = ""
    endDateInput.value = ""
    tableContainer.innerHTML = mapTableData(expenses)
})

// Calculte total cost:
const calculateCosts = (filteredExpenses) => {
    let total = 0
    if (filteredExpenses) {
        for (let i = 0; i < filteredExpenses.length; i++) {
            total += filteredExpenses[i].cost
        }
    }
    return total.toFixed(2)
}

// Save expenses total:
const simulationButton = document.getElementById('simulation-button')
simulationButton && simulationButton.addEventListener('click', function () {
    localStorage.removeItem("filteredItems")
    const removedEssentials = filteredExpenses.filter(expense => {
        return !expense.isEssential
    })
    localStorage.setItem("filteredItems", calculateCosts(removedEssentials))
})
