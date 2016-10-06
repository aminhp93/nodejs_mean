// var my_module = require('./my_module')();
// console.log(my_module);
// my_module.greet();
// my_module.add(5,6);

const querystring = require('querystring');
const url = require('url');

x = querystring.parse('foo=bar&abc=xyz&abc=123');

console.log('test');
console.log(x);

y = querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' })
console.log(y);

urlObject = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash';
y = urlObject.protocol;
console.log(y);
y = urlObject.hostname;
console.log(y);
y = url.resolve('http://example.com/', '/one');
console.log(y);