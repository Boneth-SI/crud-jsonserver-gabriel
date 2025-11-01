const express = require("express");
const path = require("path");
const { spawn } = require("child_process");

const app = express();
const PORT = process.env.PORT || 3000;

// Inicia o JSON Server localmente (porta 5000) para servir a API
const jsonServer = spawn("npx", ["json-server", "--watch", "db.json", "--port", "5000"], {
  stdio: "inherit",
  shell: true
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});
