
namespace JavaScriptObjectDemo {
  function displayObjectProperties(obj: any) {
      console.group('Object Properties:')
      for (var prop in obj) {
          if (obj.hasOwnProperty(prop)) {
              console.log(`${prop}: ${obj[prop]}`);
          }
      }
      console.groupEnd();
  }

  // Demo #1: manipulating existing properties

  // // create an object with a normal property
  // var obj: any = { color: 'red' };
  //
  // // get the property descriptor
  // var propDesc = Object.getOwnPropertyDescriptor(obj, 'color');
  // console.log(propDesc);
  //
  // // update the property descriptor and redine the property on the object
  //
  // // make the property "read only"
  // propDesc.writable = false;
  //
  // // make the property hidden
  // // propDesc.enumerable = false;
  //
  // Object.defineProperty(obj, 'color', propDesc);
  //
  // // try to change the value of the 'color' property
  // obj.color = 'green';
  // displayObjectProperties(obj);

  // Demo #2: define a new property using a property descriptor

  // // create an object with a normal property
  // var obj: any = {};
  //
  // // create a property with a getter/setter
  // var propertyValue: number = 0;
  // var newPropDesc: TypedPropertyDescriptor<any> = {
  //     get: () => {
  //         console.log(`Getting property value: ${propertyValue}`);
  //         return propertyValue;
  //     },
  //     set: (val: number) => {
  //         propertyValue = val;
  //         console.log(`Setting property value: ${propertyValue}`);
  //     }
  // };
  //
  // // define the property
  // Object.defineProperty(obj, 'quantity', newPropDesc);
  //
  // // set and get the property value
  // obj.quantity = 22;
  // var quantity = obj.quantity;
}
