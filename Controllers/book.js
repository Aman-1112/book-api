const bookModel = require('../Models/bookModel');

exports.getAllBooks=async(req,res)=>{
    try {
        const response=await bookModel.find();
        res.send({
            status:"success",
            response
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.createBook=async(req,res)=>{
    try {
        const response=await bookModel.create(req.body);
        res.status(201).send({
            status:"successfully Created",
            response
        })
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getBook=async(req,res)=>{
    try {
        const response=await bookModel.findById(req.params.id);
        res.status(200).send({
            status:"success",
            response
        })
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.updateBook=async(req,res)=>{
    try {
        const response=await bookModel.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        res.status(200).send({
        status:"success",
        response
    })
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.deleteBook=async(req,res)=>{
    try {
        await bookModel.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error);
    }
}