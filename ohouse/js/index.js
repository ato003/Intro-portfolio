$(function () {
  const $tabs = $('.best_tab li a');
  const $containers = $('.container_b');

  // 초기 설정
  const $selectedTab = $tabs.filter('.selected');
  if ($selectedTab.length) {
    $containers.not($($selectedTab.attr('href'))).hide();
  } else {
    $containers.hide().first().show();
  }

  $tabs.click(function () {
    const target = $(this).attr('href');

    $tabs.removeClass('selected');
    $(this).addClass('selected');

    $containers.hide();
    $(target).show();

    return false;
  });

});
