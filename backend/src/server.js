import express from 'express';
import toDoRoutes from './routes/toDoRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'
import cors from 'cors'

import path from 'path'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

//middle ware
app.use(express.json())
app.use(cors({origin: 'http://localhost:5173'}));

app.use('/api/to-do-list', toDoRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  const frontendPath = path.join(__dirname, '../frontend/dist'); // safer for deployment
  app.use(express.static(frontendPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
  });
}


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on ${PORT}.`);
    });
});

