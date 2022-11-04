import {compare} from "bcryptjs"
import { prisma } from "../../../database/prismaClient";
import {sign} from "jsonwebtoken"

interface IRequest{
  username: string;
  password: string;
}

class AuthenticateClientUseCase{

  async execute({username, password}:IRequest){
    const userExists = await prisma.clients.findFirst({
      where: {
        username
      }
    })

    if(!userExists){
      throw new Error("User or password is incorrect")
    }

    const passwordMatch = await compare(password,userExists.password)

    if(!passwordMatch){
      throw new Error("User or password is incorrect")
    }

    const token = sign({username},"8668c3ca-5242-4561-a6d2-1ed928fb8587",{
      subject:userExists.id,
      expiresIn:"1d"
    })

    return token
  }
}



export{AuthenticateClientUseCase}