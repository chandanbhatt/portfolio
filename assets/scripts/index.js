var chia = (function () {
    let loading = document.getElementById('loading-icon');
    let navbarToggleButton = document.getElementsByClassName('navbar__toggler');

    let init = function () {
        Array.prototype.forEach.call(navbarToggleButton, (el) => {
            el.addEventListener('click', (e) => {
                toggleMenu(el);
            })
        });
    }
    let stopLoadingAnimation = function () {
        loading.classList.add('hide-item');
    }
    let startLoadingAnimation = function () {
        loading.classList.remove('show-item');
    }
    let toggleMenu = function (el, isSizeChange = false, size = 576) {
        let target, toggleStatus;
        if (el && !isSizeChange) {
            target = document.getElementById(el.dataset.target);
            toggleStatus = el.dataset.toggle;
            if (toggleStatus === 'collapse') {
                el.dataset.toggle = 'grow';
                target.style.height = '100%';
                target.style.maxHeight = '200px';
            } else {
                el.dataset.toggle = 'collapse';
                target.style.maxHeight = 0;
            }
        } else {
            Array.prototype.forEach.call(navbarToggleButton, (ele) => {
                target = document.getElementById(ele.dataset.target);
                if (size > 992) {
                    target.style.height = '100%';
                    target.style.maxHeight = '200px';
                } else {
                    ele.dataset.toggle = 'collapse';
                    target.style.height = 0;
                    target.style.maxHeight = 0;
                }
            });
        }

    }
    return {
        stopLoadingAnimation: stopLoadingAnimation,
        startLoadingAnimation: startLoadingAnimation,
        init: init,
        toggleMenu: toggleMenu
    }
})();

window.addEventListener('load', (event) => {
    setTimeout(() => {
        chia.stopLoadingAnimation();
    }, 1000);

    chia.init();

    window.addEventListener('resize', () => {
        let screenSize = window.innerWidth;
        chia.toggleMenu(null, true, screenSize);
    })

});