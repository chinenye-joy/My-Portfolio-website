const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
    if (navLinks.style.display === 'none' || navLinks.style.display === ''){
        navLinks.style.display = 'block';
    }
    else {
        navLinks.style.display = 'none';
    }
});
















