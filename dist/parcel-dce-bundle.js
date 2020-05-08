(function () {
// ASSET: ../Effect.Console/foreign.js
var $CEFT$export$log = function (s) {
  return function () {
    console.log(s);
    return {};
  };
};

// ASSET: ../Effect.Console/index.js
var $bfEs$exports = {};
$bfEs$exports = {
  log: $CEFT$export$log
};
// ASSET: index.js
var $Focm$exports = {};
var $Focm$var$main = $bfEs$exports.log("Hello world");
$Focm$exports = {
  main: $Focm$var$main
};

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