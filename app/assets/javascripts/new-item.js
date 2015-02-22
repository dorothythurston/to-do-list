$(document).on('click','#add-item',function () {
    if  ($('.new_item_form').is(':hidden')) {
      $('#add-item').text('cancel');
      $('.new_item_form').show( 300 );
    }
    else {
      $('#add-item').text('add');
      $('.new_item_form').hide( 300 );
      $('#item_name').val('');
    };
});

$(document).on('submit','.new_item_form form', function (event) {
  event.preventDefault();

  var values = $(this).serialize(),
      url = $(this).attr('action');

  $.ajax({
    type: "POST",
    url: url,
    data: values,
    dataType: "HTML"
  }).done(function(response) {
    $('.new_item_form').toggle ();
    $('#add-item').text('add');
    $('#item_name').val('');
    $(response).insertAfter('.new_item_form');
  });
});
