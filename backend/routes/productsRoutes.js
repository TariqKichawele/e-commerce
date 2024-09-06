import express from 'express';
import { getAllProducts, getFeaturedProducts, createProduct } from '../controllers/productControllers.js';
import { adminRoute, protectRoute } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protectRoute, adminRoute, getAllProducts);
router.get('/featured', getFeaturedProducts);
router.post('/', protectRoute, adminRoute, createProduct);

export default router;