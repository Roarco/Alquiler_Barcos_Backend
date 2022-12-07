const express = require ('express');
const app = express();
const routerApi = require('./routes/index');
const config = require('./config/config');
const PORT = config.port;
const { logErrors, boomErrorHandler, errorHandler } = require('./middlewares/errorHandler');

// Middlewares
app.use(express.json());

// Routes
routerApi(app);

// Error handlers
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`)
});