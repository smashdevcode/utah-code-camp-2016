System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logClass(target) {
        var original = target;
        function construct(constructor, args) {
            var c = function () {
                return constructor.apply(this, args);
            };
            c.prototype = constructor.prototype;
            return new c();
        }
        var f = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            console.log("New: " + original.name);
            return construct(original, args);
        };
        f.prototype = original.prototype;
        return f;
    }
    exports_1("logClass", logClass);
    function logClassWithArgs(filter) {
        return function (target) {
            var original = target;
            function construct(constructor, args) {
                var c = function () {
                    return constructor.apply(this, args);
                };
                c.prototype = constructor.prototype;
                return new c();
            }
            var f = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                console.log("Filter Arg: " + filter.arg + ", New: " + original.name);
                return construct(original, args);
            };
            f.prototype = original.prototype;
            return f;
        };
    }
    exports_1("logClassWithArgs", logClassWithArgs);
    function logProperty(target, propertyKey) {
        var _val = target[propertyKey];
        var getter = function () {
            console.log("Get: " + propertyKey + " => " + _val);
            return _val;
        };
        var setter = function (newVal) {
            console.log("Set: " + propertyKey + " => " + newVal);
            _val = newVal;
        };
        if (delete target[propertyKey]) {
            Object.defineProperty(target, propertyKey, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true
            });
        }
    }
    exports_1("logProperty", logProperty);
    function logMethod(target, propertyKey, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            console.log("The method args are: " + JSON.stringify(args));
            var result = originalMethod.apply(this, args);
            console.log("The return value is: " + result);
            return result;
        };
        return descriptor;
    }
    exports_1("logMethod", logMethod);
    return {
        setters:[],
        execute: function() {
        }
    }
});
