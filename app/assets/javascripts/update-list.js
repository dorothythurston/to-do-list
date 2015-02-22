$(document).on('click','#edit-list-name',function () {
  if  ($('.list_name_update_form').is(':hidden')) {
    $('#edit-list-name').text('cancel');
    $('h2').toggle();
    $('.list_name_update_form').show( 300 );
  }
  else {
    $('#edit-list-name').text('edit list name');
    $('.list_name_update_form').hide( 300 );
    $('h2').toggle();
    var oldName = $("h2").text();
    $(''#list_name').val(oldName);
  }
});

$(document).on('submit','.list_name_update_form', function (event) {
  event.preventDefault();
    var values = $(this).serialize(),
      url = $(this).attr('action');
  $.ajax({
    type: "POST",
    url: url,
    data: values,
    dataType: "JSON"
  });
  var newName = $('#list_name').val();
  $('h2').text(newName);
  $('.list_name_update_form').hide( 300 );
  $('#edit-list-name').text('edit list name');
  $('h2').show( 200 );
});
