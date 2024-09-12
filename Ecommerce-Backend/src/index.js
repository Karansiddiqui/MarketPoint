import express from 'express';
import cors from 'cors';
import userRouters from './routes/user.routes.js';
import authRouters from './routes/auth.routes.js';

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send({message : 'Welcome to ecommerce api', status: true});
})

app.use('/auth', authRouters);

app.use('/api/users', userRouters);

export default app;