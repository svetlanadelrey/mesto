const showInputError = (inputElement, errorElement) => {
    inputElement.classList.add(config.invalidInputClass);
    errorElement.textContent = inputElement.validationMessage;
}

const hideInputError = (inputElement, errorElement) => {
    inputElement.classList.remove(config.invalidInputClass);
    errorElement.textContent = ''; 
}

const checkInputValidity = (inputElement, config) => { 
    const errorElement = document.querySelector(`.input-error-${inputElement.name}`);
    if(inputElement.validity.valid) {
        hideInputError(inputElement, errorElement, config.invalidInputClass);
    } else {
        showInputError(inputElement, errorElement, config.invalidInputClass);
    }
}

const hasInvalidInput = (inputList) => inputList.every(inputElement => inputElement.validity.valid);

const toggleButton = (inputList, buttonElement) => {
    
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.remove(config.disabledSubmitButtonClass);
        buttonElement.disabled = false;
    } else {
        buttonElement.classList.add(config.disabledSubmitButtonClass);
        buttonElement.disabled = true;
    }
}

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    toggleButton(inputList, buttonElement);
    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(inputElement, config);

            toggleButton(inputList, buttonElement);
        })
    })
}
const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));

    formList.forEach(formElement => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement);
    })
}

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    invalidInputClass: 'popup__input_type_error',
    disabledSubmitButtonClass: 'popup__button-save_disabled'
}

enableValidation(config);


/*
const showInputError = (inputElement, errorElement, invalidInputClass) => {
    inputElement.classList.add(invalidInputClass);
    errorElement.textContent = inputElement.validationMessage;
}

const hideInputError = (inputElement, errorElement, invalidInputClass) => {
    inputElement.classList.remove(invalidInputClass);
    errorElement.textContent = ''; 
}

const disableButton = (buttonElement, disabledButtonClass) => {
    buttonElement.classList.add(disabledButtonClass);
    buttonElement.disabled = true;
}

const enableButton = (buttonElement, disabledButtonClass) => {
    buttonElement.classList.remove(disabledButtonClass);
    buttonElement.disabled = false; 
}

const toggleButtonState = (submitButtonSelector, disabledSubmitButtonClass, buttonState) => {
    if(buttonState) {
        disableButton(submitButtonSelector, disabledSubmitButtonClass);
    } else {
        enableButton(submitButtonSelector, disabledSubmitButtonClass);
    }
}

const checkInputValidity = (inputElement, errorElement, invalidInputClass) => {
    if(inputElement.validity.valid) {
        hideInputError(inputElement, errorElement, invalidInputClass);
    } else {
        showInputError(inputElement, errorElement, invalidInputClass);
    }
}

const hasInvalidInput = (inputList) => {
    return inputList.some(inputElement => !inputElement.validity.valid);
}

const handleFormInput = (evt, formSelector, invalidInputClass, submitButtonSelector, disabledSubmitButtonClass, inputList) => {
    const inputElement = evt.target;
    const errorElement = document.querySelector(`.input-error-${inputElement.name}`);
    checkInputValidity(inputElement, errorElement, invalidInputClass);
    const buttonState = hasInvalidInput(inputList);

    toggleButtonState(submitButtonSelector, disabledSubmitButtonClass, buttonState);
}

const handleFormSubmit = (evt) => {
    evt.preventDefault();
}

const enableValidation = ({ formSelector, inputSelector, invalidInputClass, submitButtonSelector, disabledSubmitButtonClass}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    const inputList = Array.from(document.querySelectorAll(inputSelector));

    formList.forEach ((formElement) => {
        formElement.addEventListener('submit', handleFormSubmit);
    })
    
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', (evt) => handleFormInput(evt, formSelector, invalidInputClass, submitButtonSelector, disabledSubmitButtonClass, inputList));
    })
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    invalidInputClass: 'popup__input_type_error',
    submitButtonSelector: '.popup__button-save',
    disabledSubmitButtonClass: 'popup__button-save_disabled'
});
*/