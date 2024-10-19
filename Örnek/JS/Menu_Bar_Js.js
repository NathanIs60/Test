const Menu_Bar = document.getElementById('Menu_Bar');
const Nav_Bar_Bosluk = document.getElementById('Nav_Bar_Bosluk');
const Top_Bar = document.getElementById('Top_Bar');

let lastScrollTop = 0;

Menu_Bar.addEventListener('mouseenter', () => 
    {
    Menu_Bar.style.width = '200px'; 
});


Menu_Bar.addEventListener('mouseleave', () => 
    {
    Menu_Bar.style.width = '50px';
});

Nav_Bar_Bosluk.addEventListener('mouseenter', () => 
    {
        Nav_Bar_Bosluk.style.width = '200px'; 
});


Nav_Bar_Bosluk.addEventListener('mouseleave', () => 
    {
        Nav_Bar_Bosluk.style.width = '50px';
});

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY; // Mevcut kaydırma konumu

    // Eğer aşağı kaydırıyorsak
    if (scrollTop > lastScrollTop) {
        navBar.style.marginTop = '-60px'; // Nav bar'ı yukarı kaydır
    } else {
        navBar.style.marginTop = '0'; // Nav bar'ı normal konuma döndür
    }

    lastScrollTop = scrollTop; // Son kaydırma konumunu güncelle
});
/*
window.addEventListener('scroll', () => {
    
    if (window.scrollY > 0) {
        Menu_Bar.style.marginTop = '-20px'; 
    } else {
        Menu_Bar.style.marginTop = '0'; 
    }
});
*/