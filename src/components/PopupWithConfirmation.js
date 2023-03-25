import { Popup } from './Popup.js';

class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._successHandler = null;
        this._confirmButton = this._popup.querySelector('.popup__button-save_type_confirm');
        this._confirmButtonText = this._confirmButton.textContent;
      }

      setSuccessHandler(deleteHandler) {
        this._successHandler = deleteHandler;
      }

      setEventListeners() {
        super.setEventListeners();
        this._confirmButton.addEventListener('click', (event) => {
            event.preventDefault();
            this._successHandler();
        })
      }

      loading(isLoading) {
        if(isLoading) {
          this._confirmButton.textContent = 'Удаление...';
        } else {
          this._confirmButton.textContent = this._confirmButtonText;
        }
      }

      close() {
        super.close();
      }
}

export { PopupWithConfirmation };