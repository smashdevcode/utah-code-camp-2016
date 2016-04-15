System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HeroesComponent;
    return {
        setters:[],
        execute: function() {
            HeroesComponent = (function () {
                function HeroesComponent(_dataService) {
                    this._dataService = _dataService;
                }
                HeroesComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HeroesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._dataService.getHeroes().then(function (heroes) {
                        _this.blueHeroes = heroes.filter(function (hero) { return hero.team === 'Blue'; });
                        _this.redHeroes = heroes.filter(function (hero) { return hero.team === 'Red'; });
                    });
                };
                return HeroesComponent;
            }());
            exports_1("HeroesComponent", HeroesComponent);
        }
    }
});
//# sourceMappingURL=heroes.component.js.map