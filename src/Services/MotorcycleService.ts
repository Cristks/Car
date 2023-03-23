import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import ErrorHttp from '../Utils/ErrorHttp';

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

  public async findAllMotors() {
    const motorODM = new MotorcycleODM();
    const motorAll = await motorODM.findAllMotor();
    const result = motorAll.map((motor) => this.createMotorDomain(motor));
    return result;
  }
  
  public async findByIdMotor(id: string) {
    const motorODM = new MotorcycleODM();
    const result = await motorODM.findByIdMotor(id);
    if (!result) throw new ErrorHttp('Motorcycle not found', 404);
    return this.createMotorDomain(result);
  }

  public async updateMotor(id: string, carObj: IMotorcycle) {
    const motorODM = new MotorcycleODM();
    const result = await motorODM.updateCars(id, carObj);
    if (!result) throw new ErrorHttp('Motorcycle not found', 404);
    return this.createMotorDomain(result);
  }
}

export default MotorcycleService;