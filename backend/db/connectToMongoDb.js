import mongoose from "mongoose";

const connectToMongoDb = async () => {

    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connected to DB")
    } catch (error) {
        console.error("Error Connecting To Mongo DB", error.message)
    }
}

export default connectToMongoDb;