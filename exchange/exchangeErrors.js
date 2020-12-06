
const { bindAllAuto } = require('../core/utils/bindAllAuto')
const _ = require('lodash');

const ExchangeError = function(message) {
	bindAllAuto(this);

  this.name = "ExchangeError";
  this.message = message;
}
ExchangeError.prototype = new Error();

const ExchangeAuthenticationError = function(message) {
	bindAllAuto(this);

  this.name = "ExchangeAuthenticationError";
  this.message = message;
}
ExchangeAuthenticationError.prototype = new Error();

const RetryError = function(message) {
	bindAllAuto(this);

  this.name = "RetryError";
  this.retry = 5;
  this.message = message;
}
RetryError.prototype = new Error();

const AbortError = function(message) {
	bindAllAuto(this);

  this.name = "AbortError";
  this.message = message;
}
AbortError.prototype = new Error();

module.exports = {
  ExchangeError,
  ExchangeAuthenticationError,
  RetryError,
  AbortError
};

