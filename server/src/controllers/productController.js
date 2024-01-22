import productModel from "../models/productModel.js";

const productActions = {
    getAll:async (req,res)=>{
        try {
            const findAll = await productModel.find({})
            res.send(findAll)
        } catch (error) {
            res.status(500).json({message:error})
        }
    },
    getByID:async (req,res)=>{
        try {
            const findByID = await productModel.findById(req.params.id)
            res.send(findByID)
        } catch (error) {
            res.status(500).json({message:error})
        }
    },
    createNew:async (req,res)=>{
        try {
            const { title,image,info,price,author } = req.body
            const newOne = new productModel({
                image:image,
                title:title,
                info:info,
                price:price,
                author:author
            })
            await newOne.save()
            res.send(newOne)
        } catch (error) {
            res.status(500).json({message:error})
        }
    },
    deleteByID:async (req,res)=>{
        try {
            const deleted = await productModel.findByIdAndDelete(req.params.id)
            res.send(`${deleted.title} deleted`)
        } catch (error) {
            res.status(500).json({message:error})
        }
    },
}

export default productActions
