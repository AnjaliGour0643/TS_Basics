// numeric enum
var Browser;
(function (Browser) {
    Browser[Browser["Firefox"] = 0] = "Firefox";
    Browser[Browser["Safari"] = 1] = "Safari";
    Browser[Browser["Edge"] = getVersion('chrome') * 5] = "Edge";
    Browser[Browser["Chrome"] = getVersion('chrome')] = "Chrome";
})(Browser || (Browser = {}));
console.log(Browser.Edge);
console.log(Browser);
function getVersion(browserName) {
    if (browserName === 'chrome') {
        return 100;
    }
    return -1;
}
// String enum
console.log('-------------------');
var environment;
(function (environment) {
    environment["DEV"] = "dev";
    environment["QA"] = "qa";
    environment["STAGE"] = "stage";
    environment["PROD"] = "prod";
})(environment || (environment = {}));
console.log(environment.DEV);
console.log(environment['STAGE']);
// Heterogenous enum
console.log('-------------------');
var Status;
(function (Status) {
    Status["ACTIVE"] = "active";
    Status[Status["DEACTIVE"] = 1] = "DEACTIVE";
    Status[Status["PENDING"] = 2] = "PENDING";
})(Status || (Status = {}));
console.log(Status.ACTIVE);
console.log(Status.DEACTIVE);
console.log(Status.PENDING);
