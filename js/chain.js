$(document).ready(function(){   //비동기  $(function(){})->같음
    $("button#re").click(function(){
        $("#p1").css("color","red")
        .slideUp(2000)
        .slideDown(2000)
        .css("fontSize","10rem")
    });
})



