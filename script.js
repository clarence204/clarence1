const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.na-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}