import { Popup } from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, submitFormHandler) {
        super(popupSelector);
        this._submitFormHandler = submitFormHandler;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    }

    _getInputValues() {
      this._data = {};
      this._inputList.forEach((input) => {
        this._data[input.name] = input.value;
      });
      return this._data;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
          event.preventDefault();
          this._submitFormHandler(this._getInputValues());
          this.close();
        });
      }
    
    close() {
      super.close();
      this._form.reset();
    }
}

export { PopupWithForm };