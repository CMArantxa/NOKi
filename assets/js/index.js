document.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    document.querySelector('.parallax').style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});
