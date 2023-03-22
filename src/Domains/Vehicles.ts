import IVehicles from '../Interfaces/IVehicles';

abstract class Vehicles {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  
  protected status?: boolean;
  protected buyValue: number;
  constructor(objVehicles: IVehicles) {
    this.id = objVehicles.id;
    this.model = objVehicles.model;
    this.year = objVehicles.year;
    this.color = objVehicles.color;
    this.status = objVehicles.status || false;
    this.buyValue = objVehicles.buyValue;
  }
}

export default Vehicles;