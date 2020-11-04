$(function() {
    $(document).ready(function(){
        $('.slider').bxSlider({
            auto: true,
            pause: 10000,
        });
    });
})

$('#prof-title').hover(
    function() {
        $('#prof-text').css('display', 'block').show();
    },
    function() {
        $('#prof-text').css('display', 'none');
    }
);

$('#msg-title').hover(
    function() {
        $('#msg-text').css('display', 'block').show();
    },
    function() {
        $('#msg-text').css('display', 'none');
    }
);