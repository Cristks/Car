import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleControllers';

const routers = Router();

routers.post('/motorcycles', (req, res, next) => 
  new MotorcycleController(req, res, next).createMotor());

routers.get('/motorcycles', (req, res, next) => 
  new MotorcycleController(req, res, next).findAllMotors());

routers.get('/motorcycles/:id', (req, res, next) => 
  new MotorcycleController(req, res, next).findByIdMotor());

routers.put('/motorcycles/:id', (req, res, next) => 
  new MotorcycleController(req, res, next).updateMotor());

export default routers;