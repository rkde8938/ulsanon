let cubeHeight = function () {
  $('.cube100').each(function () {
    let cubeWidth = $(this).width();
    $(this).height(cubeWidth);
  });

  $('.cube50').each(function () {
    let cubeWidth = $(this).width();
    $(this).height(cubeWidth * 2 + 5);
  });

  $('.cube25').each(function () {
    let cubeWidth = $(this).width();
    $(this).height(cubeWidth);
  });

  $('.cube100h').each(function () {
    let cubeWidth = $(this).width();
    $(this).height(cubeWidth / 2);
  });
};

cubeHeight();
$(window).resize(cubeHeight);


// 카피라이트 현재 년도 표시
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 현재의 년도 (2022)

//드롭다운 메뉴 작동
$('.menu__button').click(function () {
  let dropdownMenu = $('#dropdown_menu ul');
  if (dropdownMenu.height() > 0) {
    dropdownMenu.css('height', '0');
  } else {
    dropdownMenu.css('height', '312px');
  };
});
