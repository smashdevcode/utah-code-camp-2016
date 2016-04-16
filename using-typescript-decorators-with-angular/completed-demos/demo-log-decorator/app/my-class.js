System.register([], function(exports_1) {
    var MyClass;
    return {
        setters:[],
        execute: function() {
            MyClass = (function () {
                function MyClass(myProp) {
                    this.myProp = myProp;
                }
                MyClass.prototype.myMethod = function (arg1, arg2) {
                    console.log('Executing myMethod');
                    return "Message -- arg1: " + arg1 + ", arg2: " + arg2;
                };
                return MyClass;
            })();
            exports_1("MyClass", MyClass);
        }
    }
});
