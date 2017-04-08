$(function(){
    'use strict';
    
    $('body').find('p').eq(1).css('color', 'white');
    
    console.log($('body').find('p').eq(1));
    
    $('p').each(function(index){
       $(this).css('font-size', size*(index+1) +'px');
    });
});