/*Плавное появление Popup*/
function showPopup() {
	document.querySelector(".popup").classList.add('visible');
};

function hidePopup() {
	document.querySelector(".popup").classList.remove('visible');
};

function showPopupSuccess() {
	document.querySelector(".popup-success").classList.add('visible');
};

function hidePopupSuccess() {
	document.querySelector(".popup-success").classList.remove('visible');
};

/*Плавный переход к якорям*/

var linkNav = document.querySelectorAll('[href^="#nav"]'),
    V = 0.5;  // скорость, может иметь дробное значение через точку
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function(e) {
    e.preventDefault();
    var w = window.pageYOffset,  // прокрутка
        hash = this.href.replace(/[^#]*(.*)/, '$1');  // id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
        start = null;
    requestAnimationFrame(step); 
    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
          r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
      window.scrollTo(0,r);
      if (r != w + t) {
        requestAnimationFrame(step)
      } else {
        location.hash = hash  // URL с хэшем
      }
    }
  }, false);
}
