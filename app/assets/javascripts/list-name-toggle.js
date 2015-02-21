$(document).on('click','#edit-list-name',function () {
    $('.list_name_update_form').toggle();
    $('#edit-list-name').toggle();
    $('h2').toggle();
  });

$(document).on('click','#cancel-edit-list-name', function () {
    $('.list_name_update_form').toggle();
    $('#edit-list-name').toggle();
    $('h2').toggle();
    var oldName = $("h2").text();
    $("#list_name").val(oldName);
  });

$(document).on('click','.cancel-edit-list-name', function () {
  $('.list_name_update_form').toggle();
  $('#edit-list-name').toggle();
  $('h2').toggle();
});
