import mongoose from 'mongoose';


const gameSessionSchema =  new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    },

    productName : {
        type : String , 
        required : true
    },

    startingPrice : {
        type : Number , 
        required : true
    },

    minimumPrice : {
        type : Number , 
        required : true
    },

    targetPrice : {
        type : Number , 
        required : true
    },

    currentPrice : {
        type : Number ,
    },

    rounds : {
        type : Number , 
        default : 0 ,
    },

    sellerType : {
        type : String,
        enum : ['aggressive','friendly','stubborn','smart']
    },

    status : {
        type : String ,
        enum : ['active','completed']
    },

    finalPrice : {
        type : Number
    }
},{
    timestamps : true
});

const gameSessionModel = mongoose.model('GameSession' , gameSessionSchema);
export default gameSessionModel;