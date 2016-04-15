
# Using TypeScript Decorators with Angular

## Demos

### Decorator Library Demo

Great general library of decorators.

[https://github.com/jayphelps/core-decorators.js](https://github.com/jayphelps/core-decorators.js)

## Decorators

* C#, Java, Python, and more all have support for declarative programming
* C# supports associating metadata with class and class members
* TypeScript decorators not only provide metadata but also allow you to modify classes and properties at design time

## AtScript Annotations

* Google proposed superset of JavaScript
* AtScript added static data types (ala TypeScript) and annotations to JavaScript
* Traceur could be used to transpile AtScript

## Annotations vs Decorators

* Annotations - Declarative way to add metadata to code
* Decorators - Declarative way to annotate and modify classes and properties at design time

## Decorators

A decorator is (from the proposal):

* An expression
* That evaluates to a function
* That takes the target, name, and decorator descriptor as arguments
* And optionally returns a decorator descriptor to install on the target object

## Simple Example

```
// A simple decorator
@decoratorExpression
class MyClass { }

function decoratorExpression(target) {
   // Add a property on target
   target.annotated = true;
}
```

A decorator is just a function that gives you access to the target that needs to be decorated.

## Decorator Types

* Class Decorator
 * Accepts one argument: `target` (constructor function)
 * Returns a constructor function that replaces original constructor function
* Method Decorator
 * Accepts three arguments: `target` (prototype), `key` (property name), and `value` (property descriptor for the given property)
 * Returns a property descriptor that is used to update the original property definition
* Property Decorator
 * Accepts two arguments: `target` (prototype) and `key` (property name)
 * Doesn't return a value
* Parameter Decorator
 * Accepts three arguments: `target` (prototype), `name` (method name), and `index` (index of the parameter being decorated)
 * Returns a property descriptor that is used to update the original property definition

## Browser Support

Do TypeScript decorators work in all browsers?

* No browsers natively support decorators at this point in time
* So you need to transpile to ES5
* Any browser that supports the Object.defineProperty and Object.getOwnPropertyDescriptor methods
* Chrome 5, Firefox 4, IE 9, Opera 12, Safari 5.1

## TypeScript Compiler Options

```
"compilerOptions": {
    "target": "es5",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": false
}
```

* Do you have to have the experimental decorators option enabled?
* Yes... or else you get a compiler warning :)

## Demos

### Decorator Demo: `@log`

* Walk through the app
 * Explain what the `main` code is doing
* Uncomment each decorator and show what the code is doing

* Class Decorator
 * Accepts one argument: `target` (constructor function)
 * Returns a constructor function that replaces original constructor function
* Method Decorator
 * Accepts three arguments: `target` (prototype), `key` (property name), and `value` (property descriptor for the given property)
 * Returns a property descriptor that is used to update the original property definition
* Property Decorator
 * Accepts two arguments: `target` (prototype) and `key` (property name)
 * Doesn't return a value
* Parameter Decorator
 * Accepts three arguments: `target` (prototype), `name` (method name), and `index` (index of the parameter being decorated)
 * Returns a property descriptor that is used to update the original property definition

### Decorator Demo: `@readonly`

* Walk through the app
 * Explain what the `main` code is doing

#### JavaScript Object Demo

* Show how the `Object.getOwnPropertyDescriptor` and `Object.defineProperty` work

##### Object.getOwnPropertyDescriptor

Used to get a property descriptor.

Property descriptors present in objects come in two main flavors: data descriptors and accessor descriptors.

* Data Descriptor - property that has a value, which may or may not be writable
* Accessor Descriptor - Property described by a getter-setter pair of functions

A descriptor must be one of these two flavors; it cannot be both.

Descriptors have the following keys:

* `configurable` (both) - True if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object. Defaults to false.
* `enumerable` (both) - True if and only if this property shows up during enumeration of the properties on the corresponding object. Defaults to false.
* `value` (data descriptor) - The value associated with the property. Can be any valid JavaScript value (number, object, function, etc). Defaults to undefined.
* `writable` (data descriptor) - True if and only if the value associated with the property may be changed with an assignment operator. Defaults to false.
* `get` (accessor descriptor) - A function which serves as a getter for the property, or undefined if there is no getter. The function return will be used as the value of property. Defaults to undefined.
* `set` (accessor descriptor) - A function which serves as a setter for the property, or undefined if there is no setter. The function will receive as only argument the new value being assigned to the property. Defaults to undefined.

##### Object.defineProperty

Used to create object properties.

###### Parameters

* obj - The object on which to define the property.
* prop - The name of the property to be defined or modified.
* descriptor - The descriptor for the property being defined or modified.

### Angular 2 Demo "Basic"

#### angular2/core

* Component - Specifies when a component is instantiated, and which properties and hostListeners it binds to
* Injectable - Marks a class as available to Injector for creation
* View - Specifies the HTML template to use, and lists the directives that are active within the template

### Angular 2 Demo "Civil War"

#### angular2/core

* Component - Specifies when a component is instantiated, and which properties and hostListeners it binds to
* Directive - Used to configure directives
* Injectable - Marks a class as available to Injector for creation
* Pipe - Declares reusable pipe function
* View - Specifies the HTML template to use, and lists the directives that are active within the template

#### angular2/router

* CanActivate - Defines route lifecycle hook CanActivate, which is called by the router to determine if a component can be instantiated as part of a navigation
* RouteConfig - Defines routes for a given component

### Angular 1.x Demo

ngForward is an Angular 1.x library that attempts to bring an Angular 2 like development experience to Angular 1.x.

[https://github.com/ngUpgraders/ng-forward/blob/master/Walkthrough.md](https://github.com/ngUpgraders/ng-forward/blob/master/Walkthrough.md)

## Wrap Up

* All of the code that I showed you tonight is available on GitHub
* The repo also contains my presentation materials and a list of resources

James Churchill
Twitter: @SmashDev
GitHub: github.com/smashdevcode
