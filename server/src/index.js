import express from 'express';
import authRoutes from './routes/auth.route.js'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import { connectDb } from './lib/db.js';
import messageRoutes from './routes/message.route.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
    connectDb();
});
