import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleControllers';

const routers = Router();

routers.post('/motorcycles', (req, res, next) => 
  new MotorcycleController(req, res, next).createMotor());

// routers.get('/cars', (req, res, next) => new CarController(req, res, next).findAllCars());

// routers.get('/cars/:id', (req, res, next) => new CarController(req, res, next).findByIdCars());

// routers.put('/cars/:id', (req, res, next) => new CarController(req, res, next).updateCars());

export default routers;