
const {customAPIError}=require('../errors/customError')

const errorHandlerMiddleware = (err,req,res,next)=>{
    if(err instanceof customAPIError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).send({msg:err});
}

module.exports=errorHandlerMiddleware