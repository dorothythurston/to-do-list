$(document).on('click','.item-name', function () {
  var parent = $(this).parent();
  if  ($('.update_item_form', parent).is(':hidden')) {
    $('h3', parent).toggle();
    $('.update_item_form', parent).toggle();
    $('.delete-item', parent).show( 300 );
  }
  else {
    $('.update_item_form', parent).hide( 300 );
    $('h3', parent).show( 200 );
    $('.delete-item', parent).hide( 200 );
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
  $('.delete-item', parent).hide( 200 );
  $('h3', parent).show( 200 );
});
