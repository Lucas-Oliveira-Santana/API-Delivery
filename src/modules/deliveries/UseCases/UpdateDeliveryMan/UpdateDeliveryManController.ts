import { Request, Response } from "express";
import { UpdateDeliveryManUseCase } from "./UpdateDeliveryManUseCase";

class UpdateDeliveryManController{
  async handle(req: Request, res: Response){

    const {id_delivery} = req.body

    const {id_deliveryman} = req

    const updateDeliveryManUseCase = new UpdateDeliveryManUseCase()
    

    const delivery = await updateDeliveryManUseCase.execute({id_delivery,id_deliveryman})

    return res.json(delivery)
  }
}

export {UpdateDeliveryManController}