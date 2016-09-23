(function () {

  angular
    .module('starter')
    .factory('calculadoraService', calculadoraService);

  function calculadoraService() {

    return {
      soma: soma
    };

    function soma(numero1, numero2) {
      return numero1 + numero2;
    }


  }

})();