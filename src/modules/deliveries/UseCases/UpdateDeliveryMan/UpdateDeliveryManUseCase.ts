import {prisma} from "../../../../database/prismaClient"


interface IUpdateDelivery{
  id_deliveryman:string
  id_delivery: string
}

class UpdateDeliveryManUseCase{
  async execute({id_delivery,id_deliveryman}:IUpdateDelivery){
    const delivery = await prisma.deliveries.update({
      where: {
        id:id_delivery
      },
      data: {
        id_deliveryman
      }
    })
    
    return delivery

  }
}

export{UpdateDeliveryManUseCase}