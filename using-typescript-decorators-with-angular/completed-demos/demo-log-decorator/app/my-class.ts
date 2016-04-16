import {logClass, logClassWithArgs, logProperty, logMethod} from './log-decorator';

// @logClass
// @logClassWithArgs({
//     arg: 'some value'
// })
export class MyClass {
    // @logProperty
    myProp: string;

    constructor(myProp: string) {
        this.myProp = myProp;
    }

    // @logMethod
    myMethod(arg1: string, arg2: number) {
        console.log('Executing myMethod');
        return `Message -- arg1: ${arg1}, arg2: ${arg2}`;
    }
}
