System.register(['./readonly-decorator'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var readonly_decorator_1;
    var MyClass;
    return {
        setters:[
            function (readonly_decorator_1_1) {
                readonly_decorator_1 = readonly_decorator_1_1;
            }],
        execute: function() {
            MyClass = (function () {
                function MyClass() {
                    this.myProp = 'property value';
                }
                __decorate([
                    readonly_decorator_1.readonly, 
                    __metadata('design:type', String)
                ], MyClass.prototype, "myProp", void 0);
                return MyClass;
            }());
            exports_1("MyClass", MyClass);
        }
    }
});
