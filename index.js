/*
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  let q = url.parse(req.url, true);
  if (q.pathname == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>This is the Home page<h1>");
  } else if (q.pathname == "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>This is the About page<h1>");
  } else if (q.pathname == "/contact-me") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>This is the Contact page<h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page Not Found<h1>");
  }
});

server.listen(3000, () => {
  console.log("API Server running on port 3000...");
});
*/

// METHOD 2 USING EXPRESS

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1>This is the Home page<h1");
});
app.get("/about", (req, res) => {
  res.status(200).send("<h1>This is the About page<h1");
});
app.get("/contact-me", (req, res) => {
  res.status(200).send("<h1>This is the Contact page<h1");
});

app.use((req, res) => {
  res.status(404).send("<h1>This page does not exist on server</h1>");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App Server running on port ${PORT}`);
});
