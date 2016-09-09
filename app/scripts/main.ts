import test from './lib/test';
import { TestClass } from './lib/test'

let t = test('hej hej!');
t()

let obj = new TestClass('testobjekt')
console.log(obj.getName())
