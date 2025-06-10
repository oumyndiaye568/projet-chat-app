import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    // Gestion du lien "créer un compte" sur la page d'accueil
    const createAccountLink = document.querySelector('h2.text-white');
    if (createAccountLink) {
        createAccountLink.addEventListener('click', () => {
            window.location.href = 'signup.html';
        });
    }

    // Gestion du bouton de connexion
    const loginButton = document.querySelector('button[type="submit"]');
    if (loginButton) {
        loginButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'chat.html';
        });
    }
});
