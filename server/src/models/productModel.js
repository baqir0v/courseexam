import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    image:{type:String},
    title:{type:String},
    info:{type:String},
    author:{type:String},
    price:{type:Number}
})

export default mongoose.model("course",productModel)