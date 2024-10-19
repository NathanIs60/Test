document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopButton = document.querySelector('.Go_To_Top');

    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth' 
        });
    });
});