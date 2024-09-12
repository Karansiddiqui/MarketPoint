import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import {getUserIdFromToken} from '../config/jwtProvider.js';

const createUser = async (userData) => {
    try {
        let { firstName, lastName, email, password } = userData;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            throw new Error('User already exists');
        }

        password = await bcrypt.hash(password, 8);

        const user = await User.create({firstName, lastName, email, password});

        console.log("Created User: " + user);

        return user;
        
    } catch(error) {
        throw new Error (error.message);
    }
}

const findUserById = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found by ID: ' + userId);
        }
        return user;
    } catch(error) {
        console.log("error :------- ",error.message)
        throw new Error(error.message)
    }
}

const findUserByEmail = (email) => {
    try {
        const user = User.findOne({email});
        if (!user) {
            throw new Error('User not found by email: ' + email);
        }
        return user;
    } catch(error) {
        console.log("error :------- ",error.message)
        throw new Error(error.message)
    }
};

const getUserProfileByToken=async(token)=>{
    try {

        const userId = getUserIdFromToken(token)

        console.log("userr id ",userId)


        const user= (await findUserById(userId))
        // .populate("addresses");
        user.password=null;
        
        if(!user){
            throw new Error("user not exist with id : ",userId)
        }
        return user;
    } catch (error) {
        console.log("error ----- ",error.message)
        throw new Error(error.message)
    }
}

const getAllUsers = async()=> {
    try {
        const users= await User.find({});
        return users;
    } catch(error) {
        console.log("error :------- ",error.message)
        throw new Error(error.message)
    }
}



export { createUser, findUserByEmail, findUserById, getAllUsers, getUserProfileByToken };