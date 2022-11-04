import {Router} from 'express'
import { CreateClientController } from '../src/modules/clients/useCases/createClient/CreateClientController'
import { AuthenticateClientController } from '../src/modules/account/authenticateClient/AuthenticateClientController'
import { CreateDeliveryManController } from "../src/modules/DeliveryMan/UseCases/createDeliverMan/CreateDeliveryManController"
import { AuthenticateDeliveryManController } from '../src/modules/account/authenticateDeliveryMan/AuthenticateDeliveryManController'

const routes = Router()


const createClientController = new CreateClientController() 
const authenticateClientController = new AuthenticateClientController() 


const createDeliveryManController = new CreateDeliveryManController() 
const authenticateDeliveryManController = new AuthenticateDeliveryManController() 

routes.post("/client/",createClientController.handle)
routes.post("/client/auth",authenticateClientController.handle)
routes.post("/deliveryman/",createDeliveryManController.handle)
routes.post("/delivery/auth",authenticateDeliveryManController.handle)


export {routes}