$(function(){
    'use strict';
    
    var textPar = $('#paragraf').text();
    console.log(textPar);
    
    $('.paragraf').text(textPar + ' dodany'); // nadpisujemy tekst paragrafu 2 tekstem z paragrafu 1
    
    $('.paragrafnext').html('<strong>TEXT</strong>');
    
    /*append i prepend będą działaćwewnątrz selektora, a after i before na zewnątrz*/
    
    $('#first').append(' dodaj do nagłówka');
    $('#first').after(' dodaj za nagłówkiem');
    
    var przedNaglowkiem = $('div').html();
    console.log(przedNaglowkiem);
    
    $('#first').before(przedNaglowkiem);
    
    $('strong').remove();
    
    $('h3').empty();
    
    $('p').css({'background-color': 'red', 'color': 'white'});
    
    var poleTekstowe = $('input').val();
    console.log(poleTekstowe);
    
    $('input').val(textPar);
    
    $('h2').addClass('blue');
    
    $('p').removeClass('paragraf');
    
    $('p').removeAttr('Class');
    
    
});