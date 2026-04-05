import express from 'express';
const gameRouter = express.Router();
import {startGameController} from '../controllers/game.controller.js'



gameRouter.post('/start' , startGameController)


export default gameRouter ; 