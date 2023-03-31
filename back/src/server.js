const express = require("express");
const router = require("./routes/index")

const PORT = 3001;
const server = express();
server.use(express.json())

server.use("/", router);



server.listen(PORT, () => {
    console.log(`Listenng on port ${PORT}`);
})