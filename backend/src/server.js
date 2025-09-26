import express from 'express';
import toDoRoutes from './routes/toDoRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//middle ware
app.use(express.json())
app.use(cors({origin: 'http://localhost:5173'}));

app.use('/api/to-do-list', toDoRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on ${PORT}.`);
    });
})

