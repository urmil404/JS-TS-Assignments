// interface for log function
interface PrintLogger {
  log: (date: string, Auther: string, Summery: string) => void;
}

// define a function to log a request with the current date
function logRequest(this: PrintLogger, Auther: string, Summery: string): void {
  const date = new Date().toLocaleString();
  this.log(date, Auther, Summery);
}

// create a print logger object with a log function

const logger: PrintLogger = {
  log: function (date, Auther, Summery): void {
    console.log(`[${date}] ${Auther}: ${Summery}`);
  },
};

logger.log.call(logger, "2023-08-14", "Krishna", "Namaskaram");

// object with logged date

const loggedDate = {
  date: "2023-03-21",
  Author: "Urmil",
  Summery: "Hello Coders!",
};

// using call log message
logger.log.apply(logger, [
  loggedDate.date,
  loggedDate.Author,
  loggedDate.Summery,
]);

// using apply log message
const logRequestLater = logRequest.bind(logger, "Ram");
setTimeout(() => logRequestLater("<=Log Summeries.."), 3000);
