class UserInfo {
    constructor({profileNameSelector, profileDescriptionSelector, avatarSelector}) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileDescription = document.querySelector(profileDescriptionSelector);
        this._avatarLink = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        return {
            name: this._profileName.textContent,
            job: this._profileDescription.textContent,
            avatar: this._avatarLink.src
        }
    }

    setUserInfo(data) {
        this._profileName.textContent = data.name;
        this._profileDescription.textContent = data.about;
        this._avatarLink.src = data.avatar;
    }
}

export { UserInfo };