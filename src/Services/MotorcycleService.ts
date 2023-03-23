import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
// import ErrorHttp from '../Utils/ErrorHttp';

class MotorcycleService {
  public createMotorDomain(motor: IMotorcycle | null): Motorcycle | null {
    if (motor) return new Motorcycle(motor);
    return null;
  }
  public async createMotor(motor: IMotorcycle) {
    const motorODM = new MotorcycleODM();
    const newMotor = await motorODM.create(motor);
    // console.log(car);
    return this.createMotorDomain(newMotor);
  }
}

export default MotorcycleService;