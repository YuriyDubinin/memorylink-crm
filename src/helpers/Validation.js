// Includes a set of special functions needed to validate forms created with 'react-hook-form' library

// allows only words to be entered (ru, eng)
export function validateSimpleRequired(value) {
    const isFilled = value.trim() !== '' ? true : false;

    if (!isFilled) {
        return 'обязательное поле';
    }

    return true;
}

// allows only words to be entered (ru, eng)
export function validateForWordsOnly(value, isRequired = false) {
    const isFilled = value.trim() !== '' ? true : false;
    const regExp = /^[a-zа-я]{1,30}$/i;
    const isContainsOnlyWords = regExp.test(value);

    if (isRequired && !isFilled) {
        return 'обязательное поле';
    }

    if (!isContainsOnlyWords) {
        return 'неверный формат';
    }

    return true;
}

// allows only numbers to be entered, used with regular input (not 'number' type)
export function validateForNumbersOnly(value, isRequired = false) {
    const isFilled = value.trim() !== '' ? true : false;
    const isNan = isNaN(+value);

    if (isRequired && !isFilled) {
        return 'обязательное поле';
    }

    if (isNan) {
        return 'Должно содержать только цифры';
    }

    return true;
}

// email validation
export function validateEmail(value, isRequired = false) {
    const isFilled = value.trim() !== '' ? true : false;
    const regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isValid = regExp.test(value);

    if (isRequired && !isFilled) {
        return 'обязательное поле';
    }

    if (!isValid) {
        return 'неверный формат';
    }

    return true;
}

// password validation (minimum 6 characters, must contain: one uppercase letter, one lowercase letter, one number, one special character)
export function validatePassword(value, isRequired = false) {
    const isFilled = value.trim() !== '' ? true : false;
    const regExp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,30}/;
    const isValid = regExp.test(value);

    if (isRequired && !isFilled) {
        return 'обязательное поле';
    }

    if (!isValid) {
        return 'неверный формат';
    }

    return true;
}

// phone validation
export function validatePhone(value, isRequired = false) {
    const isFilled = value.trim() !== '' ? true : false;
    const regExp = /^[0-9]{11}$/;
    const isValid = regExp.test(value);

    if (isRequired && !isFilled) {
        return 'обязательное поле';
    }

    if (!isValid) {
        return 'неверный формат';
    }

    return true;
}

// allows only numbers to be entered, used with regular input (not 'number' type)
export function validateBankCard(value, isRequired = false) {
    const isFilled = value.trim() !== '' ? true : false;
    const regExp = /[0-9]{16}/;
    const isValid = regExp.test(value);

    if (isRequired && !isFilled) {
        return 'обязательное поле';
    }

    if (!isValid) {
        return 'неверный формат';
    }

    return true;
}
