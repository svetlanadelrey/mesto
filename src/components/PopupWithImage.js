import { Popup } from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.view-image-popup__image');
    this._title = this._popup.querySelector('.view-image-popup__title');
  }
    open(item) {
        this._image.src = item.link;
        this._title.textContent = item.name;
        this._image.alt = item.name;
        super.open();
    }
}
export { PopupWithImage };