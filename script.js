let cardNum = document.getElementById('card-numbers');
let inputNum = document.getElementById('card-num');
let enteredNumber = document.getElementById('entered-number');
let cardFront = document.getElementById('card-front');

let cardName = document.getElementById('card-name');
let inputName = document.getElementById('card-holder');

let cardDates = document.getElementById('card-dates');
let inputMonth = document.getElementById('date-month');
let inputYear = document.getElementById('date-year');

let cvc = document.getElementById('cvc');
let inputCvc = document.getElementById('input-cvc');

inputNum.addEventListener('input', updateValue);
inputName.addEventListener('input', updateName);
inputMonth.addEventListener('input', updateDates);
inputCvc.addEventListener('input', updateCvc);

let isReplaced = false;
addEventListener("keydown", () => {
  if(!isReplaced) {
  cardFront.replaceChild(enteredNumber, cardNum);
  cardFront.classList.add('card-front__card-numbers');
  isReplaced = true;
  }
});

function updateValue(e) {
  const regex = /.{4}/g;
  enteredNumber.textContent = e.target.value.replace(regex, function (x) {
    return x + " ";
  });
  let maxLength = 15;
  if(e.target.value.length > maxLength) {
    e.target.value = e.target.value.substring(0, maxLength);
  }
}


function updateName(e) {
  cardName.textContent = e.target.value
}

function updateDates(e) {
  cardDates.textContent = e.target.value
}

function updateCvc(e) {
  cvc.textContent = e.target.value
  let maxLength = 3;
  if(e.target.value.length > maxLength) {
    e.target.value = e.target.value.substring(0, maxLength);
  }
}