function postCars() {
  // Coleta os dados do formulário
  var car = {
    brand: $('#brand').val(),
    model: $('#model').val(),
    color: $('#color').val(),
    year: $('#year').val(),
  };

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://127.0.0.1:3000/car/add",
    "method": "POST",
    "contentType": "application/json",
    "data": JSON.stringify(car)
  };

  $.ajax(settings).done(function(response) {
    // Limpa o container de status
    $('#status-container').empty();
    
    // Exibe a mensagem e o status como alerta
    var alertHtml = `
      <div class="alert alert-info alert-dismissible fade show" role="alert">
        <strong>Status:</strong> ${response.status}<br>
        <strong>Mensagem:</strong> ${response.mssg}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    `;

    $('#status-container').append(alertHtml);
  }).fail(function(jqXHR, textStatus, errorThrown) {
    // Limpa o container de status
    $('#status-container').empty();

    // Exibe a mensagem de erro como alerta
    var errorHtml = `
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Erro ao adicionar o car:</strong> ${textStatus}<br>
        <strong>Detalhes:</strong> ${errorThrown}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    `;

    $('#status-container').append(errorHtml);
  });
}

