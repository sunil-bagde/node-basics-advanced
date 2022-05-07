const { createServer }  = require("http");

function requestListener(req, res) {
    res.end("hello word\n");
}
const server = createServer(requestListener)

server.listen(4242, () => {
  console.log("Server running on http://localhost:4242")
})
