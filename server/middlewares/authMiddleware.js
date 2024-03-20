import  jwt  from "jsonwebtoken";
import authmodel from "../models/authmodel.js";

const isUserAuthenticated = async (req, res, next) => {
    let token;
    const { authorization } = req.headers;
    if (authorization && authorization.startsWith("Bearer")) {
        try {
            token = authorization.split(" ")[1];
            const decoded = jwt.verify(token, "amangangwar");
            const user = await authmodel.findById(decoded.userId).select("-password");
            if (user) {
                req.user = user;
                next();
            } else {
                res.status(401).json({message:"User not authorized"});
            }
        } catch (error) {
            res.status(401).json({message:"User not authorized"});
        }
    }else{
        res.status(401).json({message:"User not authorized"});
    }
};
export default isUserAuthenticated;