$(function () {
  // 초기 셋팅 - #login1 보여주고 login2 숨김
  $('#login1').show();
  $('#login2').hide();

  // 슬라이더 위치 초기화 (처음은 왼쪽)
  const $slider = $('.login_slider');
  $slider.css('left', '0%');

  $('.login_list a').click(function (e) {
    e.preventDefault();

    $('.login_list a').removeClass('selected');
    $(this).addClass('selected');

    const target = $(this).attr('href');

    // 슬라이더 위치 변경
    const index = $(this).parent().index(); // 0 or 1
    $slider.css('left', (index * 50) + '%'); // 0% 또는 50%

    // 페이드 아웃 / 인 효과
    $('#login_wrap > div:visible').fadeOut(200, function () {
      $(target).fadeIn(200, function () {
        $(target).find('input:first').focus();
      });
    });
  });

  // 체크 박스
  $('input[type="checkbox"]').each(function () {
    const checkbox = $(this);
    const label = $('label[for="' + checkbox.attr('id') + '"]');

    if (checkbox.is(':checked')) {
      label.addClass('checked');
    }

    checkbox.change(function () {
      if (checkbox.is(':checked')) {
        label.addClass('checked');
      } else {
        label.removeClass('checked');
      }
    });
  });

});
