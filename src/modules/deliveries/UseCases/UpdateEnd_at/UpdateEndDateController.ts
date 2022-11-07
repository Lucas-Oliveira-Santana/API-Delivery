import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";



class UpdateEndDateController{
  async handle(req: Request, res:Response){

    const {id_delivery} = req.body
    const {id_deliveryman} = req

    const updateEndDateUseCase = new UpdateEndDateUseCase()

    const delivery = await updateEndDateUseCase.execute({id_delivery,id_deliveryman})

    console.log(delivery)
    
    return res.json(delivery)
  }
}



export {UpdateEndDateController}