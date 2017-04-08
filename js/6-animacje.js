$(function(){
    'use strict';
    $('h1').hide(5000).show(3000);
    $('h2').fadeOut(5000).fadeIn(3000);
   
    slide();
    
    function slide(){
         $('h3').slideUp(5000).slideDown(3000, slide); // jak się skończy funkcja ,to zacznij funkcję slide(funkcja wywołuje funkcję)
    }
});