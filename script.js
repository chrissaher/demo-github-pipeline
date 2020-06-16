var displayOperation = (data) => {
  res = data.res
  console.log(res)
  $('#result').val(res)
}

var displayError = () => {
  console.log("Unexpected error")
}

var calculate = (n1, n2) => {
  $.ajax({
    url: '/calculate',
    data: {'n1': n1,'n2': n2},
  }).done((data) => {
    displayOperation(data)
  }).fail(() => {
    displayError()
  })
}

$(() => {

  $('#submit').click(() => {
    var n1 = $('#n1').val()
    var n2 = $('#n2').val()
    calculate(n1, n2)
	});
});
