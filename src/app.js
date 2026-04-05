import express from 'express';
import connectToDb from './config/database.js';
const app = express();
import cors from 'cors';
import gameRouter from './routes/game.routes.js';

/*** 
 * Middlewares 
 * Express.json -> to read incoming json files
 * Cors -> for connecting frontend and backend
*/
app.use(express.json());
app.use(cors());



/**
 * Controllers Routes
 */

app.use('/api/game',gameRouter)


/**
 * Connecting Database MongoDB
 */
connectToDb()
    .catch((err) => {
        console.log(err);
        process.exit(1);
    })


export default app;