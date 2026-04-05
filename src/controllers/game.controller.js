import gameSessionModel from '../models/gameSession.model.js';

export const startGameController = async (req, res, next) => {

    try {

        let { productName, startingPrice, minimumPrice } = req.body;

        /**
         * Calculate negotiation percentage
         */
        const percent = minimumPrice / startingPrice;

        let sellerType;

        if (percent <= 0.50) {
            sellerType = "stubborn";
        }
        else if (percent <= 0.65) {
            sellerType = "aggressive";
        }
        else if (percent <= 0.75) {
            sellerType = "friendly";
        }
        else {
            sellerType = "smart";
        }

        /**
         * Target price logic
         */
        const targetPrice = Math.floor(
            startingPrice * (0.75 + Math.random() * 0.05)
        );

        const game = await gameSessionModel.create({
            productName,
            startingPrice,
            minimumPrice,
            targetPrice,
            sellerType,
            currentPrice: startingPrice
        });

        res.status(201).json({
            success: true,
            gameId: game._id,
            startingPrice,
            minimumPrice,
            sellerType
        });

    } catch (err) {
        res.status(500).json({
            message: err.message,
            success: false
        });
    }
};