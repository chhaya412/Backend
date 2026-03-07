const express =require('express');
const app = express();
 const  userRoutes = require('./routes/userRoute');
 const productRoutes = require('./routes/productRoute');
  const logger =require('./middleware/logger');
   const connectDB = require('./config/db');
  app.use (express.json());
  app.use(logger);
  
  app.use("/users",userRoutes);
    app.use("/products",productRoutes);
     
    connectDB();



// app.get('/',(req,res) =>{
//     res.send("server is running");
// });

app.listen(5000,()=>{
    console.log("server is running on port 5000");
});