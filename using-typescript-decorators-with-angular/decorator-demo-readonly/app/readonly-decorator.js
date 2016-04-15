System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function readonly(target, propertyKey) {
        var _val = target[propertyKey], isSet = false;
        console.log(target[propertyKey]);
        console.log(_val);
        var getter = function () {
            console.log("Get: " + propertyKey + " => " + _val);
            return _val;
        };
        var setter = function (newVal) {
            if (!isSet) {
                console.log("Set: " + propertyKey + " => " + newVal);
                _val = newVal;
                isSet = true;
            }
            else {
                throw "Unable to set property value '" + newVal + "' on readonly property '" + propertyKey + "'.";
            }
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
    exports_1("readonly", readonly);
    return {
        setters:[],
        execute: function() {
        }
    }
});
