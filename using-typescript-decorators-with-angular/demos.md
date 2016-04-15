
# Demos

## Decorator Demo: @log

### Scenario

Imagine that we want to debug what is happening inside of our method `myMethod`. We could use the debugger or we could add `console.log` statements to the method. Adding log statements can be tedious and repetitive work. Let's create a decorator to make our lives easier.

1. Add `log-decorator.ts` file

snippet: \_logdecorator

```
// interface TypedPropertyDescriptor<T> {
//   enumerable?: boolean;
//   configurable?: boolean;
//   writable?: boolean;
//   value?: T;
//   get?: () => T;
//   set?: (value: T) => void;
// }

export function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
  // save a reference to the original method
  var originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    // pre
    console.log(`The method args are: ${JSON.stringify(args)}`);

    // run and store the result
    var result = originalMethod.apply(this, args);

    // post
    console.log(`The return value is: ${result}`);

    // return the result of the original method
    return result;
  };

  return descriptor;
}
```

2. Import `log` into the `my-class.ts` file

3. Add `@log` decorator to the `myMethod` method

### What are Decorators?

A decorator is (from the proposal):

* An expression
* That evaluates to a function
* That takes the target, name, and decorator descriptor as arguments
* And optionally returns a decorator descriptor to install on the target object

### Browser Support

Do TypeScript decorators work in all browsers?

* No browsers natively support decorators at this point in time
* So you need to transpile to ES5
* Any browser that supports the Object.defineProperty and Object.getOwnPropertyDescriptor methods
* Chrome 5, Firefox 4, IE 9, Opera 12, Safari 5.1

### TypeScript Compiler Options

```
"compilerOptions": {
    "target": "es5",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": false
}
```

* Do you have to have the experimental decorators option enabled?
* Yes... or else you get a compiler warning :)

## Decorator Demo: @readonly

### Scenario

Imagine that we have a class property that we want to be readonly. We could manually create a getter only property, but again, that's repetitive work. Let's create a decorator to make our lives easier.

1. Add `readonly-decorator.ts` file

snippet: \_readonlydecorator

```
export function readonly(target: Object, propertyKey: string) {
  // property value
  var _val = target[propertyKey],
    isSet = false;

  console.log(target[propertyKey]);
  console.log(_val);

  // property getter
  var getter = () => {
    console.log(`Get: ${propertyKey} => ${_val}`);
    return _val;
  };

  // property setter
  var setter = (newVal) => {
    // only allow the property to be set once
    if (!isSet) {
      console.log(`Set: ${propertyKey} => ${newVal}`);
      _val = newVal;
      isSet = true;
    } else {
      throw `Unable to set property value '${newVal}' on readonly property '${propertyKey}'.`;
    }
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
```

2. Import `readonly` into the `my-class.ts` file

3. Add `@readonly` decorator to the `myProp` property

## Angular 2 Demo

Angular 2 relies heavily upon decorators. Let's walk through an example.

1. Add an `app.component.ts` file

Snippet: \_a2component

```
import {Component} from 'angular2/core';

@Component({
  selector: 'app',
  template: `
    <h1>{{ content }}</h1>
    <p>And here would go more content.</p>
  `
})
export class AppComponent {
  content: string;

  constructor() {
    this.content = 'Hello from app component!';
  }
}
```

2. Bootstrap the app

Snippet: \_a2bootstrap

```
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';

bootstrap(AppComponent);
```

3. Add a `data.service.ts` file

Snippet: \_a2dataservice

```
import {Injectable} from 'angular2/core';

@Injectable()
export class DataService {
  getContent() {
    return 'Hello from the data service!';
  }
}
```

4. Update the `app.component.ts` file to inject the data service

Snippet: \_a2updatedcomponent

```
import {Component} from 'angular2/core';
import {DataService} from './data.service';

@Component({
  selector: 'app',
  template: `
    <h1>{{ content }}</h1>
    <p>And here would go more content.</p>
  `,
  providers: [DataService]
})
export class AppComponent {
  content: string;

  constructor(private _dataService: DataService) {
    this.content = _dataService.getContent();
  }
}
```

## AngularJS 1 Demo

What about AngularJS 1? Can we leverage some of the same Angular 2 techniques for controllers and services?

1. Update the `test-controller.ts` file

Let's add a `@controller` decorator to our test controller.

Snippet: \_a1controller

```
namespace AngularDemo {
  @controller
  export class TestController {
    getContent() {
      return 'Hello from Test controller!';
    }
  }

  // angular.module('app').controller('TestController', TestController);
}
```

2. Add a `controller-decorator.ts` file

Now we need to add the controller decorator.

Snippet: \_a1decoratorcontroller

```
namespace AngularDemo {
  export function controller(target: any) {
    angular.module('app').controller(target.name, target);
  }
}
```

_Be sure to add the `<script>` tag to the `index.html` file!_

We're back!

3. Add a `data-service.ts` file

Let's add a data service.

Snippet: \_a1dataservice

```
namespace AngularDemo {
  export class DataService {
    getData() {
      return 'Hello from the data service!';
    }
  }

  angular.module('app').service('DataService', DataService);
}
```

_Be sure to add the `<script>` tag to the `index.html` file!_

4. Update the `test-controller.ts` file

Let's update the test controller to use our data service.

Snippet: \_a1update1controller

```
namespace AngularDemo {
  @controller
  export class TestController {
    static $inject = ['DataService'];

    constructor(private _dataService: DataService) { }

    getContent() {
      return this._dataService.getData();
      // return 'Hello from Test controller!';
    }
  }

  // angular.module('app').controller('TestController', TestController);
}
```

5. Update the `data-service.ts` file

Let's improve our data service by using a decorator.

Snippet: \_updatedataservice

```
namespace AngularDemo {
  @injectable
  export class DataService {
    getData() {
      return 'Hello from the data service!';
    }
  }

  // angular.module('app').service('DataService', DataService);
}
```

6. Add an `injectable-decorator.ts` file

We need to add the injectable decorator.

Snippet: \_a1decoratorinjectable

```
namespace AngularDemo {
  export function injectable(target: any) {
    angular.module('app').service(target.name, target);
  }
}
```
_Be sure to add the `<script>` tag to the `index.html` file!_

And we're back!

7. Update the `test-controller.ts` file

Let's finish by improving how we inject the data service into the test controller.

Snippet: \_a1update2controller

```
namespace AngularDemo {
  @controller({
    providers: [DataService]
  })
  export class TestController {
    constructor(private _dataService: DataService) { }

    getContent() {
      return this._dataService.getData();
      // return 'Hello from Test controller!';
    }
  }

  // angular.module('app').controller('TestController', TestController);
}
```

8. Update the `controller-decorator.ts` file

We need to update the controller decorator to accept a config object.

Snippet: \_a1updatedecoratorcontroller

```
namespace AngularDemo {
  // export function controller(target: any) {
  //   angular.module('app').controller(target.name, target);
  // }

  interface IControllerConfig {
    providers: [any];
  }

  export function controller(config: IControllerConfig) {
    return function controller(target: any) {
        var providers = config.providers.map(function(provider) {
          return provider.name;
        });
        target.$inject = providers;
        angular.module('app').controller(target.name, target);
      };
  }
}
```

Now our AngularJS 1 app is starting to feel more like our Angular 2 app.
