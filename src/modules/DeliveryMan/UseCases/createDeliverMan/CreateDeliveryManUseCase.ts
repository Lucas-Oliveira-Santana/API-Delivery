import {prisma} from '../../../../database/prismaClient'
import {hash} from "bcryptjs"


interface ICreateDeliveryMan{
  username: string
  password: string
}

class CreateDeliveryManUseCase{
  async execute({username, password}:ICreateDeliveryMan){

    const DeliveryManAlreadyExists = await prisma.deliveryman.findFirst({
      where: {
        username:{
        equals: username
      }}
     })

     if(DeliveryManAlreadyExists){
      throw new Error('DeliveryMan already exists!')
     }

     const passwordHash = await hash(password,10)

     const DeliveryMan = await prisma.deliveryman.create({
      data:{
        username, 
        password:passwordHash
      }
     })

     return DeliveryMan
  }
}



export{CreateDeliveryManUseCase}