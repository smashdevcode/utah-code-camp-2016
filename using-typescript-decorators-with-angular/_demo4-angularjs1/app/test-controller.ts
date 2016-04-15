
namespace AngularDemo {
  export class TestController {
    getContent() {
      return 'Hello from Test controller!';
    }
  }

  angular.module('app').controller('TestController', TestController);
}
