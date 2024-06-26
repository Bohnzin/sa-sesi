function toggleForm() {
    const loginContainer = document.querySelector('.main-content > .container');
    const registerContainer = document.getElementById('registerContainer');
    loginContainer.style.display = loginContainer.style.display === 'none' ? 'block' : 'none';
    registerContainer.style.display = registerContainer.style.display === 'none' ? 'block' : 'none';
}

function validateCPF(input) {
    input.value = input.value.replace(/\D/g, ''); // Remove any non-digit characters
}

function toggleMenu() {
    const menuContainer = document.getElementById('menuContainer');
    menuContainer.classList.toggle('open');
}
