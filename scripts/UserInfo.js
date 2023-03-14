class UserInfo {
    constructor({profileNameSelector, profileDescriptionSelector}) {
        this._profileNameSelector = document.querySelector(profileNameSelector);
        this._profileDescriptionSelector = document.querySelector(profileDescriptionSelector);
    }

    getUserInfo() {
        return {
            name: this._profileNameSelector.textContent,
            description: this._profileDescriptionSelector.textContent
        }
    }

    setUserInfo({name, description}) {
        this._profileNameSelector.textContent = name;
        this._profileDescriptionSelector.textContent = description;
    }
}

export { UserInfo };