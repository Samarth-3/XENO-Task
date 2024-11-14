const express = require("express");
const bodyParser = require("body-parser");
const Customer = require("./models/customer");
const Order = require("./models/orders");
const connectDB = require("./db");
connectDB();
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(bodyParser.json());


// Customer API
app.post("/api/customers", async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).send(customer);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Order API
app.post("/api/orders", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
