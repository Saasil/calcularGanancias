var app = angular.module('agenda', []);

app.controller('textos', function($scope, $document){

 $scope.inicio = function(){
  $scope.cantidadArtPagos;
  $scope.inputsPagos = [];
  $scope.inputsBoleta = [];
  $scope.resultado = [];
  $scope.precioPago = [];
  $scope.nombreVerduraPago = [];
  $scope.cantArtBoleta;
  $scope.nombreVerduraBoleta = [];
  $scope.precioBoleta = [];
  $scope.cantArt = [];
  $scope.multiplicacionBoleta;
  $scope.filter = new Array(10);
  }

  $scope.loop = function (){

    for(x = 0  ; x < $scope.cantidadArtPagos ; x++){
      $scope.inputsPagos[x] = null;
    }
  };

  $scope.loopdos = function (){

    for(x = 0  ; x < $scope.cantArtBoleta ; x++){
      $scope.inputsBoleta[x] = null;
    }
  };

 $scope.calcular = function(){

   $scope.total = 0;

   for(x = 0 ; x < $scope.nombreVerduraBoleta.length ; x++){

     for (y = 0; y < $scope.nombreVerduraPago.length ; y++){

       if ($scope.nombreVerduraBoleta[x] == $scope.nombreVerduraPago[y]){
         alert("sorete");
         $scope.multiplicacionBoleta = $scope.precioBoleta[x] * $scope.cantArt[x];
         $scope.multiplicacionPago = $scope.precioPago[y] * $scope.cantArt[x];
         //$scope.resultado[x] = $scope.precioBoleta[x] - $scope.precioPago[y];
         $scope.resultado[x] = $scope.multiplicacionBoleta - $scope.multiplicacionPago;
         $scope.total = $scope.total + $scope.resultado[x];
       }
     }
   }
 }

});
