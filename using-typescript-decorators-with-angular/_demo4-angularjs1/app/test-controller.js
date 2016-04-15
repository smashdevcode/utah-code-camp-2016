var AngularDemo;
(function (AngularDemo) {
    var TestController = (function () {
        function TestController() {
        }
        TestController.prototype.getContent = function () {
            return 'Hello from Test controller!';
        };
        return TestController;
    }());
    AngularDemo.TestController = TestController;
    angular.module('app').controller('TestController', TestController);
})(AngularDemo || (AngularDemo = {}));
//# sourceMappingURL=test-controller.js.map