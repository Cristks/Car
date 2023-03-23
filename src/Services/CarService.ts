// import mongoose from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import ErrorHttp from '../Utils/ErrorHttp';

// const { ObjectId } = mongoose.Types;

class CarService {
  public createCarDomain(car: ICar | null): Car | null {
    if (car) return new Car(car);
    return null;
  }
  public async createCar(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    // console.log(car);
    return this.createCarDomain(newCar);
  }

  public async findAllCars() {
    const carODM = new CarODM();
    const carAll = await carODM.findAllCars();
    const result = carAll.map((car) => this.createCarDomain(car));
    return result;
  }
  
  public async findByIdCars(id: string) {
    const carODM = new CarODM();
    const result = await carODM.findById(id);
    if (!result) throw new ErrorHttp('Car not found', 404);
    return this.createCarDomain(result);
  }

  public async updateCars(id: string, carObj: ICar) {
    const carODM = new CarODM();
    const result = await carODM.updateCars(id, carObj);
    if (!result) throw new ErrorHttp('Car not found', 404);
    return this.createCarDomain(result);
  }
}

export default CarService;