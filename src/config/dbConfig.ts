import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDb() {
    try {
        mongoose.connect(process.env.MONGODB_URI!)
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("database connected successfully")
        })


        connection.on('error', (err) => {
            console.log('mongo db connection error, make sure mongodb is running')
            process.exit();
        })
    } catch (error) {
        console.log("something went wrong in the connectDB fucntion");
        console.log(error)
    }
}