//제이쿼리도 비동기를 강조
$(function(){
    //버튼을 누를때에 기능은
    /*$("button").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000)
    })*/
    $("button").click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000)
    })





})








