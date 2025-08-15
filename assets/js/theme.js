(function () {
    var storageKey = 'site-theme';
    var toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    function setTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        try { localStorage.setItem(storageKey, theme); } catch (e) { }
    }

    function getCurrentTheme() {
        var saved = null;
        try { saved = localStorage.getItem(storageKey); } catch (e) { }
        return saved || document.body.getAttribute('data-theme') || 'default';
    }

    setTheme(getCurrentTheme());

    toggle.addEventListener('click', function () {
        var current = getCurrentTheme();
        var next = current === 'default' ? 'minimal' : (current === 'minimal' ? 'brutalist' : 'default');
        setTheme(next);
    });
})(); 