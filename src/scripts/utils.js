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

  const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    invalidInputClass: 'popup__input_type_error',
    disabledSubmitButtonClass: 'popup__button-save_disabled'
  };

  const profileEditBtn = document.querySelector('.profile__button-edit');
  const profileCardBtn = document.querySelector('.profile__button-add');
  const formEditProfile = document.getElementById('edit-form');
  const nameInput = formEditProfile.querySelector('[name="name"]');
  const jobInput = formEditProfile.querySelector('[name="job"]');
  const formAddCard = document.getElementById('add-form');

  export { initialCards, config, profileEditBtn, profileCardBtn, formEditProfile, nameInput, jobInput, formAddCard };