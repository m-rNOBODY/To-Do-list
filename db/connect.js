const mongoose = require('mongoose');






const connectDB=(url)=>{
    return mongoose
    .connect(url,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true,
        }
        )
    .then(()=>console.log("Connected to db..."))
    // .catch((err)=>console.log(err))
}

module.exports=connectDB
