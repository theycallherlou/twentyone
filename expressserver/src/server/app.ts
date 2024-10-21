import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

const PORT = process.env.VITE_APP_CLIENT_PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use(
  cors({
    origin: `http://localhost:${PORT}`
  })
);

app.get('/health', (req, res) => {
  res.send('Server is healthy!');
});

export default app;
