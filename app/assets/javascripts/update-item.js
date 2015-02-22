$(document).on('click','.edit-item', function () {
  var parent = $(this).parent();
  if  ($('.update_item_form', parent).is(':hidden')) {
    $('.edit-item', parent).text('cancel');
    $('h3', parent).toggle();
    $('.update_item_form', parent).show( 300 );
  }
  else {
    $('.edit-item', parent).text('edit');
    $('.update_item_form', parent).hide( 300 );
    $('#item_name', this).val('');
    $('h3', parent).show( 200 );
    var oldName = $('h3', parent).text();
    $('#item_name', parent).val(oldName);
  };
});

$(document).on('submit','.update_item_form', function (event) {
  event.preventDefault();
    var values = $(this).serialize(),
      url = $(this).attr('action');

      console.log(values)
  $.ajax({
    type: "POST",
    url: url,
    data: values,
    dataType: "JSON"
  });
  var newName = $('input#item_name', this).val(),
    parent = $(this).parent();

  $('h3', parent).text(newName);
  $('.update_item_form', parent).hide ( 300 );
  $('.edit-item', parent).text('edit');
  $('h3', parent).show( 200 );
});
