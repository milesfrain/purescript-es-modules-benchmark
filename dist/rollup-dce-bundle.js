var log = function (s) {
  return function () {
    console.log(s);
    return {};
  };
};

var foreign = {
	log: log
};

var Effect_Console = {
    log: foreign.log
};

var main = Effect_Console.log("Hello world");
var Main = {
    main: main
};
var Main_1 = Main.main;

export default Main;
export { Main_1 as main };
