import User from "../models/user.model.js";

const createCart = async (user) => {
    try {
        const cart = new createCart({user});
        const createdCart = await cart.save();
        return createdCart;
    } catch (error) {
        throw new Error(error.message);
    }
}

export { createCart };