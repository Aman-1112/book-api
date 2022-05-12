const mongoose = require('mongoose');

const bookSchema=mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:[true,'A book must have a name']
    },
    image:{
        type:String,
        required:[true,'A book must have an image']
    },
    author:{
        type:String,
        required:[true,'A book must have some author']
    },
    pages:{
        type:Number,
        required:[true,'A book must have pages'],
        min:[2,'A book must have more than 1 page']
    },
    price:{
        type:Number,
        required:[true,'A book must have a price']
    }
});

const bookModel=mongoose.model('bookList',bookSchema);

module.exports=bookModel;