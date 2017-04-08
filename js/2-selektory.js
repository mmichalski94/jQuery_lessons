// funkcja document.ready() -  wersja skrócona
$(function(){
    'use strict';
    
    var paragraphs = $('p');
    console.log(paragraphs);
    
    var paragrapOne = $('#first');
    console.log(paragrapOne);
    
    var paragrapTwo = $('.paragraf');
    console.log(paragrapTwo);
    
    var paragrapNot = $('p:not(.paragraf)');
    console.log(paragrapNot);
    
    paragraphsInDiv = $('div > p');
    console.log(paragraphsInDiv); // bezpośrednie potomstwo diva
    
   /* paragraphsInDiv = $('div p');
    console.log(paragraphsInDiv); wszystkie p w divie bez znaczenia na jakim poziomie zagnieżdżenia */
    
});