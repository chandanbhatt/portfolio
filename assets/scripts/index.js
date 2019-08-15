var chia = (function () {
    let loading = document.getElementById('loading-icon');
    let stopLoadingAnimation = function () {
        loading.classList.add('hide-item');
    }
    let startLoadingAnimation = function () {
        loading.classList.remove('show-item');
    }
    let toggleMenu = function (el) {
        let target = document.getElementById(el.dataset.target);
        let toggleStatus = el.dataset.toggle;
        if(toggleStatus === 'collapse'){
            el.dataset.toggle = 'grow';
            target.style.maxHeight = '200px';
        } else {
            el.dataset.toggle = 'collapse';
            target.style.maxHeight = 0;
        }
    }
    return {
        stopLoadingAnimation: stopLoadingAnimation,
        startLoadingAnimation: startLoadingAnimation,
        toggleMenu: toggleMenu
    }
})();

window.addEventListener('DOMContentLoaded', (event)=>{
    setTimeout(()=>{
        chia.stopLoadingAnimation();
    },500);

    let navbarToggleButton = document.getElementsByClassName('navbar-toggler');
    Array.prototype.forEach.call(navbarToggleButton,(el)=>{
       el.addEventListener('click', (e)=>{
           chia.toggleMenu(el);
       })
    });

});