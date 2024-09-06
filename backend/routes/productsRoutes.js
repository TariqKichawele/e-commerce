import express from 'express';
import { getAllProducts } from '../controllers/productControllers.js';
import { protectRoute } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protectRoute,getAllProducts);

export default router;