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
        this._titleSelector = '.gallery__title';
        this._likeCounterSelector = '.gallery__like-counter';
        
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
        this._image = this._cardElement.querySelector(this._imageSelector);
        this._buttonLike = this._cardElement.querySelector(this._buttonLikeSelector);
        this._buttonDelete = this._cardElement.querySelector(this._buttonDeleteSelector);
        this._title = this._cardElement.querySelector(this._titleSelector);
        this._setEventListeners();
        this._title.textContent = this._name;
        this._image.src = this._link;
        this._image.alt = this._name;
        this._likesCount = this._cardElement.querySelector(this._likeCounterSelector);
        this._toggleLike();
        this._showDeleteButton();
        
        return this._cardElement;
    }

    _showDeleteButton() {
        if (!this._isOwner) {
            this._buttonDelete.remove();
        }
    }

    _setEventListeners() {
        this._buttonLike.addEventListener('click', () => {
            this._handleLikeClick();
        });
        this._buttonDelete.addEventListener('click', () => {
            this._handleDeleteIconClick();
        });
        this._image.addEventListener('click', () => {
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
            this._buttonLike.classList.add(this._buttonLikedClass);
          } else {
            this._buttonLike.classList.remove(this._buttonLikedClass);
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