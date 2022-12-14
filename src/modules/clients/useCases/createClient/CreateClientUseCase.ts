import {prisma} from '../../../../database/prismaClient'
import {hash} from 'bcryptjs'

interface ICreateClient{
  username: string;
  password: string;
}

class CreateClientUseCase{

  async execute({username, password}:ICreateClient){
    
    const clientExists = await prisma.clients.findFirst({
      where:{
        username: {
          equals:username,
        }
      }
    })

    if(clientExists){
      throw new Error("Client already exists!")
    }

    const passwordHash = await hash(password,10)

    const client = await prisma.clients.create({
    data:{
      username,
      password:passwordHash
    }
    })

    return client
  }
}



export{CreateClientUseCase}