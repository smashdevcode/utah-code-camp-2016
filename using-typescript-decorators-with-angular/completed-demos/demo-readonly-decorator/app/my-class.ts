import {readonly} from './readonly-decorator';

export class MyClass {
    @readonly
    myProp: string = 'property value';
}
