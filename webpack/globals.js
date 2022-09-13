// @flow
const decorators = require('core-decorators');
const _ = require('lodash');

module.exports = _.assign({
  '$.get': ['jquery', 'get'],
  '$.post': ['jquery', 'post'],
  _: ['lodash'],
  classy: ['classy-decorator'],
  '$': ['jquery'],
},
_.mapValues(decorators, (value, decName) => ['core-decorators', decName])
);
