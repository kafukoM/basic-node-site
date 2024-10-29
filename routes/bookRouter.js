const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) =>
  res.send("This page returns a list of all books")
);

bookRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`Book id: ${bookId}`);
});

bookRouter.get("/:bookId/reserve", (req, res) => {
  const { bookId } = req.params;
  res.send(`Fetched Reserved Book with id: ${bookId}`);
});

bookRouter.post("/:bookId/reserve", (req, res) => {
  const { bookId } = req.params;
  res.send(`Added Reserved Book with id: ${bookId}`);
});

module.exports = bookRouter;
