import express from 'express';  
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';
const app = express();
const PORT=9000;
connectDB();
app.use(cors());
app.use(express.json());
// Your code goes here
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});