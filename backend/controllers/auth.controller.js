import bcrypt from "bcryptjs"

import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js"
import { getRandomBoyImg, getRandomGirlImg } from "../utils/profileImg.js";

export const signUp = async (req, res) => {

    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not Match" });
        }

        const user = await User.findOne({ userName });
        if (user) {
            return res.status(400).json({ error: "Username already exists" });
        }

        //  Hash Password Here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // const profilePicForMale = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        // const profilePicForFemale = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const profilePicForMale = `https://i.pravatar.cc/150?img=${getRandomBoyImg()}&u=${userName}`;
        const profilePicForFemale = `https://i.pravatar.cc/150?img=${getRandomGirlImg()}&u=${userName}`;

        const newUser = new User({
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? profilePicForMale : profilePicForFemale

        });

        if (newUser) {

            // Generate JWT token
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                profilePic: newUser.profilePic
            });
        } else {
            res.status(400).json({ error: "Invalid User Data" });
        }

    } catch (error) {
        console.error("Error in SignUp Controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }

}

export const LogIn = async (req, res) => {

    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid Credentials" });
        }

        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            profilePic: user.profilePic
        })

    } catch (error) {
        console.error("Error in LogIn Controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }

}

export const LogOut = (req, res) => {

    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged Out Successfully" })

    } catch (error) {
        console.error("Error in LogOut Controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }

}