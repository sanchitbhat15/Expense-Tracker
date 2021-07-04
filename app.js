const path = require('path');

const express = require('express');
var cors = require('cors')
const authorization=require('./middleware/auth')
const sequelize = require('./util/database');
const User = require('./models/users');
const Expense = require('./models/expenses');
const Password = require('./models/password')
const Order = require('./models/pay')

const userRoutes = require('./routes/user')
const ExpenseReport = require('./routes/auth')
const PaymentRoute = require('./routes/payment')
const PasswordRoute = require('./routes/resetpwd')


const app = express();
const dotenv = require('dotenv');

// get config vars
dotenv.config();


app.use(cors());

// app.use(bodyParser.urlencoded());  ////this is for handling forms
app.use(express.json());  //this is for handling jsons

app.use('/expenseReport',authorization,expensereport);

app.use('/user', userRoutes)
app.use('/payment',paymentRoutes)
app.use('/getinfo',premiumfeature)
app.use('/password',passwordRoutes)


Users.hasMany(Expense)
Expense.belongsTo(Users)
Users.hasMany(Order)
Order.belongsTo(Users)

Users.hasMany(Password)
Password.belongsTo(Users)


sequelize.sync()
    .then(() => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })
