import express from 'express';
import { adminRoute, protectRoute } from '../middleware/authMiddleware.js';
import { getAnalyticsData, getDailySalesData } from '../controllers/analyticsController.js';

const router = express.Router();

router.get('/', protectRoute, adminRoute, async (req, res) => {
    try {
        const analyticsData = await getAnalyticsData();

        const endDate = new Date();
        const startDate = new Date(endDate.getTime() - 7 * 24 * 60 * 60 * 1000);

        const dailySalesData = await getDailySalesData(startDate, endDate);
        console.log(dailySalesData);

        res.json({ analyticsData, dailySalesData });
    } catch (error) {
        console.log('Error in analytics route', error.message);
        res.status(500).json({ message: error.message });
    }
})

export default router;