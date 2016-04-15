System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HeroDetailComponent;
    return {
        setters:[],
        execute: function() {
            HeroDetailComponent = (function () {
                function HeroDetailComponent(_router, _dataService) {
                    this._router = _router;
                    this._dataService = _dataService;
                    this.hero = {
                        name: '',
                        team: 'Blue'
                    };
                }
                HeroDetailComponent.prototype.addHero = function () {
                    var _this = this;
                    return this._dataService.addHero(this.hero)
                        .then(function () {
                        _this._router.navigate(['Heroes']);
                    });
                };
                return HeroDetailComponent;
            }());
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
//# sourceMappingURL=hero-detail.component.js.map