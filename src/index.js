const express = require ('express');
const app = express();
const routerApi = require('./routes/index');
const config = require('./config/config');
const PORT = config.port;

// Middlewares
app.use(express.json());

// Routes
routerApi(app);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`)
});