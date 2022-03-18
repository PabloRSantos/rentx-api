"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MailAdapterInMemory = require("./MailAdapterInMemory");

Object.keys(_MailAdapterInMemory).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _MailAdapterInMemory[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MailAdapterInMemory[key];
    }
  });
});