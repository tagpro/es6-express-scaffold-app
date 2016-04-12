console.log('Hi, you!');

const a = 4;
console.log(a);

// jQuery is global due to CDN

$('body').addClass('es6');

import _ from 'underscore';

var test1 = _.toArray({'asdf': 'zzzz'});

console.log(test1);

// Importing a function
import add from './add.js';

console.log(add(2, 3));

console.log('We are using EcmaScript2015 just for fun. Eat this!');

// Importing required numbers of modules
import {getBob, odds, nums} from './lexical-this.js';

console.log(getBob());

// Importing everyting from lexical-this.js file
import * as lex from './lexical-this';

console.log(lex);
console.log(lex.bob);
console.log(lex.default());

// importing default and a few set of funcitons from lexical-this.js
import myDefault, {odds as od, nums as n} from './lexical-this';

console.log(myDefault());
