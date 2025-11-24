// const express = require('express');
// const { mongo, default: mongoose } = require('mongoose');
// require('dotenv').config();
// const {HoldingsModel} = require('./models/HoldingsModel');
// const {PositionModel} =require('./models/PositionMdel');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const authRoute = require('./Routes/AuthRoute');

// const {OrderModel} = require('./models/OrderModel')


// const app = express()


// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(cookieParser());

// // here app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}))

// const PORT = process.env.PORT || 8080;
// const uri = process.env.MONGO_URL;

// const allowedOrigin = process.env.CLIENT_ORIGIN || "http://localhost:3001"; // use your frontend origin

// app.use(cors({
//   origin: allowedOrigin,
//   methods: ["GET","POST","PUT","DELETE","OPTIONS"],
//   credentials: true,
// }));

// app.options("*", cors({
//   origin: "http://localhost:3001",
//   credentials: true
// }));

// app.use('/', authRoute);

// app.get('/', (req, res) => {
//     res.send('helloWorld')
// })




// app.get('/allHoldings', async(req, res) => {
//   let allHoldings = await HoldingsModel.find({});
//  res.json(allHoldings);
// })

// app.get('/allPosition', async(req, res) => {
//   let allPosition = await PositionModel.find({});
//   res.json(allPosition);
// });



// app.post('/newOrder', async (req, res) => {
//   try {
//     // console.log('>>> /newOrder headers:', req.headers);
//     // console.log('>>> /newOrder body:', req.body);

//     const { name, qty, price, mode } = req.body || {};
//     if (!name) return res.status(400).send('Something went wrong');

//     const newOrder = new OrderModel({ name, qty, price, mode });
//     await newOrder.save();

//     return res.status(201).send('Order Saved!');
//   } catch (err) {
//     console.error('Error in /newOrder:', err);
//     return res.status(500).send('Server error');
//   }
// });


// mongoose.connect(uri)
// .then(() => {
//     console.log('DB Connected Successfully');
//     app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}/`);
    
// })
// })
// .catch((err) => {
//     console.log('MongoDB connection failed', err.message)
// })





//======================== new index.js file ==========================


const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoute = require('./Routes/AuthRoute');
const { HoldingsModel } = require('./models/HoldingsModel');
const { PositionModel } = require('./models/PositionMdel');
const { OrderModel } = require('./models/OrderModel');

const app = express();



const FRONTEND_ORIGINS = [
  "https://zerodha-clone-dashboard-c2fd.onrender.com",
  "https://zerodha-clone-frontend-0bma.onrender.com"
    // 'http://localhost:3001',
    // 'http://localhost:3000'
];

if (process.env.CLIENT_ORIGIN) {
    // Trim whitespace and push the production origin.
    FRONTEND_ORIGINS.push(process.env.CLIENT_ORIGIN.trim());
}
// const FRONTEND_ORIGINS = [
//   process.env.CLIENT_ORIGIN || 'http://localhost:3001',
//   'http://localhost:3000' 
// ];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (FRONTEND_ORIGINS.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('CORS not allowed for origin: ' + origin));
  },
  credentials: true,
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization']
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', authRoute);

app.get('/', (req, res) => res.send('helloWorld'));

app.get('/allHoldings', async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/allPosition', async (req, res) => {
  const allPosition = await PositionModel.find({});
  res.json(allPosition);
});

app.post('/newOrder', async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body || {};
    if (!name) return res.status(400).send('Something went wrong');
    const newOrder = new OrderModel({ name, qty, price, mode });
    await newOrder.save();
    return res.status(201).send('Order Saved!');
  } catch (err) {
    console.error('Error in /newOrder:', err);
    return res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

mongoose.connect(uri)
  .then(() => {
    console.log('DB Connected Successfully');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}/`);
    });
  })
  .catch((err) => {
    console.log('MongoDB connection failed', err.message);
  });
