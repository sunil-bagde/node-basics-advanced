const EventEmitter = require("events")

const myEvent = new EventEmitter()

myEvent.emit("TEST_EVENT")


myEvent.on("TEST_EVENT",() => {
  console.log("TEST_EVENT fired");

})
myEvent.on("TEST_EVENT",() => {
  console.log("TEST_EVENT fired 1");

})

myEvent.on("TEST_EVENT",() => {
  console.log("TEST_EVENT fired 2");

})

myEvent.emit("TEST_EVENT")
