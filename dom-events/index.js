// NOTE
/*
If the parenthesis after document.getElementById are empty, it will return null
*/
const p = document.getElementById('message')
console.log(p);

let btn = document.getElementById('btnRadio')

btn.addEventListener('click', () => {
    let languages = document.getElementsByName('language')
    languages.forEach((language) => {
        if(language.checked){
            output.innerText = `You code with ${language.value}`
        }
    })
})