const inputText = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

//Agregando un evento

checkBtn.addEventListener('click', () => checkWord(inputText.value));

//Creando la funcion

function checkWord(input) {
    if (input == '') {
        alert('Please input a value');
    } else {
        const originalWord = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
        console.log(originalWord);
        let word = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase().split('').reverse().join('');
        console.log(word);
        console.log(originalWord);
        if (word == originalWord ) {
        result.textContent =  `${input} is a palindrome`
        } else {
        result.textContent =  `${input} is not a palindrome`
        }
    }
    
}