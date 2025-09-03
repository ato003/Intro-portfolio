$(function(){
  

  // 메뉴 숨김 처리
  $('#menu_wrap').mouseleave(function(){
    $('#menu_wrap').animate({'left':'-75%'},'fast');
  });

  // 메뉴 아이콘
  //$(선택자).animate({'속성명':'속성값'},시간(ms))
  $('#top_tab a.icon_menu').click(function(){
    $('#menu_wrap').animate({'left':'0'},'normal');
  });

  // 메뉴 동작
  $('#gnb > ul > li').click(function(){
    // 1. 디자인 적용 => ** 메뉴에서 선택하면 노란색으로 바뀌게 
    // => 모든 1단 메뉴에서 클래스(on)제거 + 클릭된 메뉴만 클래스 적용
    $('#gnb > ul > li > a').removeClass('on');
    $(this).children('a').addClass('on')

    // 2. 2단 메뉴 동작 (토글링)
    // $(this).children('ul').slideToggle();

    // 2-2. 2단 메뉴 동작 (아코디언) => 2단 메뉴가 숨김 상태??
    if( $(this).children('ul').css('display') == 'none' ){
      // 모든 2단 메뉴 접음
      $('#gnb > ul > li > ul').slideUp();
    }
    $(this).children('ul').slideDown(); // 클릭 대상만 펼춰짐
  });
  

























});