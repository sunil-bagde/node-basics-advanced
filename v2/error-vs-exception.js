/*

Operational errors vs. programmer errors

Operational errors
1. service halt
2 db connection
3 maximum connection

Programmer errors
undefined operation
invalid method access
*/

/* Levels of error*/
const customLevels = {
levels: {
  trace: 5,
  debug: 4,
  info: 3,
  warn: 2,
  error: 1,
  fatal: 0,
},
}

process.on('unhandledRejection', (reason, promise ) => {
 throw reason;
});
// https://github.com/thesunilbagde/wes-node/blob/master/handlers/errorHandlers.js
process.on('uncaughtException', (error: Error) => {
 errorHandler.handleError(error);
 if (!errorHandler.isTrustedError(error)) {
   process.exit(1);
 }
});

//  Best

try {

}
catch (err) {

} finally {

}
