'use strict';

Object.defineProperty(Function.prototype, 'fallbackOfObjectsCreatedWithNew', {
                        get: function() { return this.prototype; },
                        set: function(prototype) { this.prototype = prototype; }
                      });

Object.defineProperty(Object.prototype, 'fallback', {
                        get: function() { return this.__proto__; },
                        set: function(prototype) { this.__proto__ = prototype; }
                      });
