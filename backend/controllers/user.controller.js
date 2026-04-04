import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error in Get Messages Controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getFilteredUsers = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const { searchQuery: query } = req.params;
        const usersArr = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        const filteredUsers = []
        usersArr.map((user) => {
            if (user.fullName.toLowerCase().includes(query.toLowerCase())) filteredUsers.push(user);
        })


        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error in Get Filtered Messages Controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}