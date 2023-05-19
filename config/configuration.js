"use strict";

const loadEnvironmentVariable = function (key) {
  const envVar = process.env[key];
  if (!envVar) {
    throw new Error(`Configuration must include ${key}`);
  }
  return envVar;
};

module.exports = {
  secretKey: loadEnvironmentVariable("SECRET_KEY"),
};
