var AngularDemo;
(function (AngularDemo) {
    function injectable(target) {
        angular.module('app').service(target.name, target);
    }
    AngularDemo.injectable = injectable;
})(AngularDemo || (AngularDemo = {}));
//# sourceMappingURL=injectable-decorator.js.map