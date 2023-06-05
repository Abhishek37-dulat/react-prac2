import mongoose from "mongoose";

export const Connection = async (MONGODB_URL) =>{
    try{
        const conn = await mongoose.connect(MONGODB_URL);
        console.log(`MONGODB connected: ${conn.connection.host}`);
    }
    catch(error){
        console.log("MONGODB error: ",error);
        process.exit(1);
    }
}