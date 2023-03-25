class Card {
    constructor({data, handleCardClick, handleLikeClick, handleDeleteClick, handleDeleteIconClick}, currentUserId, templateSelector) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._id = data._id;       
        this._likes = data.likes;
        this._currentUserId = currentUserId;
        this._isOwner = data.owner._id === currentUserId;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleDeleteIconClick = handleDeleteIconClick;
        this._templateSelector = templateSelector;
        this._buttonLikeSelector = '.gallery__button-like';
        this._buttonDeleteSelector = '.gallery__button-delete';
        this._buttonLikedClass = 'gallery__button-like_active';
        this._imageSelector = '.gallery__image';
    }

    deleteCard() {
        this._cardElement.remove();
        this._cardElement = null;
    }

    _getTemplate() {
        return document.querySelector(this._templateSelector).content.querySelector('.gallery__item').cloneNode(true);
    }

    create() {
        this._cardElement = this._getTemplate();
        this._setEventListeners();
        this._cardElement.querySelector('.gallery__title').textContent = this._name;
        this._cardElement.querySelector(this._imageSelector).src = this._link;
        this._likesCount = this._cardElement.querySelector('.gallery__like-counter');
        this._likesCount.textContent = this._likes.length;
        this._toggleLike();
        this._showDeleteButton();
        
        return this._cardElement;
    }

    _showDeleteButton() {
        if (!this._isOwner) {
            this._cardElement.querySelector(this._buttonDeleteSelector).remove();
        }
    }

    _setEventListeners() {
        this._cardElement.querySelector(this._buttonLikeSelector).addEventListener('click', () => {
            this._handleLikeClick();
        });
        this._cardElement.querySelector(this._buttonDeleteSelector).addEventListener('click', () => {
            this._handleDeleteIconClick();
        });
        this._cardElement.querySelector(this._imageSelector).addEventListener('click', () => {
            this._openImage();
        });
    }
    _openImage() {
        this._handleCardClick(this._name, this._link);
    }

    isLiked() {
        return this._likes.some((user) => this._currentUserId === user._id);
    }

    _toggleLike() {
        this._likesCount.textContent = this._likes.length;
        if(this.isLiked()) {
            this._cardElement.querySelector(this._buttonLikeSelector).classList.add(this._buttonLikedClass);
          } else {
            this._cardElement.querySelector(this._buttonLikeSelector).classList.remove(this._buttonLikedClass);
          }
    }

    updateLikes(data) {
        this._likes = data.likes;
        this._toggleLike();
    }

    getId() {
        return this._id;
    }
}

export { Card };