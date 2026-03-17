import cors from 'cors';
import express from 'express';
import authRoutes from './routes/auth.route.js';
const app = express();
// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Application routes
app.use('/api/auth', authRoutes);
// Testing route
app.get('/', (req, res) => {
    res.send('Event Management Server is running!');
});
// Not found route
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
    });
});
export default app;
