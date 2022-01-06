window.addEventListener('load', function() {

  // general
  window.ext = {
    get getCurrentScreenWidth() { return window.innerWidth },
    get isHome() { return document.body.classList.contains('page-home') },
  };
  
  const __CARD_HOLDER = 'Antony Bishops';
  const __CARD_NUMBER = '4242 4242 4242 4242';
  const __CARD_DATE = '12/2023';
  const __CARD_CVC = '040';

  



  // global scroll listener
  // document.addEventListener('scroll', e => {
  //   const scrolled = window.scrollY > 0;

  //   if (window.ext.isHome && window.ext.getCurrentScreenWidth <= 768) {
  //     try {
  //       const header = document.querySelector('.header');
  //       const header_logo = document.querySelector('.header .logo');
  //       const {live: live_logo, logo: default_logo} = header_logo.dataset;

  //       if (scrolled) {
  //         header.classList.add('scrolled');
  //       } else {
  //         header.classList.remove('scrolled');
  //       }
  //     } catch(err) {
  //       console.warn(err);
  //     }
  //   }
  // });



  // base
  try {
    const tabs_controls = document.querySelector('.tabs__controls');

    tabs_controls.addEventListener('click', e => {
      let buttons = tabs_controls.querySelectorAll('li');
      let tabs = tabs_controls.parentNode.querySelectorAll('.tabs__tab');
      let index = [...buttons].indexOf(e.target.parentNode);

      if (index >= 0) {
        buttons.forEach((btn, i) => i == index ? btn.classList.add('active') : btn.classList.remove('active'));
        tabs.forEach((tab, i) => i == index ? tab.classList.add('active') : tab.classList.remove('active'));
      }

    });

  } catch(err) {
    console.warn(err);
  }



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
        if (window.ext.getCurrentScreenWidth > 1024 && offsetScreen < 55) {
          const val = (window.innerWidth - el.clientWidth) / 2;  
          el.style.left = -val + 'px';
        }
      
        
      })
    })();


  } catch(err) {
    console.warn(err);
  }



  // intro screen
  try {
    const typeIt_holder = new TypeIt('.introPhone input[name=holder]', { speed: 100, waitUntilVisible: true, strings: __CARD_HOLDER });
    const typeIt_number = new TypeIt('.introPhone input[name=number]', { speed: 100, waitUntilVisible: true, strings: __CARD_NUMBER });
    const typeIt_date = new TypeIt('.introPhone input[name=date]', { speed: 250, waitUntilVisible: true, strings: __CARD_DATE });
    const typeIt_cvc = new TypeIt('.introPhone input[name=cvc]', { speed: 450, waitUntilVisible: true, strings: __CARD_CVC });

    if (true) {  
      typeIt_holder
        .exec(() => {
          typeIt_number
            .exec(() => {
              typeIt_date
                .exec(() => {
                  typeIt_cvc
                    .exec(() => {
                      console.log('typeit finish'); // finish callback
                    }).go(); // start cvc code
                }).go(); // start date
            }).go(); // start number
        }).go(); // start holder
    }

     
  } catch(err) {
    console.warn(err);
  }

});