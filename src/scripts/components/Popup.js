class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closeButtons = document.querySelectorAll('.popup__button-close');
        this._handleButtonClose = this._handleButtonClose.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this);
        this._popupOpenedClass = 'popup_opened';
    }

    open() {
        this._popup.classList.add(this._popupOpenedClass);
        document.addEventListener('keyup', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove(this._popupOpenedClass);
        document.removeEventListener('keyup', this._handleEscClose);
    }

    _handleEscClose(event) {
      event.preventDefault();
        if(event.key === 'Escape') {
          this.close();
        }
    }
    _handleOverlayClose(event) {
      if(!event.target.closest('.popup__container')) {
        this.close();
      }
    };

    _handleButtonClose() {
      this.close();
    };

    setEventListeners() {
        this._closeButtons.forEach((button) => {
          button.addEventListener('click', this._handleButtonClose);
        })
        this._popup.addEventListener('mousedown', this._handleOverlayClose);
    }
}

export { Popup };