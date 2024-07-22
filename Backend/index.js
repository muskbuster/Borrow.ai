const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Add this line
const routes = require('../Backend/Routes/routes');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());  // Add this line to enable CORS
app.options('*', cors());
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
