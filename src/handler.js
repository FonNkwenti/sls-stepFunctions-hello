"use strict";

module.exports.message = async (event) => {
  const message = JSON.parse(event.body);
  console.log(message);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `${message}`,
      input: event,
    }),
  };
};
