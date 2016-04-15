
// Class Decorator

export function logClass(target: any) {
    // save a reference to the original constructor
    var original = target;

    // a utility function to generate instances of a class
    function construct(constructor, args) {
        var c: any = function () {
            return constructor.apply(this, args);
        }
        c.prototype = constructor.prototype;
        return new c();
    }

    // the new constructor behavior
    var f: any = function (...args) {
        console.log(`New: ${original.name}`);
        return construct(original, args);
    }

    // copy prototype so intanceof operator still works
    f.prototype = original.prototype;

    // return new constructor (will override original)
    return f;
}

// Class Decorator with Args

export function logClassWithArgs(filter: { arg: string }) {
    return (target: any) => {
        // save a reference to the original constructor
        var original = target;

        // a utility function to generate instances of a class
        function construct(constructor, args) {
            var c: any = function () {
                return constructor.apply(this, args);
            }
            c.prototype = constructor.prototype;
            return new c();
        }

        // the new constructor behavior
        var f: any = function (...args) {
            console.log(`Filter Arg: ${filter.arg}, New: ${original.name}`);
            return construct(original, args);
        }

        // copy prototype so intanceof operator still works
        f.prototype = original.prototype;

        // return new constructor (will override original)
        return f;
    }
}

// Property Decorator

export function logProperty(target: Object, propertyKey: string) {
    // property value
    var _val = target[propertyKey];

    // property getter
    var getter = function () {
        console.log(`Get: ${propertyKey} => ${_val}`);
        return _val;
    };

    // property setter
    var setter = function (newVal) {
        console.log(`Set: ${propertyKey} => ${newVal}`);
        _val = newVal;
    };

    // delete the property
    if (delete target[propertyKey]) {
        // create new property with getter and setter
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}

// Method Decorator

// interface TypedPropertyDescriptor<T> {
//     enumerable?: boolean;
//     configurable?: boolean;
//     writable?: boolean;
//     value?: T;
//     get?: () => T;
//     set?: (value: T) => void;
// }

export function logMethod(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    // save a reference to the original method
    var originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        console.log(`The method args are: ${JSON.stringify(args)}`); // pre
        var result = originalMethod.apply(this, args);               // run and store the result
        console.log(`The return value is: ${result}`);               // post
        return result;                                               // return the result of the original method
    };

    return descriptor;
}

// you can use a decorator factory to create a decorator that can be used
// for any situation... class, property, parameter, or method

// function log(...args : any[]) {
//     switch(args.length) {
//         case 1:
//             return logClass.apply(this, args);
//         case 2:
//             return logProperty.apply(this, args);
//         case 3:
//             if(typeof args[2] === "number") {
//                 return logParameter.apply(this, args);
//             }
//             return logMethod.apply(this, args);
//         default:
//             throw new Error("Decorators are not valid here!");
//     }
// }
