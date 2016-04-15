var AngularDemo;
(function (AngularDemo) {
    function controller(config) {
        return function controller(target) {
            var providers = config.providers.map(function (provider) {
                return provider.name;
            });
            target.$inject = providers;
            angular.module('app').controller(target.name, target);
        };
    }
    AngularDemo.controller = controller;
})(AngularDemo || (AngularDemo = {}));
//# sourceMappingURL=controller-decorator.js.map