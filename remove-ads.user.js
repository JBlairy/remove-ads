// ==UserScript==
// @name         Shitty Ads Killer
// @namespace    JBlairy
// @downloadURL  https://github.com/JBlairy/remove-ads/blob/master/remove-ads.user.js
// @updateURL    https://github.com/JBlairy/remove-ads/blob/master/remove-ads.user.js
// @version      1.0.0
// @description  Remove all shitty adds
// @author       JBlairy
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

    const list = document.body;

    const config = {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true,
    };

    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function() {
            console.log(host());
            if (host()) {
                removeElement(document.querySelectorAll(".tolro_b"));
                removeElement(document.querySelectorAll(".voir-btn"));
            }
        });
    });
    observer.observe(list, config);

})();

function removeElement(element)
{
    [].forEach.call(element, function(el) {
        el.remove();
    });
}

function host()
{
    let str = window.location.host;
    const words = str.split('.');

    return words.includes('streaming') || words.includes('voirfilm')
}