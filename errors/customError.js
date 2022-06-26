

class customAPIError extends Error{
    constructor(message,statusCode){
    super(message)
    this.statusCode=statusCode
    }
}


const createCustomError=(msg,errCode)=>{
    return new customAPIError(msg,errCode)
}

module.exports={customAPIError,createCustomError}