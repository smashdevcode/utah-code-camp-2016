
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
