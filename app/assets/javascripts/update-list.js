$(document).on('click','h2',function () {
  if  ($('.update_list_form').is(':hidden')) {
    $('h2').toggle();
    $('.update_list_form').show( 300 );
    $('.delete-list').toggle();
    $('#add-item').hide( 100 );
  }
  else {
    $('.update_list_form').hide( 300 );
    $('#add-item').show( 300 );
    $('.delete-list').hide( 300 );
    $('h2').toggle();
    var oldName = $("h2").text();
    $('#list_name').val(oldName);
  }
});

$(document).on('submit','.update_list_form', function (event) {
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
  $('.update_list_form').hide( 300 );
  $('.delete-list').hide( 300 );
  $('h2').show( 200 );
  $('#add-item').show( 300 );
});
