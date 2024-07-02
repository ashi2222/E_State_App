import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
    // Extract data from request body
    const { username, email, password } = req.body;

    // Check if password is provided
    if (!password) {
        console.error("Password is missing in the request body");
        return res.status(400).json({ error: "Password is required" });
    }

    try {
        // Log the request body for debugging
        //console.log("Request Body:", req.body);

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);
        //console.log("Hashed Password:", hashedPassword);

        // Create a new user and save to the database
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        // Log the newly created user
        //console.log("New User:", newUser);

        // Send a response to the client
        res.status(201).json({ message: "New user created", newUser });
    } catch (error) {
        // Log any errors that occur
       console.error("Error creating user:", error);

        // Send a detailed error response to the client
        res.status(500).json({message: "Failed to create User !" });
    }
};

export const login = async (req, res) => {
    // db operations
    const {username , password} = req.body;
    //console.log(username, password);
    try{

        const user = await prisma.user.findUnique({
            where:{username},
        });
       // console.log(user);
        
        if(!user)
        {
            return res.status(401).json({message: "Invalid Credentials!"});
        }
        const isPassvalid = await bcrypt.compare(password , user.password);
        if(!isPassvalid) { 
            return res.status(401).json({message : "Invalid Credentials"});
        }
        const age = 1000*60*60*24*7;
        const token = jwt.sign({
            id:user.id,
            isAdmin : false,

        }, process.env.JWT_SECRET_KEY, {expiresIn: age});


        const {password:userPassword , ...userInfo} = user;
       // res.setHeader("Set-Cookie" , "test=" + "myValue").json("success");
        res.cookie("token" ,token, {
            httpOnly:true,
            maxAge:age,
            // secure : true
        }).status(200).json(userInfo);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message:"Failed to Login" });
    }
};

export const logout = (req, res) => {
    // db operations
    res.clearCookie("token").status(200).json({message : "Logout Successful"});
};
