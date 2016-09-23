(function () {

  describe('Service: calculadoraService', function () {

    var calculadoraService;

    beforeEach(module('starter'));

    beforeEach(inject(function (_calculadoraService_) {
      calculadoraService = _calculadoraService_;
    }));

    it('soma deve retorna 2 quando somar 1 + 1', function () {
      expect(calculadoraService.soma(1, 1)).toBe(2);
    });

  });

})();