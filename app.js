var app = angular.module('agenda', []);

app.controller('calcularGanancias', function($scope, $document){

  $scope.inicio = function(){
    $scope.cantidadArtPagos = null;
    $scope.inputsPagos = [];
    $scope.inputsBoleta = [];
    $scope.resultado = [];
    $scope.precioPago = [];
    $scope.nombreVerduraPago = [];
    $scope.cantArtBoleta = null;
    $scope.nombreVerduraBoleta = [];
    $scope.precioBoleta = [];
    $scope.multiplicacionBoleta;
    $scope.cantidades = new Array(10);
    $scope.selected = [];
  }
  $scope.inicio();

  $scope.loop = function(){
    for(x = 0  ; x < $scope.cantidadArtPagos ; x++){
      $scope.inputsPagos[x] = null;
    }
  };

  $scope.loopdos = function (){
    for(x = 0; x < $scope.cantArtBoleta ; x++){
      $scope.inputsBoleta[x] = null;
      $scope.selected[x] = "1";
    }
  };

  $scope.calcular = function(){
    $scope.total = 0;
    for(x = 0 ; x < $scope.nombreVerduraBoleta.length ; x++){

      for (y = 0; y < $scope.nombreVerduraPago.length ; y++){
        if ($scope.nombreVerduraBoleta[x] == $scope.nombreVerduraPago[y]) {
          $scope.multiplicacionBoleta = $scope.precioBoleta[x] * $scope.selected[x];
          $scope.multiplicacionPago = $scope.precioPago[y] * $scope.selected[x];
          $scope.resultado[x] = $scope.multiplicacionBoleta - $scope.multiplicacionPago;
          $scope.total = $scope.total + $scope.resultado[x];
        }
      }
    }
  }

  $scope.testear = function() {
    $scope.cantidadArtPagos = 3;
    $scope.loop();
    $scope.nombreVerduraPago = ['TOMATE'];
    $scope.precioPago = [100];
    $scope.cantArtBoleta = 2;
    $scope.loopdos();
  };
//$scope.testear();

});
