/**
 * main.js — Profile Card Loader
 * Hides the loading screen once the page has fully loaded.
 * CSS animation fallback is also in place (3s) in case this script fails.
 */
(function () {
    'use strict';

    function hideLoader() {
        var loader = document.getElementById('loader');
        if (!loader) return;
        setTimeout(function () {
            loader.classList.add('hidden');
        }, 600);
    }

    // Handle all readyState cases robustly
    if (document.readyState === 'complete') {
        hideLoader();
    } else if (document.readyState === 'interactive') {
        // DOM ready but subresources still loading — hide after short delay
        setTimeout(hideLoader, 800);
    } else {
        window.addEventListener('load', hideLoader);
        // Safety net: force-hide after 4s regardless
        setTimeout(hideLoader, 4000);
    }
}());
