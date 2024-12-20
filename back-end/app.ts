const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { swaggerDocs } = require('./util/swagger');

const app = express();
dotenv.config();
const port = process.env.APP_PORT || 3000;  // Default to 3000 if not set in .env

app.use(cors());
app.use(bodyParser.json());

// Setup Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Simple status route
app.get('/status', (req:Request, res:Response) => {
    res.json();
});

// Start the server on the specified port
app.listen(port, () => {
    console.log(`Back-end is running on port ${port}.`);
});
