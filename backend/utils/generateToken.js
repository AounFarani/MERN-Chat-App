import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //MilliSecond Format
        httpOnly: true, // To Prevent XSS Attacks A.K.A Cross-Site Scripting Attacks
        sameSite: "Strict", // To Prevent CSRF A.K.A Cross-Site Request Forgery Attacks
        secure: process.env.NODE_ENV !== "development"
    })
}

export default generateTokenAndSetCookie;