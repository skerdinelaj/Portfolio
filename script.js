const toggleMenu = () => {
    const icon = document.querySelector('.hamburger-icon');
    const menu = document.querySelector('.menu-links');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

document.getElementById('linkedin').addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/skerdi-nelaj-289b651b7/', '_blank');
});

document.getElementById('github').addEventListener('click', function() {
    window.open('https://github.com/skerdinelaj', '_blank');
})

document.getElementById('react-mentoring-live').addEventListener('click', function() {
    window.open('https://skerdinelaj.github.io/react-mentoring-fishish-project/', '_blank');
});

document.getElementById('react-mentoring-github').addEventListener('click', function() {
    window.open('https://github.com/skerdinelaj/react-entoring-finish-project', '_blank');
});

document.getElementById('online-shop-github').addEventListener('click', function() {
    window.open('https://github.com/skerdinelaj/online-shop/', '_blank');
});

document.getElementById('online-shop-live').addEventListener('click', function() {
    window.open('https://skerdinelaj.github.io/online-shop/', '_blank');
});
document.getElementById('music-playlist-live').addEventListener('click', function() {
    window.open('https://skerdinelaj.github.io/music-palylist/', '_blank');
});
document.getElementById('music-playlist-github').addEventListener('click', function() {
    window.open('https://github.com/skerdinelaj/music-palylist', '_blank');
});
