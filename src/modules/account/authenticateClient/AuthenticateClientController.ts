import { Request, Response } from "express"
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase"



class AuthenticateClientController{
  async handle(req: Request, res: Response): Promise<Response>{

    const {username, password} = req.body

  const authenticateUserUseCase = new AuthenticateClientUseCase()

  const token = await authenticateUserUseCase.execute({username, password})

  
  return res.json({token})
}
}

export {AuthenticateClientController}