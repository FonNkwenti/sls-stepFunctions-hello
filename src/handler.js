"use strict";

module.exports.message = (event, context, callback) => {
  callback(null, "Hello, " + event.who + "!");
};
