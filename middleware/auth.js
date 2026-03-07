const jwt = require("jsonwebtoken");
const auth = (req ,res,next) =>{
    const token = req.headers.authorization;
//     if(token === "mysecrettoken"){
//         next();

// } else{
//     res.status(401).json({message:"Unauthorized"});
// }};
// module.exports = auth;
if(!token){
    return res.status(401).json({
        message:"no token"
    });

}
try{
    const decoded = jwt.verify(token,"mysecrettoken");
    req.user = decoded;
    next();

}catch(error){
    res.status(401).json({
        message:"invalid token"
    });
}
};

module.exports = auth;