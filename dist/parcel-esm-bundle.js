(function () {
// ASSET: index.js
var $Focm$exports = {};

var $CEFT$export$log = function (s) {
  return function () {
    console.log(s);
    return {};
  };
};

var $nRor$export$showIntImpl = function (n) {
  return n.toString();
};

var $nRor$export$showNumberImpl = function (n) {
  var str = n.toString();
  return isNaN(str + ".0") ? str : str + ".0";
};

var $nRor$export$showCharImpl = function (c) {
  var code = c.charCodeAt(0);

  if (code < 0x20 || code === 0x7F) {
    switch (c) {
      case "\x07":
        return "'\\a'";

      case "\b":
        return "'\\b'";

      case "\f":
        return "'\\f'";

      case "\n":
        return "'\\n'";

      case "\r":
        return "'\\r'";

      case "\t":
        return "'\\t'";

      case "\v":
        return "'\\v'";
    }

    return "'\\" + code.toString(10) + "'";
  }

  return c === "'" || c === "\\" ? "'\\" + c + "'" : "'" + c + "'";
};

var $nRor$export$showStringImpl = function (s) {
  var l = s.length;
  return "\"" + s.replace(/[\0-\x1F\x7F"\\]/g, // eslint-disable-line no-control-regex
  function (c, i) {
    switch (c) {
      case "\"":
      case "\\":
        return "\\" + c;

      case "\x07":
        return "\\a";

      case "\b":
        return "\\b";

      case "\f":
        return "\\f";

      case "\n":
        return "\\n";

      case "\r":
        return "\\r";

      case "\t":
        return "\\t";

      case "\v":
        return "\\v";
    }

    var k = i + 1;
    var empty = k < l && s[k] >= "0" && s[k] <= "9" ? "\\&" : "";
    return "\\" + c.charCodeAt(0).toString(10) + empty;
  }) + "\"";
};

var $kaX7$export$SProxy = function () {
  function SProxy() {}

  ;
  SProxy.value = new SProxy();
  return SProxy;
}();

;
;

var $oEsU$export$RLProxy = function () {
  function RLProxy() {}

  ;
  RLProxy.value = new RLProxy();
  return RLProxy;
}();

;

var $LZIe$export$ShowRecordFields = function ShowRecordFields(showRecordFields) {
  this.showRecordFields = showRecordFields;
};

var $LZIe$export$Show = function Show(show) {
  this.show = show;
};

var $LZIe$export$showString = new $LZIe$export$Show($nRor$export$showStringImpl);
var $LZIe$export$showRecordFieldsNil = new $LZIe$export$ShowRecordFields(function (v) {
  return function (v1) {
    return [];
  };
});
var $LZIe$export$showNumber = new $LZIe$export$Show($nRor$export$showNumberImpl);
var $LZIe$export$showInt = new $LZIe$export$Show($nRor$export$showIntImpl);
var $LZIe$export$showChar = new $LZIe$export$Show($nRor$export$showCharImpl);
var $LZIe$export$showBoolean = new $LZIe$export$Show(function (v) {
  if (v) {
    return "true";
  }

  ;

  if (!v) {
    return "false";
  }

  ;
  throw new Error("Failed pattern match at Data.Show (line 20, column 1 - line 22, column 23): " + [v.constructor.name]);
});
;
var $Focm$export$main = $CEFT$export$log("Hello world");
;
$Focm$exports.main = $Focm$export$main;

if (typeof exports === "object" && typeof module !== "undefined") {
  // CommonJS
  module.exports = $Focm$exports;
} else if (typeof define === "function" && define.amd) {
  // RequireJS
  define(function () {
    return $Focm$exports;
  });
}
})();