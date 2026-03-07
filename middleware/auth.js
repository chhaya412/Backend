const auth = (req ,res,next) =>{
    const token = req.headers.token;
    if(token === "mysecrettoken"){
        next();

} else{
    res.status(401).json({message:"Unauthorized"});
}};
module.exports = auth;