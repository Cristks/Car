import { isValidObjectId, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import ErrorHttp from '../Utils/ErrorHttp';
import AbstractODM from './AbstractODM';

// const { ObjectId } = mongoose.Types;

class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'cars');
  }

  public async findAllCars(): Promise<ICar[]> {
    const result = await this.model.find();
    return result;
  }  

  public async findById(id: string): Promise<ICar | null> {
    if (!isValidObjectId(id)) {
      throw new ErrorHttp('Invalid mongo id', 422);
    }
    return this.model.findById(id);
  }
  public async updateCars(id: string, carObj: ICar): Promise<ICar | null> {
    if (!isValidObjectId(id)) {
      throw new ErrorHttp('Invalid mongo id', 422);
    }
    return this.model.findByIdAndUpdate(id, carObj, { new: true });
  }
}
export default CarODM;

// A função isValidObjectId() é uma função fornecida pelo Mongoose, que é uma biblioteca de modelagem de objetos MongoDB para o Node.js. Ela é usada para validar se uma string fornecida representa um ObjectId válido no MongoDB.
// Por exemplo, suponha que você queira buscar um documento com um determinado ObjectId no MongoDB. Você pode validar a string fornecida como um ObjectId válido usando a função isValidObjectId(), antes de executar a consulta no banco de dados. Isso garante que a consulta só seja executada se a string fornecida for um ObjectId válido, evitando assim erros desnecessários.
