System.register(['./mock-heroes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mock_heroes_1;
    var DataService;
    return {
        setters:[
            function (mock_heroes_1_1) {
                mock_heroes_1 = mock_heroes_1_1;
            }],
        execute: function() {
            DataService = (function () {
                function DataService() {
                }
                DataService.prototype.getHeroes = function () {
                    return Promise.resolve(mock_heroes_1.HEROES);
                };
                DataService.prototype.getHeroesSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_heroes_1.HEROES); }, 2000);
                    });
                };
                DataService.prototype.addHero = function (hero) {
                    mock_heroes_1.HEROES.push(hero);
                    return Promise.resolve();
                };
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=data.service.js.map