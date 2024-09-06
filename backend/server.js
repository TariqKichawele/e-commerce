import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// Import routes
import authRoutes from './routes/authRoutes.js';
import productsRoutes from './routes/productsRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import { connectDB } from './lib/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/cart', cartRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    connectDB();
})