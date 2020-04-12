const express = require("express");

const postsRouter = require("./posts/posts-router");

const server = express();
const port = 4005;

server.use(express.json());
server.use("/api/posts", postsRouter);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
