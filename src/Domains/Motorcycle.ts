import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(objMot: IMotorcycle) {
    super(objMot);
    this.category = objMot.category;
    this.engineCapacity = objMot.engineCapacity;
  }
}

export default Motorcycle;