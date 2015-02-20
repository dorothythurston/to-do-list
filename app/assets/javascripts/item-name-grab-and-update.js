$(document).on('submit','.item-name-form form', function (event) {
  event.preventDefault();
    var values = $(this).serialize(),
      url = $(this).attr('action');
  $.ajax({
    type: "POST",
    url: url,
    data: values,
    dataType: "JSON"
  });
  /*var newName = $(this).find('list_item_name').text();
  console.log(newName)*/
  var r = jQuery(".item-name-current",this).text();
  console.log(r)
});
