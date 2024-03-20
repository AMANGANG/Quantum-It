import mongoose from "mongoose";

const authschema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    dateofbirth: {
        type: Date,
        required: true,
    },
    email: {   
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const authmodel = mongoose.model("user", authschema);
export default authmodel;
