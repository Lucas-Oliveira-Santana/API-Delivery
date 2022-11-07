import { Request, Response } from "express";
import { FindAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";


class FindAllDeliveriesDeliverymanController{
  async handle(req: Request, res: Response){
    const {id_deliveryman} = req

    const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase()

    const deliveries = await findAllDeliveriesUseCase.execute(id_deliveryman)

    return res.json(deliveries)
  }
}


export {FindAllDeliveriesDeliverymanController}