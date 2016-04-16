
namespace AngularDemo {
  @injectable
  export class DataService {
    getData() {
      return 'Hello from the data service!';
    }
  }

  // angular.module('app').service('DataService', DataService);
}
