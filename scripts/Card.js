class Card {
    constructor(item, templateSelector) {
        this._name = item.name;
        this._link = item.link;
        this._templateSelector = templateSelector;
    }

    _handleLikeCard() {
        this._cardElement.querySelector('.gallery__button-like').classList.toggle('gallery__button-like_active');
    }

    _deleteCard() {
        this._cardElement.remove();
    }

    _getTemplate() {
        return document.querySelector(this._templateSelector).content.querySelector('.gallery__item').cloneNode(true);
    }

    create() {
        this._cardElement = this._getTemplate();
        this._setEventListeners();
        this._cardElement.querySelector('.gallery__title').textContent = this._name;
        this._cardElement.querySelector('.gallery__image').src = this._link;

        return this._cardElement;
    }

    _setEventListeners() {
        this._cardElement.querySelector('.gallery__button-like').addEventListener('click', () => {
            this._handleLikeCard();
        });
        this._cardElement.querySelector('.gallery__button-delete').addEventListener('click', () => {
            this._deleteCard();
        });
    }
}

export { Card };