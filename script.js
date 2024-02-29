const cardNum = document.getElementById('card-numbers');
const inputNum = document.getElementById('card-num');
const errorMessageNum = document.getElementById('error-message-card-num');

const cardName = document.getElementById('card-name');
const inputName = document.getElementById('card-holder');
const errorMessageName = document.getElementById('error-message-card-name');

const cardMonth = document.getElementById('card-date-month');
const inputMonth = document.getElementById('date-month');
const cardYear = document.getElementById('card-date-year');
const inputYear = document.getElementById('date-year');
const errorMessageBottom = document.getElementById('error-message-bottom');

const cvc = document.getElementById('cvc');
const inputCvc = document.getElementById('input-cvc');

const button = document.getElementById('button');

inputNum.addEventListener('input', updateNum);
inputName.addEventListener('input', updateName);
inputMonth.addEventListener('input', updateMonth);
inputYear.addEventListener('input', updateYear);
inputCvc.addEventListener('input', updateCvc);


let defaultNum = cardNum.textContent;
let defaultName = cardName.textContent;
let defaultMonth = cardMonth.textContent;
let defaultYear = cardYear.textContent;
let defaultCvc = cvc.textContent;

let errorNum;
let errorName;
let errorMonth;
let errorYear;
let errorCvc;

const errorTextNum = 'Wrong format, numbers only';
const errorTextName = 'Wrong format, letters only';

const errorChecks = [errorNum, errorName, errorMonth, errorYear, errorCvc];

function updateNum(e) {
  const regex = /.{4}/g;
  if (isNaN(e.target.value)) {
    checkLength(e, 16);
    cardNum.textContent = e.target.value.replace(regex, function (x) {
      return x + " ";
    })
    errorMessages(errorMessageNum, inputNum, errorTextNum);
    errorChecks[0] = true;
  }
  else {
    checkLength(e, 16);
    cardNum.textContent = e.target.value.replace(regex, function (x) {
      return x + " ";
    })
    errorMessages(errorMessageNum, inputNum, '');
    errorChecks[0] = true;

  }
  if (e.target.value == "") {
    cardNum.textContent = defaultNum;
  }

}

function updateName(e) {
  const regex = /[0-9]/g;
  if (regex.test(e.target.value)) {
    checkLength(e, 20);
    cardName.textContent = e.target.value;
    errorMessages(errorMessageName, inputName, errorTextName);
    errorChecks[1] = true;
  }
  else {
    checkLength(e, 20);
    cardName.textContent = e.target.value;
    errorMessages(errorMessageName, inputName, '');
    errorChecks[1] = false;
  }
  if (e.target.value == "") {
    cardName.textContent = defaultName;
  }

}

function updateMonth(e) {
  if (isNaN(e.target.value)) {
    checkLength(e, 2);
    cardMonth.textContent = e.target.value;
    errorMessages(errorMessageBottom, inputMonth, errorTextNum);
    errorChecks[2] = true;
  }
  else {
    checkLength(e, 2);
    cardMonth.textContent = e.target.value;
    errorMessages(errorMessageBottom, inputMonth, '');
    errorChecks[2] = false;
  }
  if (e.target.value == "") {
    cardMonth.textContent = defaultMonth;
  }

}

function updateYear(e) {
  if (isNaN(e.target.value)) {
    checkLength(e, 2);
    cardYear.textContent = e.target.value;
    errorMessages(errorMessageBottom, inputYear, errorTextNum);
    errorChecks[3] = true;
  }
  else {
    checkLength(e, 2);
    cardYear.textContent = e.target.value;
    errorMessages(errorMessageBottom, inputYear, '');
    errorChecks[3] = false;
  }
  if (e.target.value == "") {
    cardYear.textContent = defaultYear;
  }
}

function updateCvc(e) {
  if (isNaN(e.target.value)) {
    checkLength(e, 3);
    cvc.textContent = e.target.value;
    errorMessages(errorMessageBottom, inputCvc, errorTextNum);
    errorChecks[4] = true;
  }
  else {
    checkLength(e, 3);
    cvc.textContent = e.target.value;
    errorMessages(errorMessageBottom, inputCvc, '');
    errorChecks[4] = false;

  }
  if (e.target.value == "") {
    cvc.textContent = defaultCvc;
  }

}

function checkLength(e, maxLength) {
  if (e.target.value.length > maxLength) {
    e.target.value = e.target.value.substring(0, maxLength);
  }
}

button.addEventListener('click', (event) => {
  event.preventDefault();
  const cardForm = document.getElementById('card-form');
  for(let i = 0; i < errorChecks.length; i++) {
  if (errorChecks[i] == false) {
    cardForm.style.display = 'none';
  } else {
    console.log('No');
  }
}
});
function errorMessages(errorElement, inputField, errorMessage) {
  errorElement.textContent = errorMessage;
  errorElement.style.color = 'red';
  inputField.style.borderColor = 'red';
  errorElement.style.display = 'flex';
  errorElement.style.justifyContent  = 'center';
}