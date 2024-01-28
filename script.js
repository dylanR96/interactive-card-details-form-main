let cardNum = document.getElementById('card-numbers');
let inputNum = document.getElementById('card-num');
let container = document.getElementById('container');
let errorMessageNum = document.getElementById('error-message-card-num');

let cardName = document.getElementById('card-name');
let inputName = document.getElementById('card-holder');
let cardFrontBottom = document.getElementById('card-front-bottom');
let errorMessageName = document.getElementById('error-message-card-name');

let cardMonth = document.getElementById('card-date-month');
let inputMonth = document.getElementById('date-month');
let cardYear = document.getElementById('card-date-year');
let inputYear = document.getElementById('date-year');
let errorMessageDates = document.getElementById('error-message-dates');

let cvc = document.getElementById('cvc');
let inputCvc = document.getElementById('input-cvc');
let errorMessageCvc = document.getElementById('error-message-cvc');

inputNum.addEventListener('input', updateNum);
inputName.addEventListener('input', updateName);
inputMonth.addEventListener('input', updateMonth);
inputYear.addEventListener('input', updateYear);
inputCvc.addEventListener('input', updateCvc);

let original = cardNum.textContent;
let original2 = cardName.textContent;
let original3 = cardMonth.textContent;
let original4 = cardYear.textContent;
let original5 = cvc.textContent;

function updateNum(e) {
  const regex = /.{4}/g;
  if(isNaN(e.target.value)) {
    checkLength(e, 15);
    cardNum.textContent = e.target.value.replace(regex, function (x) {
      return x + " ";
    })
    errorMessages(errorMessageNum, inputNum, 'Wrong format, numbers only', 'red', '1px solid red');
    }
    else {
      checkLength(e, 16);
      cardNum.textContent = e.target.value.replace(regex, function (x) {
        return x + " ";
      })
      errorMessages(errorMessageNum, inputNum, '', '', '');
      
    }
    if(e.target.value == "") {
      cardNum.textContent = original;
    }
  
}

function updateName(e) {
  const regex = /[0-9]/g;
  if(regex.test(e.target.value)) {
    checkLength(e, 20);
    cardName.textContent = e.target.value;
    errorMessages(errorMessageName, inputName, 'Wrong format, letters only', 'red', '1px solid red');
  }
  else {
    checkLength(e, 20);
    cardName.textContent = e.target.value;
    errorMessages(errorMessageName, inputName, '', '', '');
  }
  if(e.target.value == "") {
    cardName.textContent = original2;
  }
  
}

function updateMonth(e) {
  if(isNaN(e.target.value)) {
    checkLength(e, 2);
    cardMonth.textContent = e.target.value;
    errorMessages(errorMessageDates, inputMonth, 'Wrong format, numbers only', 'red', '1px solid red');
    }
    else {
      checkLength(e, 2);
      cardMonth.textContent = e.target.value;
      errorMessages(errorMessageDates, inputMonth, '', '', '');
    }
    if(e.target.value == "") {
      cardMonth.textContent = original3;
    }
  
}

function updateYear(e) {
  if(isNaN(e.target.value)) {
    checkLength(e, 2);
    cardYear.textContent = e.target.value;
    errorMessages(errorMessageDates, inputYear, 'Wrong format, numbers only', 'red', '1px solid red');
    }
    else {
      checkLength(e, 2);
      cardYear.textContent = e.target.value;
      errorMessages(errorMessageDates, inputYear, '', '', '');
    }
    if(e.target.value == "") {
      cardYear.textContent = original4;
    } 
}

function updateCvc(e) {
  if(isNaN(e.target.value)) {
    checkLength(e, 3);
    cvc.textContent = e.target.value;
    errorMessages(errorMessageCvc, inputCvc, 'Wrong format, numbers only', 'red', '1px solid red');
    }
    else {
      checkLength(e, 3);
      cvc.textContent = e.target.value;
      errorMessages(errorMessageCvc, inputCvc, '', '', '');
      
    }
    if(e.target.value == "") {
      cvc.textContent = original5;
    }
  
}

function checkLength(e, maxLength) {
  if(e.target.value.length > maxLength) {
    e.target.value = e.target.value.substring(0, maxLength);
  }
}

function errorMessages(errorContainer, error, errorMessage, color, border) {
  errorContainer.textContent = errorMessage;
  errorContainer.style.color = color;
  error.style.border = border;
}