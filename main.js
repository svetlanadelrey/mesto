(()=>{"use strict";var t={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",invalidInputClass:"popup__input_type_error",disabledSubmitButtonClass:"popup__button-save_disabled",errorClass:"popup__input-error_visible"},e=document.querySelector(".profile__button-edit"),n=document.querySelector(".profile__button-add"),r=document.getElementById("edit-form"),o=document.querySelector(".avatar__button"),i=r.querySelector('[name="name"]'),u=r.querySelector('[name="job"]'),l=document.getElementById("add-form"),a=document.getElementById("update-avatar-form");function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var f=function(){function t(e,n,r){var o=e.data,i=e.handleCardClick,u=e.handleLikeClick,l=e.handleDeleteClick,a=e.handleDeleteIconClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=o,this._name=o.name,this._link=o.link,this._id=o._id,this._likes=o.likes,this._currentUserId=n,this._isOwner=o.owner._id===n,this._handleCardClick=i,this._handleLikeClick=u,this._handleDeleteClick=l,this._handleDeleteIconClick=a,this._templateSelector=r,this._buttonLikeSelector=".gallery__button-like",this._buttonDeleteSelector=".gallery__button-delete",this._buttonLikedClass="gallery__button-like_active",this._imageSelector=".gallery__image",this._titleSelector=".gallery__title",this._likeCounterSelector=".gallery__like-counter"}var e,n;return e=t,(n=[{key:"deleteCard",value:function(){this._cardElement.remove(),this._cardElement=null}},{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".gallery__item").cloneNode(!0)}},{key:"create",value:function(){return this._cardElement=this._getTemplate(),this._image=this._cardElement.querySelector(this._imageSelector),this._buttonLike=this._cardElement.querySelector(this._buttonLikeSelector),this._buttonDelete=this._cardElement.querySelector(this._buttonDeleteSelector),this._title=this._cardElement.querySelector(this._titleSelector),this._setEventListeners(),this._title.textContent=this._name,this._image.src=this._link,this._image.alt=this._name,this._likesCount=this._cardElement.querySelector(this._likeCounterSelector),this._toggleLike(),this._showDeleteButton(),this._cardElement}},{key:"_showDeleteButton",value:function(){this._isOwner||this._buttonDelete.remove()}},{key:"_setEventListeners",value:function(){var t=this;this._buttonLike.addEventListener("click",(function(){t._handleLikeClick()})),this._buttonDelete.addEventListener("click",(function(){t._handleDeleteIconClick()})),this._image.addEventListener("click",(function(){t._openImage()}))}},{key:"_openImage",value:function(){this._handleCardClick(this._name,this._link)}},{key:"isLiked",value:function(){var t=this;return this._likes.some((function(e){return t._currentUserId===e._id}))}},{key:"_toggleLike",value:function(){this._likesCount.textContent=this._likes.length,this.isLiked()?this._buttonLike.classList.add(this._buttonLikedClass):this._buttonLike.classList.remove(this._buttonLikedClass)}},{key:"updateLikes",value:function(t){this._likes=t.likes,this._toggleLike()}},{key:"getId",value:function(){return this._id}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}var h=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._invalidInputClass=e.invalidInputClass,this._errorClass=e.errorClass,this._disabledSubmitButtonClass=e.disabledSubmitButtonClass,this._formElement=n,this._buttonElement=this._formElement.querySelector(e.submitButtonSelector),this._formList=Array.from(document.querySelectorAll(e.formSelector)),this._inputList=Array.from(this._formElement.querySelectorAll(e.inputSelector))}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){t.classList.add(this._invalidInputClass),e.classList.add(this._errorClass),e.textContent=t.validationMessage}},{key:"_hideInputError",value:function(t,e){t.classList.remove(this._invalidInputClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){var e=this._formElement.querySelector(".input-error-".concat(t.name));t.validity.valid?this._hideInputError(t,e,this._invalidInputClass):this._showInputError(t,e,this._invalidInputClass)}},{key:"_hasInvalidInput",value:function(){return this._inputList.every((function(t){return t.validity.valid}))}},{key:"_toggleButton",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.remove(this._disabledSubmitButtonClass),this._buttonElement.disabled=!1):this._disadleButton()}},{key:"_disadleButton",value:function(){this._buttonElement.classList.add(this._disabledSubmitButtonClass),this._buttonElement.disabled=!0}},{key:"enableValidation",value:function(){var t=this;this._formList.forEach((function(e){t._formElement.addEventListener("submit",(function(n){n.preventDefault(),t._disadleButton(e)})),t._setEventListeners(e)}))}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButton(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButton()}))}))}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}var v=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}var g=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._closeButtons=document.querySelectorAll(".popup__button-close"),this._handleButtonClose=this._handleButtonClose.bind(this),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this),this._popupOpenedClass="popup_opened"}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add(this._popupOpenedClass),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove(this._popupOpenedClass),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){t.preventDefault(),"Escape"===t.key&&this.close()}},{key:"_handleOverlayClose",value:function(t){t.target.closest(".popup__container")||this.close()}},{key:"_handleButtonClose",value:function(){this.close()}},{key:"setEventListeners",value:function(){var t=this;this._closeButtons.forEach((function(e){e.addEventListener("click",t._handleButtonClose)})),this._popup.addEventListener("mousedown",this._handleOverlayClose)}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},w.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(r);if(o){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popup.querySelector(".view-image-popup__image"),e._title=e._popup.querySelector(".view-image-popup__title"),e}return e=u,(n=[{key:"open",value:function(t){this._image.src=t.link,this._title.textContent=t.name,this._image.alt=t.name,w(C(u.prototype),"open",this).call(this)}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(g);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},P.apply(this,arguments)}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(r);if(o){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitFormHandler=e,n._form=n._popup.querySelector(".popup__form"),n._inputList=Array.from(n._form.querySelectorAll(".popup__input")),n._submitButton=n._popup.querySelector(".popup__button-save"),n._submitButtonText=n._submitButton.textContent,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._data={},this._inputList.forEach((function(e){t._data[e.name]=e.value})),this._data}},{key:"setEventListeners",value:function(){var t=this;P(B(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitFormHandler(t._getInputValues()),t.close()}))}},{key:"loading",value:function(t){this._submitButton.textContent=t?"Сохранение...":this._submitButtonText}},{key:"close",value:function(){P(B(u.prototype),"close",this).call(this),this._form.reset()}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(g);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=H(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},R.apply(this,arguments)}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function H(t){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},H(t)}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=H(r);if(o){var n=H(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===D(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._successHandler=null,e._confirmButton=e._popup.querySelector(".popup__button-save_type_confirm"),e._confirmButtonText=e._confirmButton.textContent,e}return e=u,(n=[{key:"setSuccessHandler",value:function(t){this._successHandler=t}},{key:"setEventListeners",value:function(){var t=this;R(H(u.prototype),"setEventListeners",this).call(this),this._confirmButton.addEventListener("click",(function(e){e.preventDefault(),t._successHandler()}))}},{key:"loading",value:function(t){this._confirmButton.textContent=t?"Удаление...":this._confirmButtonText}},{key:"close",value:function(){R(H(u.prototype),"close",this).call(this)}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(g);function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==U(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===U(o)?o:String(o)),r)}var o}var N=function(){function t(e){var n=e.profileNameSelector,r=e.profileDescriptionSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(n),this._profileDescription=document.querySelector(r),this._avatarLink=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,job:this._profileDescription.textContent,avatar:this._avatarLink.src}}},{key:"setUserInfo",value:function(t){this._profileName.textContent=t.name,this._profileDescription.textContent=t.about,this._avatarLink.src=t.avatar}}])&&J(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}var M,z=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e,this._token=n}var e,n;return e=t,(n=[{key:"_getHeaders",value:function(){return{authorization:this._token,"Content-Type":"application/json"}}},{key:"_getJson",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._getHeaders()}).then(this._getJson)}},{key:"editUserInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._getHeaders(),body:JSON.stringify({name:t.name,about:t.about})}).then(this._getJson)}},{key:"addCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._getHeaders(),body:JSON.stringify({name:t.place,link:t.link})}).then(this._getJson)}},{key:"getCurrentUser",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._getHeaders()}).then(this._getJson)}},{key:"setLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._getHeaders()}).then(this._getJson)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._getHeaders()}).then(this._getJson)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._getHeaders()}).then(this._getJson)}},{key:"updateAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._getHeaders(),body:JSON.stringify({avatar:t.avatar})}).then(this._getJson)}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var G=new T(".popup_type_add-card",(function(t){G.loading(!0),ot.addCard(t).then((function(t){tt.addItem(Z(t)),G.close()})).catch((function(t){console.log(t)})).finally((function(){G.loading(!1)}))})),K=new T(".popup_type_edit-profile",(function(t){K.loading(!0),ot.editUserInfo({name:t.name,about:t.job}).then((function(t){Y.setUserInfo(t),K.close()})).catch((function(t){console.log(t)})).finally((function(){K.loading(!1)}))})),Q=new T(".popup_type_update-avatar",(function(t){ot.updateAvatar(t).then((function(t){Y.setUserInfo(t),Q.close()})).catch((function(t){console.log(t)}))})),W=new O(".view-image-popup"),X=new A(".popup_type_confirm"),Y=new N({profileNameSelector:".profile__title",profileDescriptionSelector:".profile__paragraph",avatarSelector:".avatar__image"});function Z(t){var e=new f({data:t,handleCardClick:function(t,e){W.open({name:t,link:e})},handleLikeClick:function(){e.isLiked()?ot.deleteLike(e.getId()).then((function(t){e.updateLikes(t)})).catch((function(t){console.log(t)})):ot.setLike(e.getId()).then((function(t){e.updateLikes(t)})).catch((function(t){console.log(t)}))},handleDeleteIconClick:function(){X.setSuccessHandler((function(){X.loading(!0),ot.deleteCard(e.getId()).then((function(){X.close(),e.deleteCard()})).catch((function(t){console.log(t)})).finally((function(){X.loading(!1)}))})),X.open()}},M,".card");return e.create()}var tt=new v({renderer:function(t){tt.addItem(Z(t))}},".gallery__list"),et=new h(t,r),nt=new h(t,l),rt=new h(t,a),ot=new z("https://mesto.nomoreparties.co/v1/cohort-61","6cb1c4c3-65bd-4e4c-b78a-a5117aee9407");Promise.all([ot.getCurrentUser(),ot.getCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,l=[],a=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(l.push(r.value),l.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return l}}(e,n)||function(t,e){if(t){if("string"==typeof t)return $(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];M=o._id,Y.setUserInfo(o),tt.renderItems(i)})).catch((function(t){console.log(t)})),G.setEventListeners(),K.setEventListeners(),Q.setEventListeners(),W.setEventListeners(),X.setEventListeners(),et.enableValidation(),nt.enableValidation(),rt.enableValidation(),e.addEventListener("click",(function(){K.open();var t=Y.getUserInfo();i.value=t.name,u.value=t.job})),o.addEventListener("click",(function(){Q.open()})),n.addEventListener("click",(function(){return G.open()}))})();