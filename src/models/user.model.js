import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    username : {
        type : String , 
        unique : [true , 'Username must be unique'],
        required : [true , 'Username is required']
    },
    
    email : {
        type : String , 
        unique : [true , 'Email must be unique'],
        required : [true , 'Email is required']
    },


    bestPrice : {
        type : Number , 
        default : null
    },

    gamesPlayed : {
        type : String ,
        default : 0,
    },
},{
    timestamps : true
});

const userModel = mongoose.model('User' , userSchema);
export default userModel ; 