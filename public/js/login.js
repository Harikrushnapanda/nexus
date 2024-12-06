document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const skipLoginBtn = document.getElementById('skipLogin');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        window.location.href = '/home';
    });

    skipLoginBtn.addEventListener('click', () => {
        window.location.href = '/skip-login';
    });
});