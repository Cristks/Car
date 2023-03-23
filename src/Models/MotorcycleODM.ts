import { Schema, isValidObjectId } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';
import ErrorHttp from '../Utils/ErrorHttp';

class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
      
    });
    super(schema, 'Motorcycle');
  }

  public async findAllMotor(): Promise<IMotorcycle[]> {
    const result = await this.model.find();
    return result;
  }  

  public async findByIdMotor(id: string): Promise<IMotorcycle | null> {
    if (!isValidObjectId(id)) {
      throw new ErrorHttp('Invalid mongo id', 422);
    }
    return this.model.findById(id);
  }
  public async updateCars(id: string, motorObj: IMotorcycle): Promise<IMotorcycle | null> {
    if (!isValidObjectId(id)) {
      throw new ErrorHttp('Invalid mongo id', 422);
    }
    return this.model.findByIdAndUpdate(id, motorObj, { new: true });
  }
}
export default MotorcycleODM;