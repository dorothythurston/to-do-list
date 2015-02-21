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
  var newName = document.getElementById('list_name').value;
  $("h2").text(newName);
});
