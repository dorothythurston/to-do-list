$(document).on('click','.edit-item-name', function () {
    var parent = $(this).parent();
    $('.item_name_update_form', parent).toggle();
    $('.edit-item-name', parent).toggle();
    $('.cancel-edit-item-name', parent).toggle();
    $('h3', parent).toggle();
  });

$(document).on('submit','.item_name_update_form', function () {
  var parent = $(this).parent();
  $('.item_name_update_form', parent).toggle();
  $('.edit-item-name', parent).toggle();
  $('.cancel-edit-item-name', parent).toggle();
  $('h3', parent).toggle();
});

$(document).on('click','.cancel-edit-item-name', function () {
  var parent = $(this).parent();
  $('.item_name_update_form', parent).toggle();
  $('.edit-item-name', parent).toggle();
  $('h3', parent).toggle();
  $('.cancel-edit-item-name', parent).toggle();
  var oldName = $("h3", parent).text();
  $("#item_name", parent).val(oldName);
});
