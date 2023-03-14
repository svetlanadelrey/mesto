import { Popup } from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popup, submitFormHandler) {
        super(popup);
        this._submitFormHandler = submitFormHandler;
        this._form = this._popup.querySelector('.popup__form');
    }

    _getInputValues() {
      const inputList = this._form;
      inputList.forEach((input) => {
        this._data[input.name] = input.value;
      });
      
    }

    setListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
          event.preventDefault();
          this._submitForm(event);
        });
      }
    
    _submitForm(event) {
      event.preventDefault();
        
      this._submitFormHandler(this._getInputValues());
      this._close();
      }
    close() {
      super.close();
      this._form.reset();
    }
      
}

export { PopupWithForm };