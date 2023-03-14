class Popup {
    constructor(popup) {
        this._popup = popup;
        this._closeButton = this._popup.querySelector('.popup__button-close');
        this._handleButtonClose = this._handleButtonClose.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keyup', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
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
        this._closeButton.addEventListener('click', this._handleButtonClose);
        this._popup.addEventListener('mousedown', this._handleOverlayClose);
    }
}

export { Popup };