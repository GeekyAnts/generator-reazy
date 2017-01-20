'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reazy = require('reazy');

var _reazy2 = _interopRequireDefault(_reazy);

var _mobx = require('./services/mobx');

var _mobx2 = _interopRequireDefault(_mobx);

var _reazyNativeRouterActions = require('reazy-native-router-actions');

var _reazyNativeRouterActions2 = _interopRequireDefault(_reazyNativeRouterActions);

var _reactNative = require('./services/react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _reazy2.default)();

app.use((0, _mobx2.default)(), 'state');
app.use((0, _reazyNativeRouterActions2.default)(), 'routerActions');
app.use((0, _reactNative2.default)(), 'reactNative');

exports.default = app;