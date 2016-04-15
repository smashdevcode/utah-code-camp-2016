System.register(['./my-class'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var my_class_1;
    var myClass;
    return {
        setters:[
            function (my_class_1_1) {
                my_class_1 = my_class_1_1;
            }],
        execute: function() {
            myClass = new my_class_1.MyClass();
            console.log(myClass.myProp);
            myClass.myProp = 'new property value';
            console.log(myClass.myProp);
        }
    }
});
