const path=require('path')
const express=require('express')
const accessingcontroller=require('../controller/expense')
const routes=express.Router()




routes.post('/expense',accessingcontroller.getexpense)

module.exports=routes;