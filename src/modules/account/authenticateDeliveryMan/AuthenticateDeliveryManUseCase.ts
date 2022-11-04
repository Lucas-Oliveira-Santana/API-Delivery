import {prisma} from "../../../database/prismaClient"
import {compare} from "bcryptjs"
import {sign} from "jsonwebtoken"

interface IRequest{
  username: string;
  password: string;
}

class AuthenticateDeliveryManUseCase{
  async execute({username, password}:IRequest){
    const deliveryMan =  await prisma.deliveryman.findFirst({
      where: {
        username: username
      }
    })

    if(!deliveryMan){
      throw new Error("User or password is incorrect")
    }

    const passwordMatch = compare(password, deliveryMan.password)

    if(!passwordMatch){
      throw new Error("User or password is incorrect")
    }

    const token = sign({deliveryMan},"15b95fb2-4d73-4f04-9a3c-8ff5c2defdae",{
      subject:deliveryMan.id,
      expiresIn:"1d"
    })

    return token
  }
}


export{AuthenticateDeliveryManUseCase}