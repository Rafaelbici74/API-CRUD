const express = require('express');
const app = express();
app.use(express.json());


const usuariosRoutes = require("./routes/usuariosRoutes");

//  http://localhost:3000/

app.use("/usuarios", usuariosRoutes);
app.use("/postUsuarios", usuariosRoutes);
app.use("/putUsuarios", usuariosRoutes);
app.use("/deleteUsuarios", usuariosRoutes);

module.exports = app;