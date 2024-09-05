import express from 'express';
import dotenv from 'dotenv';

// Import routes
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

app.use('/api/auth', authRoutes);

app.listen(PORT, () => [
    console.log(`Server is running on port ${PORT}`)
])