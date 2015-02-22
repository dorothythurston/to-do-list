$(document).on('click','#edit-list-name',function () {
    $('.list_name_update_form').toggle();
    $('#edit-list-name').toggle();
    $('#cancel-edit-list-name').toggle();
    $('h2').toggle();

  });

$(document).on('click','#cancel-edit-list-name', function () {
    $('.list_name_update_form').toggle();
    $('#edit-list-name').toggle();
    $('h2').toggle();
    $('#cancel-edit-list-name').toggle();
    var oldName = $("h2").text();
    $("#list_name").val(oldName);
  });

$(document).on('submit','.list_name_update_form', function () {
  $('.list_name_update_form').toggle();
  $('#edit-list-name').toggle();
  $('h2').toggle();
  $('#cancel-edit-list-name').toggle();
});
