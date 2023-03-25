const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  invalidInputClass: 'popup__input_type_error',
  disabledSubmitButtonClass: 'popup__button-save_disabled',
  errorClass: 'popup__input-error_visible'
};

const profileEditBtn = document.querySelector('.profile__button-edit');
const profileCardBtn = document.querySelector('.profile__button-add');
const formEditProfile = document.getElementById('edit-form');
const editAvatarBtn = document.querySelector('.avatar__button');
const nameInput = formEditProfile.querySelector('[name="name"]');
const jobInput = formEditProfile.querySelector('[name="job"]');
const formAddCard = document.getElementById('add-form');
const formUpdateAvatar = document.getElementById('update-avatar-form');

export { config, profileEditBtn, profileCardBtn, formEditProfile, editAvatarBtn, nameInput, jobInput, formAddCard, formUpdateAvatar };