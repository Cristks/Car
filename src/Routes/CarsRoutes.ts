import { Router } from 'express';
import CarController from '../Controllers/CarControllers';

const routers = Router();
routers.post('/cars', (req, res, next) => new CarController(req, res, next).createCar());

export default routers;