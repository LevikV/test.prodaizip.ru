$('.upload-new>.row').on('click', function() {
    $('#image-add').trigger('click');
});


$('#select-type-ad').change(function() {
    var val = $('#select-type-ad').val();
    if (val == 'Продать') {
        $('.safe-trade').css('display', 'flex');
    } else {
        $('.safe-trade').css('display', 'none');
    }
});


$('#select-category').change(function() {
    var val = $('#select-category').val();
    if (val == '1') {
        $('.tech-options').css('display', 'flex');
        $('.part-options').css('display', 'none');
    }
    if (val == '2') {
        $('.tech-options').css('display', 'flex');
        $('.part-options').css('display', 'none');
    }
    if (val == '3') {
        $('.tech-options').css('display', 'none');
        $('.part-options').css('display', 'flex');
    }
});


$('#select-vendor').change(function() {
    var val = $('#select-vendor').val();
    if (val == '3') {
        $('.user-vendor').css('display', 'block');
    } else {
        $('.user-vendor').css('display', 'none');
    }
});


$('#select-manufacturer').change(function() {
    var val = $('#select-manufacturer').val();
    if (val == '3') {
        $('.user-manufacturer').css('display', 'block');
    } else {
        $('.user-manufacturer').css('display', 'none');
    }
});


$('#select-model').change(function() {
    var val = $('#select-model').val();
    if (val == '3') {
        $('.user-model').css('display', 'block');
    } else {
        $('.user-model').css('display', 'none');
    }
});


$('#safe-trade-on').on('click', function() {
    $('.safe-trade-off-info').css('display', 'none');
    $('.safe-trade-not-access').css('display', 'block');
});


$('#safe-trade-off').on('click', function() {
    $('.safe-trade-off-info').css('display', 'block');
    $('.safe-trade-not-access').css('display', 'none');
});

$('#payment-method-wallet').on('click', function() {
    $('.payment-method-cashless').css('display', 'none');
    $('.payment-method-wallet').css('display', 'block');
});

$('#payment-method-cashless').on('click', function() {
    $('.payment-method-wallet').css('display', 'none');
    $('.payment-method-cashless').css('display', 'block');
});

$('#switch-top-color').click(function(){
    if ($(this).is(':checked')){
        $('.ad-thumb').addClass('top-color');
    } else {
        $('.ad-thumb').removeClass('top-color');
    }
});

$('#switch-top-descrip').click(function(){
    if ($(this).is(':checked')){
        $('.ad-thumb').addClass('short-descrip-on');
        $('.ad-thumb').removeClass('short-descrip-off');
    } else {
        $('.ad-thumb').addClass('short-descrip-off');
        $('.ad-thumb').removeClass('short-descrip-on');
    }
});