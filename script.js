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

const cardForm = document.getElementById('card-form');
const btnConfirm = document.getElementById('btn-confirm');
const btnContinue = document.getElementById('btn-continue');

const errorMessageForm = document.getElementById('error-message-info');
const completedState = document.getElementById('completed-state');

inputNum.addEventListener('input', updateNum);
inputName.addEventListener('input', updateName);
inputMonth.addEventListener('input', updateMonth);
inputYear.addEventListener('input', updateYear);
inputCvc.addEventListener('input', updateCvc);

const inputFields = [inputNum, inputName, inputMonth, inputYear, inputCvc];

let defaultNum = cardNum.textContent;
let defaultName = cardName.textContent;
let defaultMonth = cardMonth.textContent;
let defaultYear = cardYear.textContent;
let defaultCvc = cvc.textContent;

const defaults = [defaultNum, defaultName, defaultMonth, defaultYear, defaultCvc];

const defaultSpaces = [cardNum, cardName, cardMonth, cardYear, cvc];

let errorNum;
let errorName;
let errorMonth;
let errorYear;
let errorCvc;

let currentTime = new Date();
let currentYear = currentTime.getFullYear() + 1;
let currentMonth = currentTime.getMonth() + 1;
currentYear = currentYear.toString().substr(-2);
const errorTextNum = 'Wrong format, numbers only.';
const errorTextName = 'Wrong format, letters only.';
const errorTextYear = 'Please enter a valid year. Can not be current year.';
const errotTextMonth = 'Please enter a valid month.';

const errorChecks = [errorNum, errorName, errorMonth, errorYear, errorCvc];
const trueValues = (currentValue) => currentValue == true;

function updateName(e) {
  const regex = /[0-9]/g;
  checkLength(e, 20);
  if (regex.test(e.target.value)) {
    cardName.textContent = e.target.value;
    errorMessages(errorMessageName, inputName, errorTextName, 'red');
    errorChecks[1] = false;
  }
  else {
    cardName.textContent = e.target.value;
    errorMessages(errorMessageName, inputName, '', '');
    errorChecks[1] = true;
  }
  if (e.target.value == "") {
    cardName.textContent = defaultName;
    errorChecks[1] = false;
  }

}


function updateNum(e) {
  const regex = /.{4}/g;
  checkLength(e, 16);
  if (isNaN(e.target.value)) {
    errorMessages(errorMessageNum, inputNum, errorTextNum, 'red');
    errorChecks[0] = false;
  } else if (e.target.value.length < 16) {
    checkLength(e, 16);
    errorChecks[0] = false;
  }
  else {
    errorMessages(errorMessageNum, inputNum, '', '');
    errorChecks[0] = true;
  }
  cardNum.textContent = e.target.value.replace(regex, function (x) {
    return x + " ";
  })
  if (e.target.value == "") {
    cardNum.textContent = defaultNum;
  }

}

function updateMonth(e) {
  checkLength(e, 2);
  if (isNaN(e.target.value)) {
    cardMonth.textContent = e.target.value;
    errorMessages(errorMessageBottom, inputMonth, errorTextNum, 'red');
    errorChecks[2] = false;
  } else if (parseInt(e.target.value, 10) > 12) {
    cardMonth.textContent = e.target.value;
    errorMessages(errorMessageBottom, inputMonth, errotTextMonth, 'red');
    errorChecks[0] = false;
  }
  else {
    cardMonth.textContent = e.target.value;
    errorMessages(errorMessageBottom, inputMonth, '', '');
    errorChecks[2] = true;
  }
  if (e.target.value == "") {
    cardMonth.textContent = defaultMonth;
  }
}

function updateYear(e) {
  checkLength(e, 2);
  if (isNaN(e.target.value)) {
    cardYear.textContent = e.target.value;
    errorMessages(errorMessageBottom, inputYear, errorTextNum, 'red');
    errorChecks[3] = false;
  } else if (parseInt(e.target.value, 10) < currentYear) {
    cardYear.textContent = e.target.value;
    errorMessages(errorMessageBottom, inputYear, errorTextYear, 'red');
    errorChecks[0] = false;
  } else {
    cardYear.textContent = e.target.value;
    errorMessages(errorMessageBottom, inputYear, '', '');
    errorChecks[3] = true;
  }
  if (e.target.value == "") {
    cardYear.textContent = defaultYear;
  }
}

function updateCvc(e) {
  checkLength(e, 3);
  if (isNaN(e.target.value)) {
    cvc.textContent = e.target.value;
    errorMessages(errorMessageBottom, inputCvc, errorTextNum, 'red');
    errorChecks[4] = false;
  }
  else {
    cvc.textContent = e.target.value;
    errorMessages(errorMessageBottom, inputCvc, '', '');
    inputCvc.style.borderColor = '';
    errorChecks[4] = true;

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

btnConfirm.addEventListener('click', (e) => {
  e.preventDefault();
  for (let i = 0; i < errorChecks.length; i++) {
    if (errorChecks.every(trueValues)) {
      errorMessageForm.textContent = '';
      cardForm.style.display = 'none';
      completedState.style.display = 'flex'
    } else {
      errorMessageForm.textContent = 'All fields must be filled with valid info.'
      errorMessageForm.style.color = 'Red';
    }
  }
});

btnContinue.addEventListener('click', (e) => {
  e.preventDefault();
  completedState.style.display = 'none'
  cardForm.style.display = 'flex';
  for(let i = 0; i < errorChecks.length; i++) {
    errorChecks[i] = false;
  }
  for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].value = "";
    defaultSpaces[i].textContent = defaults[i];
  }
})

function errorMessages(errorElement, inputField, errorMessage, colour) {
  errorElement.textContent = errorMessage;
  errorElement.style.color = colour;
  inputField.style.borderColor = colour;
  errorElement.style.display = 'flex';
  errorElement.style.justifyContent = 'center';
}