const _ = require('lodash');
const fs = require('co-fs');
const path = require('path');

const gekkoRoot = __dirname + '/../../';
var util = require(__dirname + '/../../core/util');

var config = {};

config.debug = false;
config.silent = false;

util.setConfig(config);

module.exports = function *() {
  const exchangesDir = yield fs.readdir(gekkoRoot + 'exchange/wrappers/');
  const exchanges = exchangesDir
    .filter(f => _.takeRight(f, 3).join('') === '.js')
    .map(f => f.slice(0, -3));

  let allCapabilities = [];

  exchanges.forEach(function (exchange) {
    let Trader = null;

    try {
      Trader = require(path.resolve(gekkoRoot, 'exchange/wrappers/', exchange));
    } catch (e) {
      // console.error(e)
      return;
    }

    if (!Trader || !Trader.getCapabilities) {
      return;
    }
  
    var capabilities = Trader.getCapabilities()
    
    allCapabilities.push(capabilities);
  });

  this.body = allCapabilities;
}
