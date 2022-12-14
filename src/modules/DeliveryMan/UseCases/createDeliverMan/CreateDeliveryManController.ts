import { Request, Response } from "express";
import { CreateDeliveryManUseCase } from "./CreateDeliveryManUseCase";



class CreateDeliveryManController{
  async handle(req: Request, res: Response): Promise<Response>{
    const {username, password} = req.body

    const createDeliveryManUseCase = new CreateDeliveryManUseCase()

    const deliveryMan = await createDeliveryManUseCase.execute({username, password})

    return res.json(deliveryMan)
  }
}



export{CreateDeliveryManController}