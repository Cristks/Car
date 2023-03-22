import ICar from '../Interfaces/ICar';
import Vehicles from './Vehicles';

class Car extends Vehicles {
  private doorsQty: number;
  private seatsQty: number;

  constructor(objVehicles: ICar) {
    super(objVehicles);
    this.doorsQty = objVehicles.doorsQty;
    this.seatsQty = objVehicles.seatsQty;
  }
}

export default Car;