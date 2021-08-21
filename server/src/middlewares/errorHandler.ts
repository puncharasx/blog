import  {Request, Response, NextFunction} from "express";
import HttpException from '../exceptions/HttpException';

const errorHandler = (err: HttpException ,req: Request, res:Response, next:NextFunction) => {
    const status = err.status || 500;
    const validation = err.validation ;
    const message = err.message || "Someting went wrong";

    res
    .status(status)
    .json({
        statusCode: status,
        message: message,
        validation: {error:validation}
    })

}

export default errorHandler
