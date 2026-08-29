/**
 * main.js — Profile Card Loader
 * Hides the loading screen once the page has fully loaded.
 */
(function () {
    'use strict';

    function hideLoader() {
        var loader = document.getElementById('loader');
        if (!loader) return;

        // Brief delay for UX polish
        setTimeout(function () {
            loader.classList.add('hidden');
        }, 800);
    }

    if (document.readyState === 'complete') {
        hideLoader();
    } else {
        window.addEventListener('load', hideLoader);
    }
}());
