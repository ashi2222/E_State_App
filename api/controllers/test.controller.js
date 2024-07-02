import jwt from "jsonwebtoken"
export const shouldBeLoggedIn =  async (req,res) => {

    console.log(req.userId)  
    res.status(201).json({message:"Token is Valid ! Welcome !"});

};

export const shouldBeAdmin =  async (req,res) => {
    const token = req.cookies.token
    if(!token)return res.status(401).json({message : "Not Authenticated"});

    jwt.verify(token , process.env.JWT_SECRET_KEY , async (err , payload) => {
        if(err)return res.status(401).json({messge:"Token is NOT Valid"});
        if(!payload.isAdmin){
            return res.status(403).json({messge:"Not Authorized"});
        }
    })
    res.status(201).json({messge:"Token is Valid ! Welcome !"});
}

