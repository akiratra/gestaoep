document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        if (email === 'danilo@senai.br' && senha === '123456') {
            window.location.href = 'index.html'; // Redireciona para o dashboard
        } else {
            errorMessage.style.display = 'block';
        }
    });
});
