$(document).on('click','#edit-list-name',function () {
    $('#list-name-form').toggle();
    $('#edit-list-name').toggle();
    $('#list-name-current').toggle();
  });

$(document).on('click','#list-name-form #cancel-edit-list-name', function () {
    $('#list-name-form').toggle();
    $('#edit-list-name').toggle();
    $('#list-name-current').toggle();
    var oldName = $("#list-name-current").text();
    $("#list_name").val(oldName);
  });

$(document).on('submit','#list-name-form form', function () {
  $('#list-name-form').toggle();
  $('#edit-list-name').toggle();
  $('#list-name-current').toggle();
});
