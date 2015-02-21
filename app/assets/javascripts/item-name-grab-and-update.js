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
  var newName = $('input#item_name', this).val();
  $('h3', $(this).parent()).text(newName);
});