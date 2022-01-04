window.addEventListener('load', function() {

  // general
  Object.defineProperty(window, 'getCurrentScreenWidth', {
    get: () => window.innerWidth,
    configurable: true
  })


  // header
  try {
    const header_burger = document.querySelector('.header .burger');
    const header_close = document.querySelector('.header .close');
    const header_menu = document.querySelector('.header .menu');
    const header_child = document.querySelectorAll('.header .menuChild');

    

    header_burger.addEventListener('click', e => {
      header_menu.classList.add('active');
    });

    header_close.addEventListener('click', e => {
      header_menu.classList.remove('active');
    });

    (() => { // change offset if child menus will be outside of the screen
      header_child.forEach(el => {
        const offsetScreen = window.innerWidth - el.clientWidth - el.getBoundingClientRect().left;
        if (window.getCurrentScreenWidth > 1024 && offsetScreen < 5) {
          const val = (window.innerWidth - el.clientWidth) / 2;  
          el.style.left = -val + 'px';
        }
      
        
      })
    })();


  } catch(e) {
    console.warn(err);
  }

});