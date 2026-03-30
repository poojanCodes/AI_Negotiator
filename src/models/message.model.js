import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    game : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'GameSession',
    },

    sender : {
        type : String , 
        enum : ['user','ai']
    },

    message : {
        type : String,
    },

    priceOffered : {
        type : Number
    },

    round : {
        type : Number
    }
},{
    timestamps : true
});


const messageModel = mongoose.model('Message' , messageSchema);
export default messageModel ; 