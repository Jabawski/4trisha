$(document).ready(function () {
    let clickCount = 0;

    $('.envelope').on('click', function () {
        clickCount++;

        if (clickCount === 1) {
            $('.flap').addClass('open');
            $('.seal-heart').addClass('open');
            $('.inside').addClass('open');

            confetti({
                particleCount: 200,
                spread: 160,
                origin: { y: 0.6 }
            });
        } else if (clickCount === 2) {
            $('.envelope').addClass('hide');
            $('.card').addClass('unfolded');
            $('.click-arrow').addClass('hidden'); // <- hide arrow here
        } else if (clickCount === 3) {
            $('.card').removeClass('unfolded');
            $('.envelope').removeClass('hide open');
            $('.flap, .seal-heart, .inside').removeClass('open');
            $('.click-arrow').removeClass('hidden'); // <- show arrow again
            clickCount = 0;
        }
    });
});
