const cardName = document.getElementById('cardname')
const nameInput = document.getElementById('chname')
const cardNumber = document.getElementById('cardnum')
const numberInput = document.getElementById('chnum')
const cardMonth = document.getElementById('cardmm')
const monthInput = document.getElementById('cardmon')
const cardYear = document.getElementById('cardyy')
const yearInput = document.getElementById('cardyear')
const cvc = document.getElementById('cardcvc')
const cvcInput = document.getElementById('cvc')

function name(fValue,sValue,num) {
   if (sValue.value.length > num) {
      sValue.value = sValue.value.slice(0,num)
   } else {
    fValue.innerHTML = sValue.value
   }
}

nameInput.addEventListener('input', () => {
    name(cardName, nameInput, 20)
    if (nameInput.value == "") {
        cardName.innerHTML = 'Jane Appleseed'
    }
}) 

numberInput.addEventListener('input', () => {
    numberInput.value = numberInput.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    name(cardNumber, numberInput, 19)
    if (numberInput.value == "") {
        cardNumber.innerHTML = '0000 0000 0000 0000'
    }
}) 

monthInput.addEventListener('input', () => {
    name(cardMonth, monthInput, 2)
   
    if (monthInput.value == "") {
        cardMonth.innerHTML = '00'
    }
}) 

yearInput.addEventListener('input', () => {
    name(cardYear, yearInput, 2)
    
    if (yearInput.value == "") {
        cardYear.innerHTML = '00'
    }
}) 

cvcInput.addEventListener('input', () => {
    name(cvc, cvcInput, 3)
   
    if (cvcInput.value == "") {
        cvc.innerHTML = '000'
    }
}) 
