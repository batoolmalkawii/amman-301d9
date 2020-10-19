'use strict';

$('document').ready(function () {
    // document.getElementById('firstButton');
    $('button').on('click', function () {
        $(this).siblings('ul').toggleClass('on');
    });
});