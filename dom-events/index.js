let getsiblings = function(e){
    let siblings = []

    if(!e.parentNode) {
        return siblings
    }

    let sibling = e.parentNode.firstChild

    while(sibling) {
        if(sibling.nodeType == 1 && sibling !== e){
            siblings.push(sibling)
        }
        sibling = sibling.nextSibling
    }
    return siblings
}

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