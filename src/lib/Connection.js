import mongoose from "mongoose";

export async function Connect(){
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log('Mongodb Connected...',process.env.MONGODB_URI)
    } catch (error) {
        console.log(error.message);
    }
}