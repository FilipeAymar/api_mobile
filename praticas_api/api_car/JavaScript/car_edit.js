const id_car = localStorage.getItem('id_car');

console.log(id_car)

$(document).ready(function() {
  getCars();
});


function getCars() {
  $('#products-container').empty();

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": `http://127.0.0.1:3000/car/${id_car}`,
    "method": "GET"
  };

  $.ajax(settings).done(function(response) {
    var cars = response.cars;

      $('#brand').val(cars.brand),
      $('#model').val(cars.model),
      $('#color').val(cars.color),
      $('#year').val(cars.year)
    
  });
}

function putCars() {
  var produto = {
    brand: $('#brand').val(),
    model: $('#model').val(),
    color: $('#color').val(),
    year: $('#year').val(),
  };

  var settings = {
    async: true,
    crossDomain: true,
    url: `http://127.0.0.1:3000/car/update/${id_car}`,
    method: "PUT",
    contentType: "application/json",
    data: JSON.stringify(produto)
  };

  $.ajax(settings).done(function(response) {
    showAlert( response.status, response.mssg);
  }).fail(function(jqXHR, textStatus, errorThrown) {
    showAlert('danger', textStatus, errorThrown);
  });
}

function showAlert(status, mssg) {
  alert("Status: "+status +" "+"Mensagem: "+mssg)
    setTimeout(function() {
    // Redireciona para outra página
    window.location.href = "index.html";
  }, 1500);
}
