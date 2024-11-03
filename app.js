document.addEventListener('DOMContentLoaded', function () {

    /** Iconic splide */

    let splideJs = new Splide('#image-carousel', {
        type: 'slide',
        // loop: true,
        rewind: true,
        speed: 1200,
        interval: 7500,
        autoplay: true,
        // waitForTransition: true,
        updateOnMove: true,
        pagination: false,
    });

    const animateIn = (target_id) => {
        anime({
            targets: `#${target_id} .iconic-slider-img`,
            easing: 'easeInOutExpo',
            translateX: ['1rem', '0'],
            duration: 950
        });
        anime({
            targets: `#${target_id} h2`,
            opacity: ['0', '1'],
            easing: 'easeInOutExpo',
            translateX: ['5rem', '0'],
            scale: ['98%', '100%'],
            duration: 1000
        });
        anime({
            targets: `#${target_id} p`,
            opacity: ['0', '1'],
            easing: 'easeInOutExpo',
            translateX: ['5rem', '0'],
            scale: ['98%', '100%'],
            duration: 1100
        });
        anime({
            targets: `#${target_id} button, #${target_id} a`,
            opacity: ['0', '1'],
            easing: 'easeInOutExpo',
            translateX: ['1rem', '0'],
            scale: ['98%', '100%'],
            duration: 500
        });
    }

    const animateOut = (target_id) => {
        anime({
            targets: `#${target_id} .iconic-slider-img`,
            easing: 'easeOutExpo',
            translateX: ['0', '1rem'],
            duration: 700
        });
        anime({
            targets: `#${target_id} h2`,
            opacity: ['1', '0'],
            easing: 'easeOutExpo',
            translateX: ['0', '5rem'],
            duration: 1000
        });
        anime({
            targets: `#${target_id} p`,
            opacity: ['1', '0'],
            easing: 'easeOutExpo',
            translateX: ['0', '5rem'],
            duration: 1100
        });
        anime({
            targets: `#${target_id} button, #${target_id} a`,
            opacity: ['1', '0'],
            easing: 'easeOutExpo',
            translateX: ['0', '1rem'],
            scale: ['100%', '98%'],
            duration: 500
        });
    }

    splideJs.on('active', function (ev) {
        animateIn(ev.slide.id)
    });

    splideJs.on('inactive', function (ev) {
        animateOut(ev.slide.id);
    });

    splideJs.mount()


    /** Iconic dropdown */

    const iconicsDropdowns = [...document.querySelectorAll('.iconic-dropdown')];

    iconicsDropdowns.forEach(el => {

        el.addEventListener('show.bs.dropdown', event => {
            /** @var {HTMLElement} dropdown */
            const dropdown = event.target.nextElementSibling;
            anime({
                targets: `#${event.target.id}+.dropdown-menu`,
                opacity: ['0', '1'],
                easing: 'easeInOutExpo',
                translateY: ['1rem', '0'],
                scale: ['98%', '100%'],
                duration: 350,
                complete: function () {
                    dropdown.style.display = 'block';
                },
            });
        })

        el.addEventListener('hide.bs.dropdown', event => {
            /** @var {HTMLElement} dropdown */
            const dropdown = event.target.nextElementSibling;
            anime({
                targets: `#${event.target.id}+.dropdown-menu`,
                opacity: ['1', '0'],
                easing: 'easeOutExpo',
                translateY: ['0', '2rem'],
                scale: ['100%', '98%'],
                duration: 300,
                complete: function () {
                    dropdown.style.display = '';
                }
            });
        });

    })

    /* Iconic counter */

    var iconics_counters = [...document.querySelectorAll('[data-icn-animate-to]')];

    iconics_counters.forEach((el) => {
        var start_obj = {
            from: 0,
        }

        setTimeout(() => {
            anime({
                targets: start_obj,
                from: el.getAttribute('data-icn-animate-to') ?? 100,
                round: 1,
                easing: 'linear',
                duration: 1000,
                update: function () {
                    el.innerHTML = new Intl.NumberFormat('de-DE', { minimumIntegerDigits: 2, maximumFractionDigits: 0 }).format(
                        start_obj.from,
                    );
                }
            });
        }, 200);
    })

});



