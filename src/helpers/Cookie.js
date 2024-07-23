export function get(name) {
    let matches = document.cookie.match(
        //eslint-disable-next-line
        new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'),
    );

    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function set(name, value, options) {
    options = options || {};

    let expires = options.expires;

    if (expires == undefined) {
        expires = new Date();
        expires.setDate(expires.getDate() + 7);
    }

    if (typeof expires == 'number' && expires) {
        let d = new Date();

        d.setTime(d.getTime() + expires * 1000);

        expires = options.expires = d;
    }

    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    let updatedCookie = name + '=' + value;

    for (let propName in options) {
        updatedCookie += '; ' + propName;

        let propValue = options[propName];

        if (propValue !== true) {
            updatedCookie += '=' + propValue;
        }
    }

    document.cookie = updatedCookie;
}

export function del(name) {
    set(name, '', {expires: -1000});
}

export function clear() {
    let cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;

        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;';
        document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}
