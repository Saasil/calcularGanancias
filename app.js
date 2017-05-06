var app = angular.module('agenda', []);

app.controller('textos', function($scope, $document){

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
    $scope.cantArt = [];
    $scope.multiplicacionBoleta;
    $scope.cantidades = new Array(10);
<<<<<<< HEAD
    $scope.selected = "1";
=======
>>>>>>> 98c10a2aefba2cf8434d71bc282aff3c01682b28
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
      $scope.cantArt[x] = 1;
    }
    // console.log('ejecutando loopdos, mostrame cantArt', $scope.cantArt);
  };

  $scope.calcular = function(){
    $scope.total = 0;
    for(x = 0 ; x < $scope.nombreVerduraBoleta.length ; x++){
      for (y = 0; y < $scope.nombreVerduraPago.length ; y++){
        if ($scope.nombreVerduraBoleta[x] == $scope.nombreVerduraPago[y]) {
          $scope.multiplicacionBoleta = $scope.precioBoleta[x] * $scope.cantArt[x];
          $scope.multiplicacionPago = $scope.precioPago[y] * $scope.cantArt[x];
          //$scope.resultado[x] = $scope.precioBoleta[x] - $scope.precioPago[y];
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
  // $scope.testear();

});
