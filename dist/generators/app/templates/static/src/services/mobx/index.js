'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return function () {
    var getAllStores = function getAllStores() {
      return {
        'domain.user': new _User2.default(),
        'view.app': new _App2.default()
      };
    };

    return {
      getAllStores: getAllStores
    };
  };
};

var _User = require('../../stores/domain/User');

var _User2 = _interopRequireDefault(_User);

var _App = require('../../stores/view/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }