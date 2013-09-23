'use strict';

var assert = require('assert');
require('../index');

function Foo(){}
Foo.fallbackOfObjectsCreatedWithNew = {
  hello: 'world'
};

var foo = new Foo();
assert.equal(foo.hello, Foo.fallbackOfObjectsCreatedWithNew.hello);

assert.equal(foo.fallback.hello, Foo.fallbackOfObjectsCreatedWithNew.hello);
