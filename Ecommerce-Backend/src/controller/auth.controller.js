import { createUser, findUserByEmail } from "../services/user.service.js";
import {createCart} from '../services/cart.service.js';
import { generateToken } from "../config/jwtProvider.js";
import bcrypt from 'bcrypt';

const register = async(req, res) => {
    try {
        
        const user = await createUser(req.body);
        const jwt = generateToken(user._id);
        
        await createCart("controller" + user);
        
        
        console.log(user);

        res.status(201).json({
            jwt,
            message: "User registered successfully"
        });
    } catch(err) {
        res.status(400).json({
            message: err.message
        });
    }
}

const login = async(req, res) => {
    try {
        const {password, email} = req.body;
        const user = await findUserByEmail(email);

        if (!user) {
            throw new Error("Invalid email or password");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new Error("Invalid email or password");
        }

        const jwt = generateToken(user._id);

        return res.status(200).send({jwt, message: "Login success"});
    } catch(error) {
        res.status(400).json({
            error: error.message
        });
    }
};


export {register, login };