
## Demos

### Code Analysis Demo

* Walk through the generated code

#### Metadata Demo

You need a polyfill in order to access the metadata that TypeScript emits.

```
npm install reflect-metadata
```

Then you can get the metadata like this:

```
console.log('Type: %s', Reflect.getMetadata('design:type', v, k));
console.log('Param Types: %s', Reflect.getMetadata('design:paramtypes', v, k));
console.log('Return Type: %s', Reflect.getMetadata('design:returntype', v, k));
```
