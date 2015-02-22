$(document).on('click','#add-list',function () {
    if  ($('.new_list_form').is(':hidden')) {
      $('#add-list').text('cancel');
      $( 'li:hidden' ).show( 300 );
    }
    else {
      $('#add-list').text('+');
      $('.new_list_form').hide( 300 );
      $('#list_name').val('');
    };
});


$(document).on('submit','.new_list_form form', function (event) {
  event.preventDefault();

  var values = $(this).serialize(),
      url = $(this).attr('action');

  $.ajax({
    type: "POST",
    url: url,
    data: values,
    dataType: "HTML"
  }).done(function(response) {
    $(response).insertAfter('.new_list_form');
    $('.new_list_form').hide( 200 );
    $('#list_name').val('');
    $('#add-list').text('+');
  });
});
