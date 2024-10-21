import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import employeesRouter from '../routes/employees';
import { errorHandler } from '../middlewares/errors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.VITE_APP_CLIENT_PORT;
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min.
  max: 100 // 100 requests per windowMs per ip
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use(
  cors({
    origin: `http://localhost:${PORT}`
  })
);

app.use(limiter);

app.use('/api/v1', employeesRouter);

app.use(errorHandler);

app.get('/health', (req, res) => {
  res.send('Server is healthy!');
});

export default app;
