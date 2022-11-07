import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
  sub:string;
}

async function ensureAuthenticatedDeliveryMan(req:Request, res:Response, next: NextFunction){

  const authHeader = req.headers.authorization


  if(!authHeader){
   return res.status(401).json({
    message:"Token missing"
   })
  }

  const [, token] = authHeader.split(" ")

  try {

    const {sub} = verify(token,"15b95fb2-4d73-4f04-9a3c-8ff5c2defdae") as IPayload


    req.id_deliveryman = sub

    next()
  }catch{
    return res.status(401).json({
      message:"Token invalid"
     })
  }



}


export {ensureAuthenticatedDeliveryMan}