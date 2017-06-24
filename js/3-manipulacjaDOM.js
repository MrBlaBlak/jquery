'use strict';
jQuery(document).ready( function(){
    var tekstParagrafuPierwszego = $('#paragraph').text();
    console.log(tekstParagrafuPierwszego);
    $(".paragraf").text(tekstParagrafuPierwszego);
    $(".paragrafnext").html("To jest <strong>paragraf</strong> z dodanym <br> HTML ");
    $(".paragrafnext").append("Treść za selektorem");
    $("strong").remove();
    $(".paragraf").empty();
    $(".paragrafnext").css({'font-size': '3em', 'color': 'red'});
    $('h1').addClass('blue');
    $('h1').attr("imie", "Marcin");
});