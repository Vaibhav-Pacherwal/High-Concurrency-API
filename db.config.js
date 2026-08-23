import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to DB");
    }).catch(() => {
        console.log("Failed to connect to DB");
    });
}

export default connectDB;