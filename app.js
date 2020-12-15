document.addEventListener('scroll', e => {
    const scroll_position = window.scrollY;
    if (scroll_position > 300)  {
        document.querySelector('.header.container').style.backgroundColor = '#333';
    } else {
        document.querySelector('.header.container').style.backgroundColor = 'transparent';
    }
})