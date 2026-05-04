const express = require("express");
const app = express();

const crypto = require("crypto");

const db = require("./db.json");

const anecdotes = db.anecdotes;

const PORT = process.env.PORT || 3001;

app.use(express.static("dist"));
app.use(express.json());

app.get("/api/anecdotes", (req, res) => {
  res.json(anecdotes);
});

app.post("/api/anecdotes", (req, res) => {
  const newAnecdote = { ...req.body, id: crypto.randomUUID() };
  anecdotes.push(newAnecdote);
  res.status(201).json(newAnecdote);
});

app.put("/api/anecdotes/:id", (req, res) => {
  const index = anecdotes.findIndex((anecdote) => anecdote.id === req.id);
  anecdotes[index] = { ...anecdotes[index], ...req.body };
  res.json(anecdotes[index]);
});

app.get("/api/health", (req, res) => {
  res.send("ok");
});

const start = async () => {
  app.listen(PORT);
  console.log(`server started on port ${PORT}`);
};

start();
