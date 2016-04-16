
// Decorators
// https://github.com/jayphelps/core-decorators.js

// For Properties and Methods

// @readonly
// @nonconfigurable
// @decorate :new:

// For Properties

// @nonenumerable
// @lazyInitialize :new:

// For Methods

// @autobind
// @deprecate
// @suppressWarnings
// @enumerable :new:
// @override
// @debounce
// @throttle :new:
// @time :new:

// For Classes

// @autobind :new:
// @mixin :new:

// Demos

// @readonly

// import {readonly} from 'node_modules/core-decorators/lib/core-decorators';
//
// class Meal {
//     @readonly
//     entree = 'steak';
// }
//
// var dinner = new Meal();
// dinner.entree = 'salmon';
// // Cannot assign to read only property 'entree' of [object Object]

// @deprecate

// import {deprecate} from 'node_modules/core-decorators/lib/core-decorators';
//
// class Person {
//     @deprecate
//     facepalm() {}
//
//     @deprecate('We stopped facepalming')
//     facepalmHard() {}
//
//     @deprecate('We stopped facepalming', { url: 'http://knowyourmeme.com/memes/facepalm' })
//     facepalmHarder() {}
// }
//
// let person = new Person();
//
// person.facepalm();
// // DEPRECATION Person#facepalm: This function will be removed in future versions.
//
// person.facepalmHard();
// // DEPRECATION Person#facepalmHard: We stopped facepalming
//
// person.facepalmHarder();
// // DEPRECATION Person#facepalmHarder: We stopped facepalming
// //
// //     See http://knowyourmeme.com/memes/facepalm for more details.
// //
