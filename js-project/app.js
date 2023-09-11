const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
const showMillionairesBtn = document.getElementById('show-millionaires')
const sortBtn = document.getElementById('sort')
const calculateWealthBtn = document.getElementById('calculate-wealth')

// In Javascript, an array is represented by square brackets
// Set up a data store using JS array
let data = []

// Random User function
async function getRandomUser() {
    const res = await fetch('http://randomuser.me/api')
    const data = await res.json()

    const user = data.results[0]

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 10000000) //random number function
    }
}

// Sort users by wealth
function sortByRichest(){
    data.sort((a, b) => b.money - a.money)
}

// updateDOM()
function updateDOM(){
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>'
}

// Event listener
addUserBtn.addEventListener('click', getRandomUser)
sortBtn.addEventListener('click', sortByRichest)
