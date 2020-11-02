$(function() {
    $('#clock').click(function() {
        $(this).text((new Date()).toLocaleString());
    });
});

$(function() {
    $(document).ready(function(){
        $('.slider').bxSlider({
            auto: true,
            pause: 10000,
        });
    });
})

