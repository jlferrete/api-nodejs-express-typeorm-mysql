const express = require("express");
const app = express();
const port = 6500;

const estudiantesRoutes = require('./routes/estudiantesRoutes.js');

app.use("/estudiantes", estudiantesRoutes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

