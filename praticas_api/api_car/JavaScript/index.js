$(document).ready(function() {
    getCars();
  });

function getCars() {
    $('#cars-container').empty();

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://127.0.0.1:3000/car/",
      "method": "GET"
    };

    $.ajax(settings).done(function(response) {
      var car = response.cars;

      for (let index = 0; index < car.length; index++) {

        var carHtml = `
        <div class="col" >

          <div class="card bg-info">

            <div class="card-body">
              <h5 class="card-title">${car[index].brand}</h5>
              <p class="card-text">${car[index].model}</p>
            </div>

            <ul class="list-group list-group-flush">
              <li class="list-group-item">Cor: ${car[index].color}</li>
              <li class="list-group-item">Ano: ${car[index].year}</li>
            </ul>

            <div class="card-body" style=" display: flex; justify-content: space-around;">
            <a class="btn btn-warning" onclick="pegarIdCar('${car[index]._id}')">Editar Carro</a>
            <a class="btn btn-danger" onclick="confirmDelete('${car[index]._id}')">Deletar Carro</a>
            </div>

          </div>
        </div>
        `;

        $('#cars-container').append(carHtml);
      }
    });
  }

  function pegarIdCar(id) {
    localStorage.setItem('id_car', id);
    window.location.href = "car_edit.html";
}

  function confirmDelete(id) {
    localStorage.setItem('id_car', id);
    var confirmation = confirm("Você tem certeza que deseja deletar este Carro?");
    if (confirmation) {
      deleteCar();
    }
  }

function deleteCar() {
      //var productId = $('#car-id').val();
      const id_car = localStorage.getItem('id_car');
      var settings = {
        async: true,
        crossDomain: true,
        url: `http://127.0.0.1:3000/car/delete/${id_car}`,
        method: "DELETE"
      };

      $.ajax(settings).done(function(response) {
        showAlert(response.status, response.mssg);
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