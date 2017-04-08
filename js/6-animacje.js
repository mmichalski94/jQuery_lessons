$(function(){
    'use strict';
    $('h1').hide(5000).show(3000);
    $('h2').fadeOut(5000).fadeIn(3000);
    
    var rand = Math.floor((Math.random()*100));
    console.log(rand);
   
   /* slide();
    
    function slide(){
         $('h3').slideUp(5000).slideDown(3000, slide); // jak się skończy funkcja ,to zacznij funkcję slide(funkcja wywołuje funkcję - callback)
    }*/
    
    $('h3').animate({'font-size' : '1em', 'margin-left' : rand + '100px'}, 2000, parBack);
    
    function parBack(){
        $('p').css('background', 'red');
    }
});