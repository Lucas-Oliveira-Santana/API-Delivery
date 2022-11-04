import {Router} from 'express'
import { CreateClientController } from '../src/modules/clients/useCases/createClient/CreateClientController'
import { AuthenticateClientController } from '../src/modules/account/authenticateClient/AuthenticateClientController'

const routes = Router()


const createClientController = new CreateClientController() 
const authenticateClientController = new AuthenticateClientController() 

routes.post("/client/",createClientController.handle)
routes.post("/auth",authenticateClientController.handle)


export {routes}