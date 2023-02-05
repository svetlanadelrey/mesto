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

const disadleButton = (formElement, config) => {
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    buttonElement.classList.add(config.disabledSubmitButtonClass);
    buttonElement.disabled = true;
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
            disadleButton(formElement, config)
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