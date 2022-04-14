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