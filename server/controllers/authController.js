import authmodel from "../models/authmodel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
class authcontroller{
    static  userRegistration=async(req,res)=>{
        const {username,dateofbirth,email,password}=req.body;
        try {
            if(username && dateofbirth && email && password){
            const isUserExist=await authmodel.findOne({email:email});
            if(isUserExist){
                res.status(400).json({message:"User already exist"});
            }else{
               const gensalt=await bcrypt.genSalt(10);
                const hashedpassword=await bcrypt.hash(password,gensalt);
                const user = new authmodel({
                    username,
                    dateofbirth,
                    email,
                    password:hashedpassword
                });
                const result=await user.save();
                if(result){
                    res.status(201).json({message:"User registered successfully",user:result});
                }
                else{
                    res.status(400).json({message:"User not registered"});
                }
            }       
        }
        else{
            res.status(400).json({message:"All fields are required"});
        }
    }catch (error) {
            res.status(400).json({message:error.message});
        }
    };
    static  userLogin=async(req,res)=>{
        const {email,password}=req.body;
        try {
            if(email && password){
                const user=await authmodel.findOne({email:email});
                if(user){
                    if(email===user.email && (await bcrypt.compare(password,user.password))){
                        const token=jwt.sign({userId:user._id},"amangangwar",{expiresIn:"2d"});
                        res.status(201).json({message:"User logged in successfully",token:token,name:user.username,dateofbirth:user.dateofbirth,email:user.email});

                    }else{
                            res.status(400).json({message:"Invalid email or password"});
                    }
                }
                else{
                    res.status(400).json({message:"User not registered"});
                }

            }else{
                res.status(400).json({message:"All fields are required"});
            }

        } catch (error) {
            res.status(400).json({message:error.message});
        } 
     };
    static userdata=async(req,res)=>{
        try {
            const users = await authmodel.find({}, 'username dateofbirth email');
            res.status(200).json({users});
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    };

}
export default authcontroller;