$(document).ready(function(){    //문서가 실행되기 전에 로드 되는것을 방지
    $("button.rect2").click(function(){
        $("div.rect").animate({
            left:'+=250px', //버튼을 클릭할때 마다 증가한다
            opacity:'+=0.5', // +=는 한번씩 클릭할때바다 계속 증가한다
            height:'+=150px',
            width:'+=150px',
            background:'violet',  //컬러값은 안들어가,컬러 플러그를 따로 다운 받아야 적용이 됨
        }); //rect라는 클래스를 가진 div에 왼쪽으로 250px씩 이동한다는것
    });

    $("button.sh2").click(function(){
        $("div.sh").animate({
            height:'toggle',

        })
    })
});


$(function(){ //비동기로 설정
    $("button.time2").click(function(){
        //비동기로 실행될 박스에 대해 변수설정
        var d = $("div.time"); //변수 div는 time이라는 클래스를 가진 d div같은 요소 명칭을 호출하면 에러 발생할수 있으므로 다른 이름 추천
        //아래부터가 큐
        d.animate({height:'300px', opacity:'.4'}, "slow"); //1
        d.animate({width:'300px', opacity:'.8'}, "slow"); //2
        d.animate({height:'+=100px', opacity:'.4'}, "slow"); //3
        d.animate({width:'+=100px', opacity:'.8'}, "slow"); //4
        d.animate({borderRadius:'50%',opacity:'.9'},"fast"); //5
    })
})

$(function(){
    $("button.typo2").click(function(){
        let sec=$("section.typo");
        sec.animate({left:'100px',width:'+=100px'},"fast");
        sec.animate({fontSize:'3rem'},"slow");
    })
})


