$(document).on('click','.edit-item-name', function () {
  var parent = $(this).parent();
  if  ($('.item_name_update_form', parent).is(':hidden')) {
    $('.edit-item-name', parent).text('cancel');
    $('h3', parent).toggle();
    $('.item_name_update_form', parent).show( 300 );
  }
  else {
    $('.edit-item-name', parent).text('edit item name');
    $('.item_name_update_form', parent).hide( 300 );
    $('#item_name', this).val('');
    $('h3', parent).show( 200 );
    var oldName = $('h3', parent).text();
    $('#item_name', parent).val(oldName);
  };
});

$(document).on('submit','.item_name_update_form', function (event) {
  event.preventDefault();
    var values = $(this).serialize(),
      url = $(this).attr('action');
  $.ajax({
    type: "POST",
    url: url,
    data: values,
    dataType: "JSON"
  });
  var newName = $('input#item_name', this).val(),
     parent = $(this).parent();

  $('h3', parent).text(newName);
  $('.item_name_update_form', parent).hide ( 300 );
  $('.edit-item-name', parent).text('edit item');
  $('h3', parent).show( 200 );
});
