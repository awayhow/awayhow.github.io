'use strict';

function GetCookieConsent() {
    if (!localStorage.getItem('cookieConsent')) {
        localStorage.setItem('cookieConsent', "false");
    }
    if (localStorage.getItem('cookieConsent') == "false") {
        return false;
    } else {
        return true;
    }
}