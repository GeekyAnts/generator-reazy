'use strict';

var assert = require('assert');
var app = require('../../../src/app');

describe('<%= name %> service', function () {
  it('registered the <%= pluralizedName %> service', function () {
    assert.ok(app.service('<%= pluralizedName %>'));
  });
});