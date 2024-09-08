import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';

// Import routes
import authRoutes from './routes/authRoutes.js';
import productsRoutes from './routes/productsRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import couponRoutes from './routes/couponRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import analyticsRoutes from './routes/analyticsRoutes.js';
import { connectDB } from './lib/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

const __dirname = path.resolve()

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/coupon', couponRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/analytics', analyticsRoutes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    connectDB();
})