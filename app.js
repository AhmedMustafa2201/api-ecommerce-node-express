const express = require("express");
const morgan = require('morgan')
const debug = require('debug')('app');
const cors = require("cors")

require('dotenv').config()

const productEndpointRouter = require("./src/routes/productEndpointRouter");
const categoryEndpointRouter = require("./src/routes/categoryEndpointRouter");

const PORT = process.env.PORT || 3000;
const app = express();

require('./src/config/db')()

app.use(morgan('tiny'));

const corsOptions = {
  credentials: true,
  origin: [],
  optionsSuccessStatus: 200, 
};
app.use(cors(corsOptions));

app.use(express.json())
app.use(express.urlencoded({ extended:false }))


app.use('/products', productEndpointRouter);
app.use('/categories', categoryEndpointRouter);

app.get('/', (req, res) => {
  res.json({
    success: true,
    results: { message: "Welcome to the API!" },
    errorMessages: []
  });
})

app.listen(PORT, () => {
  debug(`listening on port ${PORT}`);
});
