require('dotenv').config();
const express =require('express');
const cors = require('cors');
const app = express();
 const  userRoutes = require('./routes/userRoute');
 const productRoutes = require('./routes/productRoute');
  const logger =require('./middleware/logger');
   const connectDB = require('./config/db');
   const taskRoutes = require('./routes/taskRoute');
   const errorHandler = require("./middleware/errorHandler");
   app.use(cors());
   app.use (express.json());
  app.use(logger);
  app.use(errorHandler);
  
  app.use("/users",userRoutes);
    app.use("/products",productRoutes);
     app.use("/tasks",taskRoutes);
    connectDB();



// app.get('/',(req,res) =>{
//     res.send("server is running");
// });

app.listen(5000,()=>{
    console.log("server is running on port 5000");
});