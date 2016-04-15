System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MyClass;
    return {
        setters:[],
        execute: function() {
            MyClass = (function () {
                function MyClass() {
                    this.myProp = 'property value';
                }
                return MyClass;
            }());
            exports_1("MyClass", MyClass);
        }
    }
});
