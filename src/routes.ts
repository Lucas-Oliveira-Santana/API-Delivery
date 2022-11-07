import {Router} from 'express'
import { CreateClientController } from '../src/modules/clients/useCases/createClient/CreateClientController'
import { AuthenticateClientController } from '../src/modules/account/authenticateClient/AuthenticateClientController'
import { CreateDeliveryManController } from "../src/modules/DeliveryMan/UseCases/createDeliverMan/CreateDeliveryManController"
import { AuthenticateDeliveryManController } from '../src/modules/account/authenticateDeliveryMan/AuthenticateDeliveryManController'
import { CreateDeliveryController } from '../src/modules/deliveries/UseCases/CreateDelivery/CreateDeliveryController'
import { ensureAuthenticatedClient } from "../src/middlewares/ensureAuthenticatedClient"
import { FindAllWithoutEndDateController } from '../src/modules/deliveries/UseCases/findAllWithoutEndDate/FindAllWithoutEndDateController'
import { ensureAuthenticatedDeliveryMan } from '../src/middlewares/ensureAuthenticatedDeliveryMan'
import { UpdateDeliveryManController } from '../src/modules/deliveries/UseCases/UpdateDeliveryMan/UpdateDeliveryManController'
import { FindAllDeliveriesController } from '../src/modules/clients/useCases/deliveries/FIndAllDeliveriesController'
import {FindAllDeliveriesDeliverymanController} from "../src/modules/DeliveryMan/UseCases/deliveries/FindAllDeliveriesController"
import { UpdateEndDateController } from '../src/modules/deliveries/UseCases/UpdateEnd_at/UpdateEndDateController'

const routes = Router()


const createClientController = new CreateClientController() 
const authenticateClientController = new AuthenticateClientController() 


const createDeliveryManController = new CreateDeliveryManController() 
const authenticateDeliveryManController = new AuthenticateDeliveryManController() 
const createDeliveryController = new CreateDeliveryController()

const findAllWithoutEndDateController = new FindAllWithoutEndDateController()
const findAllDeliveriesController = new FindAllDeliveriesController()
const updateDeliveryManController = new UpdateDeliveryManController() 

const findAllDeliveriesDeliveryManController = new FindAllDeliveriesDeliverymanController()
const updateEndDateController = new UpdateEndDateController() 

routes.post("/client/",createClientController.handle)


routes.post("/client/auth",authenticateClientController.handle)
routes.post("/deliveryman/",createDeliveryManController.handle)


routes.post("/delivery/auth",authenticateDeliveryManController.handle)
routes.post("/delivery",ensureAuthenticatedClient,createDeliveryController.handle)

routes.post("/delivery",ensureAuthenticatedClient,createDeliveryController.handle)

routes.put("/delivery/update", ensureAuthenticatedDeliveryMan,updateDeliveryManController.handle)
routes.get("/deliveries",ensureAuthenticatedDeliveryMan,findAllWithoutEndDateController.handle)

routes.get("/deliveries/client",ensureAuthenticatedClient,findAllDeliveriesController.handle)
routes.get("/deliveries/deliveryman",ensureAuthenticatedDeliveryMan,findAllDeliveriesDeliveryManController.handle)


routes.put("/delivery/end", ensureAuthenticatedDeliveryMan,updateEndDateController.handle)


export {routes}