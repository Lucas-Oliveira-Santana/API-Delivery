import {prisma} from "../../../../database/prismaClient"

interface IUpdateEndDate{
  id_deliveryman: string
  id_delivery: string
}

class UpdateEndDateUseCase{
  async execute({id_deliveryman,id_delivery}:IUpdateEndDate){
    const delivery = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman: id_deliveryman
      },
      data:{
       end_at:new Date()
      }
    })
    return delivery
  }
}

export{UpdateEndDateUseCase}