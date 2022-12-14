const POPUP_OPENED_CLASS = 'popup_opened';
const profileEditBtn = document.querySelector('.profile__button-edit');
const profileCardBtn = document.querySelector('.profile__button-add');
const popupList = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('.edit-profile-popup');
const popupAddCard = document.querySelector('.add-card-popup');
const popupViewImage = document.querySelector('.view-image-popup');
const profileEditCloseBtn = document.querySelector('.popup__button-close_type_edit-profile');
const profileAddCardCloseBtn = document.querySelector('.popup__button-close_type_add-card');
const imageCloseBtn = document.querySelector('.popup__button-close_view-image');

const cardsContainer = document.querySelector('.gallery__list');
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

const openPopup = function(popupElement) {
  popupElement.classList.add(POPUP_OPENED_CLASS);
}

const closePopup = function(popupElement) {
  popupElement.classList.remove(POPUP_OPENED_CLASS);
}

const submitEditForm = function(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
  evt.target.reset();
}

const submitAddForm = function(evt) {
  evt.preventDefault();
  const listItem = {
    name: placeInput.value,
    link: linkInput.value
  }
  renderCard(listItem, cardsContainer);
  closePopup(popupAddCard);
  evt.target.reset();
}

const createCard = function(item) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardElementName = cardElement.querySelector('.gallery__title');
  const cardElementLink = cardElement.querySelector('.gallery__image');
  const cardElementLikeBtn = cardElement.querySelector('.gallery__button-like');
  const cardElementDeleteBtn = cardElement.querySelector('.gallery__button-delete');

  cardElementName.textContent = item.name;
  cardElementLink.src = item.link;
  cardElementLink.alt = item.name;

  cardElementLikeBtn.addEventListener('click', handleLikeBtn);
  cardElementDeleteBtn.addEventListener('click', handleDeleteBtn);

  const fullSizeImagePopup = cardElement.querySelector('.gallery__image');
  fullSizeImagePopup.addEventListener('click', () => {
    openPopup(popupViewImage);
    fullSizeImage.src = item.link;
    fullSizeImage.alt = item.name;
    imageName.textContent = item.name;
  })
  return cardElement;
}

const handleLikeBtn = function(event) {
  event.target.classList.toggle('gallery__button-like_active');
}

const handleDeleteBtn = function(event) {
  event.target.closest('.gallery__item').remove();
}

const renderCard = function(item, container) {
  const element = createCard(item);
  container.prepend(element);
}

initialCards.forEach(function(item) {
  renderCard(item, cardsContainer);
})

profileEditBtn.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEditProfile);
});
profileCardBtn.addEventListener('click', () => {openPopup(popupAddCard)});
profileEditCloseBtn.addEventListener('click', () => {closePopup(popupEditProfile)});
profileAddCardCloseBtn.addEventListener('click', () => {closePopup(popupAddCard)});
imageCloseBtn.addEventListener('click', () => {(closePopup(popupViewImage))});
formEditProfile.addEventListener('submit', submitEditForm);
formAddCard.addEventListener('submit', submitAddForm);