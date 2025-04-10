const express = require('express');
const { ConnectToMongoose } = require('./Helpers/mongoseConnect');
const adminRouter = require('./MainControllers/AdminRouter.js');
const ApiRouter = require('./MainControllers/ApiRouter.js');
const app = express();
const cors = require('cors'); // Import CORS

// Moongose Connection start
ConnectToMongoose();
// Moongose Connection end
app.use(express.json());
app.use(cors());

//routers start
app.use('/admin', adminRouter);
app.use('/api', ApiRouter);
app.get('/', function (req, res) {
    res.send('Hello World');
}); //routers end

// Start the Express server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
