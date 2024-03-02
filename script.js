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
const errorTextZeros = 'Can not be equal to or less than 0';
const errorTextYear = 'Please enter a valid year.';
const errotTextMonth = 'Please enter a valid month.';

const errorChecks = [errorName, errorNum, errorMonth, errorYear, errorCvc];
const trueValues = (currentValue) => currentValue == true;

function updateName(e) {
  const regex = /[^a-zA-Z ]/g;
  checkLength(e, 20);
  cardName.textContent = e.target.value;
  let errorParams = {
    errorElement: errorMessageName,
    inputField: inputName,
    errorMessage: 'Placeholder',
    colour: '',
    visibility: 'hidden'
  };

  if (regex.test(e.target.value)) {
    errorParams.errorMessage = errorTextName;
    errorParams.colour = 'hsl(0, 100%, 66%)';
    errorParams.visibility = 'visible';
    errorChecks[0] = false;
  }
  else {
    errorParams.errorMessage = 'Placeholder';
    errorParams.colour = '';
    errorParams.visibility = 'hidden';
    errorChecks[0] = true;
  }
  if (e.target.value == "") {
    cardName.textContent = defaultName;
    errorChecks[0] = false;
  }
  errorMessages(errorParams);
}

function updateNum(e) {
  const regex = /.{4}/g;
  checkLength(e, 16);
  cardNum.textContent = e.target.value.replace(regex, function (x) {
    return x + " ";
  })

  let errorParams = {
    errorElement: errorMessageNum,
    inputField: inputNum,
    errorMessage: 'Placeholder',
    colour: '',
    visibility: 'hidden'
  };

  if (isNaN(e.target.value)) {
    errorParams.errorMessage = errorTextNum;
    errorParams.colour = 'hsl(0, 100%, 66%)';
    errorParams.visibility = 'visible';
    errorChecks[1] = false;
  } else if (e.target.value.length < 16) {
    errorParams.errorMessage = 'Placeholder';
    errorParams.colour = '';
    errorParams.visibility = 'hidden';
    errorChecks[1] = false;
  } else if (e.target.value <= 0) {
    errorParams.errorMessage = errorTextZeros;
    errorParams.colour = 'hsl(0, 100%, 66%)';
    errorParams.visibility = 'visible';
    errorChecks[1] = false;
  } else {
    errorParams.errorMessage = 'Placeholder';
    errorParams.colour = '';
    errorParams.visibility = 'hidden';
    errorChecks[1] = true;
  }
  if (e.target.value == "") {
    cardNum.textContent = defaultNum;
    errorChecks[1] = false;
  }
  errorMessages(errorParams);
}

function updateMonth(e) {
  checkLength(e, 2);
  cardMonth.textContent = e.target.value;

  let errorParams = {
    errorElement: errorMessageBottom,
    inputField: inputMonth,
    errorMessage: 'Placeholder',
    colour: '',
    visibility: 'hidden'
  };

  if (isNaN(e.target.value)) {
    errorParams.errorMessage = errorTextNum;
    errorParams.colour = 'hsl(0, 100%, 66%)';
    errorParams.visibility = 'visible';
    errorChecks[2] = false;
  } else if (parseInt(e.target.value, 10) > 12) {
    errorParams.errorMessage = errotTextMonth;
    errorParams.colour = 'hsl(0, 100%, 66%)';
    errorParams.visibility = 'visible';
    errorChecks[2] = false;
  } else if (e.target.value <= 0) {
    errorParams.errorMessage = errorTextZeros;
    errorParams.colour = 'hsl(0, 100%, 66%)';
    errorParams.visibility = 'visible';
    errorChecks[2] = false;
  } else {
    errorParams.errorMessage = 'Placeholder';
    errorParams.colour = '';
    errorParams.visibility = 'hidden';
    errorChecks[2] = true;
  }
  if (e.target.value == "") {
    errorParams.errorMessage = 'Placeholder';
    errorParams.colour = '';
    errorParams.visibility = 'hidden';
    cardMonth.textContent = defaultMonth;
    errorChecks[2] = false;
  }
  errorMessages(errorParams);
}

function updateYear(e) {
  checkLength(e, 2);
  cardYear.textContent = e.target.value;

  let errorParams = {
    errorElement: errorMessageBottom,
    inputField: inputYear,
    errorMessage: 'Placeholder',
    colour: '',
    visibility: 'hidden'
  };

  if (isNaN(e.target.value)) {
    errorParams.errorMessage = errorTextNum;
    errorParams.colour = 'hsl(0, 100%, 66%)';
    errorParams.visibility = 'visible';
    errorChecks[3] = false;
  } else if (parseInt(e.target.value, 10) < currentYear) {
    errorParams.errorMessage = errorTextYear;
    errorParams.colour = 'hsl(0, 100%, 66%)';
    errorParams.visibility = 'visible';
    errorChecks[3] = false;
  } else if (e.target.value <= 0) {
    errorParams.errorMessage = errorTextZeros;
    errorParams.colour = 'hsl(0, 100%, 66%)';
    errorParams.visibility = 'visible';
    errorChecks[3] = false;
  } else {
    errorParams.errorMessage = 'Placeholder';
    errorParams.colour = '';
    errorParams.visibility = 'hidden';
    errorChecks[3] = true;
  }
  if (e.target.value == "") {
    errorParams.errorMessage = 'Placeholder';
    errorParams.colour = '';
    errorParams.visibility = 'hidden';
    cardYear.textContent = defaultYear;
    errorChecks[3] = false;
  }
  errorMessages(errorParams);
}

function updateCvc(e) {
  checkLength(e, 3);
  cvc.textContent = e.target.value;

  let errorParams = {
    errorElement: errorMessageBottom,
    inputField: inputCvc,
    errorMessage: 'Placeholder',
    colour: '',
    visibility: 'hidden'
  };

  if (isNaN(e.target.value)) {
    errorParams.errorMessage = errorTextNum;
    errorParams.colour = 'hsl(0, 100%, 66%)';
    errorParams.visibility = 'visible';
    errorChecks[4] = false;
  } else if (e.target.value <= 0) {
    errorParams.errorMessage = errorTextZeros;
    errorParams.colour = 'hsl(0, 100%, 66%)';
    errorParams.visibility = 'visible';
    errorChecks[4] = false;
  } else {
    errorParams.errorMessage = 'Placeholder';
    errorParams.colour = '';
    errorParams.visibility = 'hidden';
    errorChecks[4] = true;
  }
  if (e.target.value == "") {
    errorParams.errorMessage = 'Placeholder';
    errorParams.colour = '';
    errorParams.visibility = 'hidden';
    cardYear.textContent = defaultYear;
    errorChecks[4] = false;
  }
  errorMessages(errorParams);
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
      errorMessageForm.style.visibility = 'visible';
      errorMessageForm.textContent = 'All fields must be filled with valid info.'
      errorMessageForm.style.color = 'Red';
      for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].addEventListener('keydown', () => {
          errorMessageForm.style.visibility = 'hidden';
        })
      }
    }
  }
});

btnContinue.addEventListener('click', (e) => {
  e.preventDefault();
  completedState.style.display = 'none'
  cardForm.style.display = 'flex';
  for (let i = 0; i < errorChecks.length; i++) {
    errorChecks[i] = false;
  }
  for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].value = "";
    defaultSpaces[i].textContent = defaults[i];
  }
})

function errorMessages({ errorElement, inputField, errorMessage, colour, visibility }) {
  errorElement.innerHTML = errorMessage;
  inputField.style.borderColor = colour;
  errorElement.style.visibility = visibility;
}