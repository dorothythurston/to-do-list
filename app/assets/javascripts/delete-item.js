$(document).on('submit','.button_to', function (event) {
  event.preventDefault();
    var values = $(this).serialize(),
      url = $(this).attr('action');
  $.ajax({
    type: "DELETE",
    url: url,
    data: values,
    dataType: "JSON"
  });
  var item = $(this).parent()
  $(item).hide('slow', function(){ $(item).remove(); });
});
