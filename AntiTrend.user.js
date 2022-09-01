// ==UserScript==
// @name         AntiTrend
// @namespace    https://github.com/yi7242/AntiTrend/
// @version      0.1
// @description  Remove trend elements from twitter
// @author       yi
// @match        https://twitter.com/*
// @icon         https://pbs.twimg.com/profile_images/1247229237699829765/pEMr46Cp_400x400.jpg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let c = document.getElementsByClassName("css-1dbjc4n");
    if (typeof c !== undefined) {
        c.remove();
    }
})();