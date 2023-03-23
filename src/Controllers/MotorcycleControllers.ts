import { Request, Response, NextFunction } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';
// import ErrorHttp from '../Utils/ErrorHttp';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }
  public async createMotor() {
    const motor: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
     
    };
  
    try {
      const newMotor = await this.service.createMotor(motor);
      return this.res.status(201).json(newMotor);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAllMotors() {
    const result = await this.service.findAllMotors();
    return this.res.status(200).json(result);
  }

  public async findByIdMotor() {
    const { id } = this.req.params;

    try {
      const result = await this.service.findByIdMotor(id);

      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateMotor() {
    const { id } = this.req.params;
    const motor: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
      
    };
    try {
      const result = await this.service.updateMotor(id, motor);
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}
export default MotorcycleController;