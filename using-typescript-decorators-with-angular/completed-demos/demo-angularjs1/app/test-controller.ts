
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
