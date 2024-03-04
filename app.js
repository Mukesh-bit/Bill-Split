const billAmountInput = document.querySelector('#bill-amount')
const numberOfPeopleInput = document.querySelector('.number-of-people')
const customTipInput = document.querySelector('.custom-tip-input')

const generateBillBtn = document.querySelector('.generate-bill-btn')
const resetBtn = document.querySelector('.reset-btn')

const tipAmountOutput = document.querySelector('.tip-amount span')
const eachPersonBillOutput = document.querySelector('.each-person-bill span')
const totalBillOutput = document.querySelector('.total-amount span')

const tipContainer = document.querySelector('.tip-container')

let tipPercentage = 0

generateBillBtn.addEventListener('click', () => {
  const billAmount = parseInt(billAmountInput.value)
  const numberOfPeople = parseInt(numberOfPeopleInput.value)

  const tipAmount = billAmount * (tipPercentage/100)

  const totalBill = billAmount + tipAmount

  const eachPersonBill = totalBill / numberOfPeople

  tipAmountOutput.innerText = `₹ ${tipAmount}`

  totalBillOutput.innerText = `₹ ${totalBill}`

  eachPersonBillOutput.innerText = `₹ ${eachPersonBill}`

  resetBtn.disabled = false
})


tipContainer.addEventListener('click', (e) => {
  if(tipContainer.classList.contains('disabled')) return
  if(e.target !== tipContainer) {
    [...tipContainer.children].forEach((tip) => tip.classList.remove('selected'))
    e.target.classList.add('selected')
    tipPercentage = parseInt(e.target.innerText)

    customTipInput.value = ""
  }
})


customTipInput.addEventListener('input', () => {
  tipPercentage = parseInt(customTipInput.value);
  [...tipContainer.children].forEach((tip) => tip.classList.remove('selected'))

})


resetBtn.addEventListener('click', () => {
  tipPercentage = 0
  billAmountInput.value = ""
  customTipInput.value = ""
  numberOfPeopleInput.value = "";
  [...tipContainer.children].forEach((tip) => tip.classList.remove('selected'))
  
  tipAmountOutput.innerText = ""

  totalBillOutput.innerText = ""

  eachPersonBillOutput.innerText = ""

  resetBtn.disabled = true

  customTipInput.disabled = true
  numberOfPeopleInput.disabled = true
  generateBillBtn.disabled = true

  tipContainer.classList.add('disabled')
})


billAmountInput.addEventListener('input', () => {
  if(billAmountInput.value) {
    customTipInput.disabled = false
    numberOfPeopleInput.disabled = false
    tipContainer.classList.remove('disabled')
    
  }else {
    customTipInput.disabled = true
    numberOfPeopleInput.disabled = true
    tipContainer.classList.add('disabled')
  }
})


numberOfPeopleInput.addEventListener('input', () => {
  if(numberOfPeopleInput.value){
    generateBillBtn.disabled = false
  }else {
    generateBillBtn.disabled = true
  }
})