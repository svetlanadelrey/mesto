class FormValidator {
    constructor(config, formElement) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._invalidInputClass = config.invalidInputClass;
        this._errorClass = config.errorClass;
        this._disabledSubmitButtonClass = config.disabledSubmitButtonClass;
        this._formElement = formElement;
        this._buttonElement = this._formElement.querySelector(config.submitButtonSelector);
        this._formList = Array.from(document.querySelectorAll(config.formSelector));
        this._inputList = Array.from(this._formElement.querySelectorAll(config.inputSelector));
    }

    _showInputError(inputElement, errorElement) {
        inputElement.classList.add(this._invalidInputClass);
        errorElement.classList.add(this._errorClass);
        errorElement.textContent = inputElement.validationMessage;
    }

    _hideInputError(inputElement, errorElement) {
        inputElement.classList.remove(this._invalidInputClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = ''; 
    }

    _checkInputValidity(inputElement) { 
        const errorElement = this._formElement.querySelector(`.input-error-${inputElement.name}`);
        if(inputElement.validity.valid) {
            this._hideInputError(inputElement, errorElement, this._invalidInputClass);
        } else {
            this._showInputError(inputElement, errorElement, this._invalidInputClass);
        } 
    }

    _hasInvalidInput() {
        return this._inputList.every((inputElement) => inputElement.validity.valid);
    }

    _toggleButton() {
        if (this._hasInvalidInput(this._inputList)) {
            this._buttonElement.classList.remove(this._disabledSubmitButtonClass);
            this._buttonElement.disabled = false;
        } else {
            this._buttonElement.classList.add(this._disabledSubmitButtonClass);
            this._buttonElement.disabled = true;
        }
    }

    _disadleButton() {
        this._buttonElement.classList.add(this._disabledSubmitButtonClass);
        this._buttonElement.disabled = true;
    }

    enableValidation() {
        this._formList.forEach(formElement => {
            this._formElement.addEventListener('submit', (evt) => {
                evt.preventDefault();
                this._disadleButton(formElement);
            });
            this._setEventListeners(formElement);
        })
    }

    _setEventListeners() {
        this._toggleButton();
        this._inputList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
    
                this._toggleButton();
            })
        })
    }
}

export {FormValidator};