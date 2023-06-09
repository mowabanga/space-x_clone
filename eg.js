const burger = document.getElementsByClassName("burger")[0];
const navBarLinks = document.getElementsByClassName('navbar-links')[0];

burger.addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
})