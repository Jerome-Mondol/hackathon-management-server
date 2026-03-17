import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import authRoutes from './app/modules/user/user.route.js';
import globalErrorHandler from './utils/globalError.js';

const app: Application = express();

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Application routes
app.use('/api/auth', authRoutes);

// Testing route
app.get('/', (req: Request, res: Response) => {
  res.send('Event Management Server is running!');
});

// Not found route
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Global error handler
app.use(globalErrorHandler);

export default app;