class Card {
    constructor(item, templateSelector) {
        this._name = item.name;
        this._link = item.link;
        this._templateSelector = templateSelector;
    }

    _handleLikeCard() {
        this.cardElement.querySelector('.gallery__button-like').classList.toggle('gallery__button-like_active');
    }

    _deleteCard() {
        this.cardElement.remove();
    }

    getTemplate() {
        return document.querySelector(this._templateSelector).content.querySelector('.gallery__item').cloneNode(true);
    }

    create() {
        this.cardElement = this.getTemplate();
        this._setEventListeners();
        this.cardElement.querySelector('.gallery__title').textContent = this._name;
        this.cardElement.querySelector('.gallery__image').src = this._link;

        return this.cardElement;
    }

    _setEventListeners() {
        this.cardElement.querySelector('.gallery__button-like').addEventListener('click', () => {
            this._handleLikeCard();
        });
        this.cardElement.querySelector('.gallery__button-delete').addEventListener('click', () => {
            this._deleteCard();
        });
    }
}

export { Card };