import mongoose from 'mongoose';
import 'dotenv/config';

async function connectToDb(){
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('Database has been connected')
    })
}

export default connectToDb ;