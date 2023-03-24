import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';

describe('Check the car service layer', function () {
  it('Check if it is possible to create car successfully', async function () {
    const carCreateInput: ICar = {
      model: 'Tempra',
      year: 1995,
      color: 'Black',
      buyValue: 39.000,
      doorsQty: 2,
      seatsQty: 5,
    };
    const carCreateOutput: Car = new Car(
      {
        id: '634852326b35b59438fbea31',
        model: 'Tempra',
        year: 1995,
        color: 'Black',
        buyValue: 39,
        doorsQty: 2,
        seatsQty: 5,
      },
    );

    sinon.stub(Model, 'create').resolves(carCreateOutput);
  
    const service = new CarService();
    const result = await service.createCar(carCreateInput);
  
    expect(result).to.be.deep.equal(carCreateOutput);
  });
  
  it('Listing existing cars', async function () {
    const carInput: ICar[] = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Tempra',
        year: 1995,
        color: 'Black',
        buyValue: 39,
        doorsQty: 2,
        seatsQty: 5,
      },
    ];

    const carInputAll: Car[] = carInput.map((car) => new Car(car));
    
    sinon.stub(Model, 'find').resolves(carInputAll);
    
    const service = new CarService();
    const result = await service.findAllCars();

    expect(result).to.be.deep.equal(carInputAll);
  });

  it('Listing a car by id', async function () {
    const id = '634852326b35b59438fbea31';
    
    const carPutId: ICar = {
      id: '634852326b35b59438fbea31',
      model: 'Tempra',
      year: 1995,
      color: 'Black',
      buyValue: 39,
      doorsQty: 2,
      seatsQty: 5,
    };

    const carOutPutId: Car = new Car(carPutId);
    sinon.stub(Model, 'findById').resolves(carOutPutId);
    
    const service = new CarService();
    const result = await service.findByIdCars(id);

    expect(result).to.be.deep.equal(carOutPutId);
  });

  it(
    'Verifies that it is not possible to successfully list a car of its non-existent id', 
    async function () {
      const invalidId = '634852326b35b59438fbeaXX';
   
      sinon.stub(Model, 'findById').resolves({});
      
      try {
        const service = new CarService();
        await service.findByIdCars(invalidId);
      } catch (error) {
        expect((error as Error).message).to.be.deep.equal('Invalid mongo id');
      }
    },
  );

  afterEach(function () {
    sinon.restore();
  });
});