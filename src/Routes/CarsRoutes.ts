import { Router } from 'express';
import CarController from '../Controllers/CarControllers';

const routers = Router();

routers.post('/cars', (req, res, next) => new CarController(req, res, next).createCar());

routers.get('/cars', (req, res, next) => new CarController(req, res, next).findAllCars());

routers.get('/cars/:id', (req, res, next) => new CarController(req, res, next).findByIdCars());

routers.put('/cars/:id', (req, res, next) => new CarController(req, res, next).updateCars());

export default routers;