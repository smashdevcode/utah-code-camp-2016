
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
