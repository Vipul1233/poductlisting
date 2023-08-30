// const mongoose=require("mongoose");
//  const productSchema= new mongoose.Schema({
//         name:String,
//         price:String,
//         category:String,
//         description:String
//  })
//   const Product= mongoose.model("products",productSchema);
//  module.exports=Product;

const mongoose=require("mongoose");
// const validator=require("validator");
// creating schema
const productschema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3 
    },
    category:{
        type:String,
        required:true
       //  unique:[true,"Email id already present"]
        // validate(value){
            // if(!validator.isEmail(value)){
        //   throw new Error("invalid Email")
            // }  
        // }
    },
    price:{
        type:Number,
        required:true
        // min:10,
       

    }

    // description:{
    //     type:String,
    //     required:true
    // }


})
// creating collection
const Product=new mongoose.model('Products',productschema);
module.exports=Product;

