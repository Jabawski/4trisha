$(window).on('load', function () {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
});

$(document).ready(function () {
    let clickCount = 0;

    $('.envelope').on('click', function () {
        clickCount++;

        if (clickCount === 1) {
            $('.flap').addClass('open');
            $('.seal-heart').addClass('open');
            $('.inside').addClass('open');

            const bgMusic = document.getElementById('bgMusic');
            bgMusic.play();
            bgMusic.volume = 0.3;


            confetti({
                particleCount: 200,
                spread: 160,
                origin: { y: 0.6 }
            });
        } else if (clickCount === 2) {
            $('.envelope').addClass('hide');
            $('.card').addClass('unfolded');
            $('.click-arrow').addClass('hidden');
            $('body').addClass('modal-open');
        } else if (clickCount === 3) {
            $('.card').removeClass('unfolded');
            $('.envelope').removeClass('hide open');
            $('.flap, .seal-heart, .inside').removeClass('open');
            $('.click-arrow').removeClass('hidden');
            $('body').removeClass('modal-open');
            clickCount = 0;
        }
    });
});
