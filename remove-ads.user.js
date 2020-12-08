// ==UserScript==
// @name         Ads Killer
// @namespace    JBlairy
// @downloadURL  https://github.com/JBlairy/remove-ads/blob/master/remove-ads.user.js
// @updateURL    https://github.com/JBlairy/remove-ads/blob/master/remove-ads.user.js
// @version      1.0.1
// @description  Remove all adds
// @author       JBlairy
// @match        https://streaming.voir-film.cc/*
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
            removeElement(document.querySelectorAll(".tolro_b"));
            removeElement(document.querySelectorAll(".voir-btn"));
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