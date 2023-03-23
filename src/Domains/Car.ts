import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(objVehicles: ICar) {
    super(objVehicles);
    this.doorsQty = objVehicles.doorsQty;
    this.seatsQty = objVehicles.seatsQty;
  }
}

export default Car;