import mongoose from "mongoose";

const connectDB = async () => {
    const res= await mongoose.connect("mongodb://localhost:27017/quantum-it");
    if(res){
        console.log("Database connected");   
    }       
      
};
 export default connectDB;