import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';

describe('Check the Motorcycle service layer', function () {
  it('Check if it is possible to create motorcycle successfully', async function () {
    const motorCreateInput: IMotorcycle = {
    
      model: 'Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
        
    };
    const motorCreateOutput: Motorcycle = new Motorcycle(
      {
        id: '634852326b35b59438fbea2f',
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
    );

    sinon.stub(Model, 'create').resolves(motorCreateOutput);
  
    const service = new MotorcycleService();
    const result = await service.createMotor(motorCreateInput);
  
    expect(result).to.be.deep.equal(motorCreateOutput);
  });
  
  it('Listing existing Motorcycle', async function () {
    const motorInput: IMotorcycle[] = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Honda Cbr 1000rr',
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 59.900,
        category: 'Street',
        engineCapacity: 1000,
      },
    ];

    const motorInputAll: Motorcycle[] = motorInput.map((motor) => new Motorcycle(motor));
    
    sinon.stub(Model, 'find').resolves(motorInputAll);
    
    const service = new MotorcycleService();
    const result = await service.findAllMotors();

    expect(result).to.be.deep.equal(motorInputAll);
  });

  it('Listing a motorcycle by id', async function () {
    const id = '634852326b35b59438fbea31';
    
    const motorPutId: IMotorcycle = {
      id: '634852326b35b59438fbea31',
      model: 'Honda Cbr 1000rr',
      year: 2011,
      color: 'Orange',
      status: true,
      buyValue: 59.900,
      category: 'Street',
      engineCapacity: 1000,
      
    };

    const motorOutPutId: Motorcycle = new Motorcycle(motorPutId);
    sinon.stub(Model, 'findById').resolves(motorOutPutId);
    
    const service = new MotorcycleService();
    const result = await service.findByIdMotor(id);

    expect(result).to.be.deep.equal(motorOutPutId);
  });

  it(
    'Verifies that it is not possible to successfully list a Motorcycle of its non-existent id', 
    async function () {
      const invalidId = '634852326b35b59438fbeaXX';
   
      sinon.stub(Model, 'findById').resolves({});
      
      try {
        const service = new MotorcycleService();
        await service.findByIdMotor(invalidId);
      } catch (error) {
        expect((error as Error).message).to.be.deep.equal('Invalid mongo id');
      }
    },
  );

  afterEach(function () {
    sinon.restore();
  });
});