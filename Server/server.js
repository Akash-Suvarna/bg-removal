import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './Configs/mongodb.js';
import userRouter from './Routes/userRoutes.js';

// App Config
const PORT = process.env.PORT || 4000;
const app = express();

// Initialize DB Connection
await connectDB();

// Initialize Middlewares
app.use(express.json());
app.use(cors());

// API routes
app.get('/', (req, res) => res.send("API working"));
app.use('/api/user',userRouter)

app.listen(PORT, () => console.log("Server Running on port " + PORT));
