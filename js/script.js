const hamburger = document.querySelector('.hamburger'),
        navigation = document.querySelector('.navigation'),
        closeElem = document.querySelector('.navigation__close');

hamburger.addEventListener('click', () => {
    navigation.classList.add('navigation-active');
    closeElem.classList.add('navigation__close-active');
    hamburger.classList.add('hamburger-active');
});

closeElem.addEventListener('click', () => {
    navigation.classList.remove('navigation-active');
    closeElem.classList.remove('navigation__close-active');
    hamburger.classList.remove('hamburger-active');
});