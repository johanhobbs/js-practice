//const
const fullName = 'Johan Hobbs'
console.log(fullName)
//let 
let data = []
console.log(`Data: = ${data}`)
data.push('Johan')
console.log(`Data: = ${data}`)
data.unshift('Hobbs')
console.log(data)
console.log(data[0])
for(let i = 0; i < data.length; i++) {
    console.log(`${i+1}. ${data[i]}`)
}
console.log(typeof(data))
//var

//function

function addTwoNumbers(num1, num2){
    return num1+num2
}

function addThreeNumbers(num1, num2, num3){
    return num1+num2+num3
}

console.log(addTwoNumbers(1,2))
console.log(addThreeNumbers(3,4,5))
// ES6

const addNumbers = (num1, num2) => {num1, num2}