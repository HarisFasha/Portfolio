// Dark mode toggle — shared across all pages
(function () {
    function applyIcon() {
        const isDark = document.documentElement.classList.contains('dark');
        const iconName = isDark ? 'light_mode' : 'dark_mode';
        const icon = document.getElementById('theme-icon');
        const iconMobile = document.getElementById('theme-icon-mobile');
        if (icon) icon.textContent = iconName;
        if (iconMobile) iconMobile.textContent = iconName;
    }

    function toggleTheme() {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('site-theme', isDark ? 'dark' : 'light');
        applyIcon();
    }

    document.addEventListener('DOMContentLoaded', () => {
        applyIcon();
        const btn = document.getElementById('theme-btn');
        const btnMobile = document.getElementById('theme-btn-mobile');
        if (btn) btn.addEventListener('click', toggleTheme);
        if (btnMobile) btnMobile.addEventListener('click', toggleTheme);
    });
})();
