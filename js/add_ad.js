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