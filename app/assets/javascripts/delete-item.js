$(document).on('submit','.delete-item', function (event) {
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
