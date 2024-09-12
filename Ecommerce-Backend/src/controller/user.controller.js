import { getUserProfileByToken, getAllUsers } from "../services/user.service.js";


const getUserProfile = async (req, res) => {
    try {
        const jwt = req.headers.authorization?.split(" ")[1];

        if (!jwt) {
            return res.status(401).json({ error: "Token not found" });
        }

        const user = await getUserProfileByToken(jwt);

        return res.status(200).json({ user });


    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getAllUsersProfile = async (req, res) => {
    try {
        const users = await getAllUsers();
        
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export { getAllUsersProfile, getUserProfile };