$(document).on('click','#edit-list-name',function () {
    $('#list-name-form').toggle();
    $('#edit-list-name').toggle();
    $('#list-name-current').toggle();
  });

$(document).on('click','#list-name-form #cancel-edit-list-name', function () {
    $('#list-name-form').toggle();
    $('#edit-list-name').toggle();
    $('#list-name-current').toggle();
  });

$(document).ready(function() {
  $('#list-name-form form').submit(function() {
    $('#list-name-form').toggle();
    $('#edit-list-name').toggle();
    $('#list-name-current').toggle();
  });
});
