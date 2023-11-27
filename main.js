// const nav1 = document.querySelector(".nav1")
// const downMenu1 = document.querySelector(".downMenu1")

// let navSub = true;
// function navOnclick1 () {
//    if(subToggle){
//       navSub=!navSub;
//    }else{
//       navSub=!navSub;
//    }
// }
// nav1.addEventListener("click", navOnclick1)


$(document).ready(function(){
   // gnb 드롭다운메뉴
   $(".nav1").hover(function(){
      $(".downMenu1_wrap").stop().slideDown("fast");
   },function(){
      $(".downMenu1_wrap").stop().slideUp("fast");
   });

   $(".nav2").hover(function(){
      $(".downMenu2_wrap").stop().slideDown("fast");
   },function(){
      $(".downMenu2_wrap").stop().slideUp("fast");
   });

   $(".nav5").hover(function(){
      $(".downMenu3_wrap").stop().slideDown("fast");
   },function(){
      $(".downMenu3_wrap").stop().slideUp("fast");
   });

   $(".nav6").hover(function(){
      $(".downMenu4_wrap").stop().slideDown("fast");
   },function(){
      $(".downMenu4_wrap").stop().slideUp("fast");
   });

   // 메인메뉴 슬라이드
});


