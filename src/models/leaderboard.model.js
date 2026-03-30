import mongoose from 'mongoose';

const leaderboardSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },

    bestPrice : {
        type : Number , 
    },

    rounds : {
        type : Number , 
    },

    productName : {
        type: String ,
    }
},{
    timestamps : true
});

const leaderboardModel = mongoose.model('Leaderboard' , leaderboardSchema);
export default leaderboardModel ; 