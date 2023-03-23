class Card {
    constructor({data, handleCardClick, handleLikeClick, handleDeleteClick}, currentUserId, templateSelector) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._id = data._id;
        
        this._likes = data.likes;
        this._currentUserId = currentUserId;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._handleDeleteClick = handleDeleteClick;
        this._templateSelector = templateSelector;
    }

    _deleteCard() {
        this._cardElement.remove();
        this._element = null;
    }

    _getTemplate() {
        return document.querySelector(this._templateSelector).content.querySelector('.gallery__item').cloneNode(true);
    }

    create() {
        this._cardElement = this._getTemplate();
        this._setEventListeners();
        this._likeButton = this._cardElement.querySelector('.gallery__button-like');
        this._cardElement.querySelector('.gallery__title').textContent = this._name;
        this._cardElement.querySelector('.gallery__image').src = this._link;
        this._likesCount = this._cardElement.querySelector('.gallery__like-counter');
        this._likesCount.textContent = this._likes.length;
        this._isLiked();
        
        return this._cardElement;
    }

    _setEventListeners() {
        this._cardElement.querySelector('.gallery__button-like').addEventListener('click', () => {
            if (this._cardElement.classList.contains('gallery__button-like_active')) {
                this._handleDeleteClick(this);
              } else {
                this._handleLikeClick(this);
              }
        });
        this._cardElement.querySelector('.gallery__button-delete').addEventListener('click', () => {
            this._deleteCard();
        });
        this._cardElement.querySelector('.gallery__image').addEventListener('click', () => {
            this._openImage();
        });
    }
    _openImage() {
        this._handleCardClick(this._name, this._link);
    }

    _isLiked() {
        if (this._likes.some((user) => {
            return this._currentUserId === user._id;
          })) {
            this._likeButton.classList.add('gallery__button-like_active');
          }
    }

    toggleLike(data) {
        this._likes = data.likes;
        this._likesCount.textContent = this._likes.length;
        this._cardElement.querySelector('.gallery__button-like').classList.toggle('gallery__button-like_active');
    }

    updateLikes(item) {
        this._likes = item.likes;
        this._toggleLike();
    }
}

export { Card };