
namespace AngularDemo {
  export function injectable(target: any) {
    angular.module('app').service(target.name, target);
  }
}
