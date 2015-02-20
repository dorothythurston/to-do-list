$(document).on('click','.edit-item-name', function () {
    $('.item-name-form').toggle();
  });

$(document).on('submit','.item form', function () {
  $('.item-name-form').toggle();
});
