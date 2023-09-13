// NOTE This selects the first element with the class selector of "note"
//      This value is assigned to a variable called note

let note = document.querySelector('.note')

// NOTE this logs the contents of the variable called note to console
console.log(note)


// let menu = document.getElementById('menu')
// let items = document.getElementsByClassName('item')

// let data = [].map.call(items, item => item.textContent)



// let btn = document.getElementById('btnCount')
// btn.addEventListener('click', () => {
//     let hTwoHeader = document.getElementsByTagName('h2')
//     alert(`The number of h2 tags is: ${hTwoHeader.length}`)
// })


// NOTE

// const p = document.getElementById('message')
// console.log(p);

// let btn = document.getElementById('btnRadio')

// btn.addEventListener('click', () => {
//     let languages = document.getElementsByName('language')
//     languages.forEach((language) => {
//         if(language.checked){
//             output.innerText = `You code with ${language.value}`
//         }
//     })
// })