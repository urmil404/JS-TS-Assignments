// define a function to log a request with the current date
function logRequest(Auther, Summery) {
    var date = new Date().toLocaleString();
    this.log(date, Auther, Summery);
}
// create a print logger object with a log function
var logger = {
    log: function (date, Auther, Summery) {
        console.log("[" + date + "] " + Auther + ": " + Summery);
    }
};
logger.log.call(logger, "2023-08-14", "Krishna", "Namaskaram");
// object with logged date
var loggedDate = {
    date: "2023-03-21",
    Author: "Urmil",
    Summery: "Hello Coders!"
};
// using call log message
logger.log.apply(logger, [
    loggedDate.date,
    loggedDate.Author,
    loggedDate.Summery,
]);
// using apply log message
var logRequestLater = logRequest.bind(logger, "Ram");
setTimeout(function () { return logRequestLater("<=Log Summeries.."); }, 3000);
