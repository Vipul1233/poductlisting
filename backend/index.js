const express = require("express");
const cors= require("cors")
require("./DB/connection");
// const bodyParser = require ('body-parser');
const Product = require("./DB/Product");
const App = express();
const port = process.env.PORT || 5000;
App.use(express.json());
App.use(cors());
// App.get("/",(req,res)=>{
//     res.send("hello fron the other side")
// })
// App.post('/students', (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() => {
//         res.send(user);
//     }).catch((e) => {
//         res.send(e);
//     })
//     // res.send("hello from other side");
// });
App.post("/add-product",async(req,res)=>{
    const products = new Product(req.body);
    const result = await products.save();
    res.status(201).send(result);
})
// read the data from the api
App.get("/products",async(req,res)=>{
      const products = await Product.find();
      res.send(products);
})
App.delete("/products/:id",async(req,res)=>{
        let result= await Product.deleteOne({_id:req.params.id})
        res.send(result);
})
App.put("/products/:id",async(req,res)=>{
    let result =await Product.updateOne({_id:req.params.id},{$set:req.body})
    res.send(result);

})
App.get("/products/:id",async(req,res)=>{
    const products = await Product.findOne({_id:req.params.id});
    res.send(products);
})
App.get("/search/:key", async (req, resp) => {
    let result = await Product.find({
        "$or": [
            {
                name: { $regex: req.params.key }  
            },
          
            {
                category: { $regex: req.params.key }
            }
        ]
    });
    resp.send(result);
})
App.listen(port, () => {
    console.log(`connection is set up ${port}`);
})