
import {prisma} from "../../../../database/prismaClient"


class FindAllDeliveriesUseCase{
  async execute(id_deliveryman:string){
    const deliveries = await prisma.deliveries.findMany({
      where: {id_deliveryman}
    })

    return deliveries
  }
}


export{FindAllDeliveriesUseCase}