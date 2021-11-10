const EventEmitter = require("events");

let event = new EventEmitter();

setImmediate(() => {
    event.emit("CALL");
});
event.on("CALL", () => {
    console.log("CallTracker");
});
event.on("CALL", () => {
    console.log("CallTracker");
});
event.on("CALL", () => {
    console.log("CallTracker");
});
