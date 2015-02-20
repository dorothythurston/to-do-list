$(document).ready(function () {
  $('#list-name-form form').submit(function(event) {
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
    $("#list-name-current").text(newName);
  });
});
