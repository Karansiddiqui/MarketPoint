import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY ;

const generateToken = (userId) => {
    const token = jwt.sign({userId}, SECRET_KEY, {expiresIn: '48h'});
    return token;
}

const getUserIdFromToken = (token) => {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded.userId;
}

export {generateToken, getUserIdFromToken};