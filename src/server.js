const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensagem: "API Blog online!" });
});
// Rotas da API (adicionar nas fases seguintes)
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/artigos', require('./routes/artigos'));
// Middleware de erros (deve ser o último)
// app.use(require('./middleware/errorHandler'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});
