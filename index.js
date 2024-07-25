$(document).ready(function() {
    $('a.nav-link').on('click', function(e) {
        e.preventDefault();
        $('.form-section').hide();
        var target = $(this).attr('href');
        $(target).show();
    });

    $('input[name="status"]').on('change', function() {
        if ($('#refugee').is(':checked')) {
            $('#refugee-info').show();
            $('#nin-info').hide();
        } else if ($('#ugandan').is(':checked')) {
            $('#refugee-info').hide();
            $('#nin-info').show();
        }
    });

    $('input[name="business-status"]').on('change', function() {
        if ($('#yes-business').is(':checked')) {
            $('#business-details').show();
            $('#number-of-employees').show();
        } else {
            $('#business-details').hide();
            $('#number-of-employees').hide();
        }
    });

    $('input[name="training-status"]').on('change', function() {
        if ($('#yes-training').is(':checked')) {
            $('#training-program').show();
            $('#skills-obtained').show();
        } else {
            $('#training-program').hide();
            $('#skills-obtained').hide();
        }
    });
});






