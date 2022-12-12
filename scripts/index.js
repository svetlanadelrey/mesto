const POPUP_OPENED_CLASS = 'popup_opened';
const openEditProfileBtn = document.querySelector('.profile__button-edit');
const openAddCardBtn = document.querySelector('.profile__button-add');
const popup = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('.edit-profile-popup');
const popupAddCard = document.querySelector('.add-card-popup');
const popupViewImage = document.querySelector('.view-image-popup');
const popupContent = document.querySelector('.popup__container');
const closeEditProfileBtn = document.querySelector('.popup__button-close_type_edit-profile');
const closeAddCardBtn = document.querySelector('.popup__button-close_type_add-card');
const closeViewImageBtn = document.querySelector('.popup__button-close_view-image');
const likeBtns = document.querySelectorAll('.gallery__button-like');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const galleryList = document.querySelector('.gallery__list');
const cardTemplate = document.querySelector('#card').content.querySelector('.gallery__item');

const formEditProfile = document.getElementById('edit-form');
const nameInput = formEditProfile.querySelector('[name="name"]');
const jobInput = formEditProfile.querySelector('[name="job"]');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__paragraph');
const formAddCard = document.getElementById('add-form');
const placeInput = formAddCard.querySelector('[name="place"]');
const linkInput = formAddCard.querySelector('[name="link"]');
const fullSizeImage = document.querySelector('.view-image-popup__image');
const imageName = document.querySelector('.view-image-popup__title');

let openPopup = function(popupElement) {
  popupElement.classList.add(POPUP_OPENED_CLASS);
}
let closePopup = function(popupElement) {
  popupElement.classList.remove(POPUP_OPENED_CLASS);
}

let submitEditForm = function(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEditProfile);  
}

let submitAddForm = function(evt) {
  evt.preventDefault();
  const listItem = {
    name: placeInput.value,
    link: linkInput.value
  }
  renderCard(listItem, galleryList);
  closePopup(popupAddCard);
}

let createCard = function(item) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardElementName = cardElement.querySelector('.gallery__title');
  const cardElementLink = cardElement.querySelector('.gallery__image');
  const cardElementLikeBtns = cardElement.querySelectorAll('.gallery__button-like');
  const cardElementDeleteBtns = cardElement.querySelectorAll('.gallery__button-delete');

  cardElementName.textContent = item.name;
  cardElementLink.src = item.link;
  cardElementLink.alt = item.name;

  cardElementLikeBtns.forEach(handleLikeBtn);
  cardElementDeleteBtns.forEach(handleDeleteBtn);

  const openViewImagePopup = cardElement.querySelector('.gallery__image');
  openViewImagePopup.addEventListener('click', () => {
    openPopup(popupViewImage);
    fullSizeImage.src = item.link;
    fullSizeImage.alt = item.name;
    imageName.textContent = item.name;
  })
  return cardElement;
}

let handleLikeBtn = function(item) {
  item.addEventListener('click', function(event) {
    event.target.classList.toggle('gallery__button-like_active');
})
}

let handleDeleteBtn = function(item) {
  item.addEventListener('click', function(event) {
    event.target.closest('.gallery__item').remove();
  })
}

let renderCard = function(item, container) {
  const element = createCard(item);
  container.prepend(element);
}

initialCards.forEach(function(item) {
  renderCard(item, galleryList);
})

openEditProfileBtn.addEventListener('click', () => {openPopup(popupEditProfile)});
openAddCardBtn.addEventListener('click', () => {openPopup(popupAddCard)});
closeEditProfileBtn.addEventListener('mousedown', () => {closePopup(popupEditProfile)});
closeAddCardBtn.addEventListener('mousedown', () => {closePopup(popupAddCard)});
closeViewImageBtn.addEventListener('mousedown', () => {(closePopup(popupViewImage))});
formEditProfile.addEventListener('submit', submitEditForm);
formAddCard.addEventListener('submit', submitAddForm);