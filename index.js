const express = require("express");
const app = express();
const port = 6500;

const estudiantesRoutes = require('./routes/estudiantesRoutes.js');
const profesoresRoutes = require('./routes/profesoresRoutes.js');


app.use("/estudiantes", estudiantesRoutes);
app.use("/profesores", profesoresRoutes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

