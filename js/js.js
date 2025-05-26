$(function(){ //문서가 로드되기전에 실행되는걸 방지
    $("#hide").click(function(){
        $("p.one").hide(1000); //웹에서는 0이 하나더 붙어요 (1초)
    });
    $("#show").click(function(){
        $("p.one").show(2000);
    })

    //토글버튼
    $("button.control").click(function(){
        $("mark").toggle();
    });
})



