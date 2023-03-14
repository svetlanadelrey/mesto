import { Popup } from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._image = this._popup.querySelector('.view-image-popup__image');
    this._title = this._popup.querySelector('.view-image-popup__title');
  }
    open(item) {
        super.open();
        this._image.src = item.link;
        this._title.textContent = item.name;
        this._image.alt = item.name;
    }
}
export { PopupWithImage };