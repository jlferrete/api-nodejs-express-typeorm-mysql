const express = require("express");
const cors = require("cors");
const app = express();
const port = 6500;
require('dotenv').config()

const estudiantesRoutes = require('./routes/estudiantesRoutes.js');
const profesoresRoutes = require('./routes/profesoresRoutes.js');

app.use(express.json());
app.use(cors());

app.use("/estudiantes", estudiantesRoutes);
app.use("/profesores", profesoresRoutes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

