class UserInfo {
    constructor({profileNameSelector, profileDescriptionSelector}) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileDescription = document.querySelector(profileDescriptionSelector);
    }

    getUserInfo() {
        return {
            name: this._profileName.textContent,
            job: this._profileDescription.textContent
        }
    }

    setUserInfo({name, job}) {
        this._profileName.textContent = name;
        this._profileDescription.textContent = job;
    }
}

export { UserInfo };