import { NextFunction, Request, Response } from "express";
import {verify} from "jsonwebtoken"

interface IPayload{
  sub:string;
}

async function ensureAuthenticatedClient(req: Request, res: Response,next: NextFunction){
  const authHeader = req.headers.authorization

  if(!authHeader){
    return res.status(401).json({
      message: "Token missing"
    })
  }

  const [,token] = authHeader.split(" ")

  try{
    const {sub} = verify(token,"8668c3ca-5242-4561-a6d2-1ed928fb8587") as IPayload
    
    req.id_client = sub

    return next()
  }catch(err){
    return res.status(401).json({
      message: "Invalid token!"
    })
  }


 

}



export {ensureAuthenticatedClient}