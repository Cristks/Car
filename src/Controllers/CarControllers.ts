import { Request, Response, NextFunction } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';
// import ErrorHttp from '../Utils/ErrorHttp';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }
  public async createCar() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
  
    try {
      const newCar = await this.service.createCar(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAllCars() {
    const result = await this.service.findAllCars();
    return this.res.status(200).json(result);
  }

  public async findByIdCars() {
    const { id } = this.req.params;

    try {
      const result = await this.service.findByIdCars(id);

      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateCars() {
    const { id } = this.req.params;
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    try {
      const result = await this.service.updateCars(id, car);
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;