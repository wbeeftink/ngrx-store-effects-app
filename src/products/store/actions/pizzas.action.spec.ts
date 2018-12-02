import * as fromPizzas from './pizzas.action';

import { Pizza } from '../../models/pizza.model';

describe('Pizzas Actions', () => {
  describe('LoadPizzas Actions', () => {
    describe('LoadPizzas', () => {
      it('should create an action', () => {
        const type = fromPizzas.LOAD_PIZZAS;
        const action = new fromPizzas.LoadPizzas();

        expect({ ...action }).toEqual({ type });
      });
    });

    describe('LoadPizzasFail', () => {
      it('should create an action', () => {
        const type = fromPizzas.LOAD_PIZZAS_FAIL;
        const payload = { message: 'Load Error' };
        const action = new fromPizzas.LoadPizzasFail(payload);

        expect({ ...action }).toEqual({ type, payload });
      });
    });

    describe('LoadPizzasSuccess', () => {
      it('should create an action', () => {
        const type = fromPizzas.LOAD_PIZZAS_SUCCESS;
        const payload: Pizza[] = [
          {
            id: 1,
            name: 'Pizza #1',
            toppings: [
              { id: 1, name: 'onion' },
              { id: 2, name: 'mushroom' },
              { id: 3, name: 'basil' }
            ]
          },
          {
            id: 2,
            name: 'Pizza #2',
            toppings: []
          }
        ];
        const action = new fromPizzas.LoadPizzasSuccess(payload);

        expect({ ...action }).toEqual({ type, payload });
      });
    });
  });

  describe('CreatePizza Actions', () => {
    describe('CreatePizza', () => {
      it('should create an action', () => {
        const type = fromPizzas.CREATE_PIZZA;
        const payload: Pizza = {
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' }
          ]
        };
        const action = new fromPizzas.CreatePizza(payload);

        expect({ ...action }).toEqual({ type, payload });
      });
    });

    describe('CreatePizzaFail', () => {
      it('should create an action', () => {
        const type = fromPizzas.CREATE_PIZZA_FAIL;
        const payload = { message: 'Create Error' };
        const action = new fromPizzas.CreatePizzaFail(payload);

        expect({ ...action }).toEqual({ type, payload });
      });
    });

    describe('CreatePizzaSuccess', () => {
      it('should create an action', () => {
        const type = fromPizzas.CREATE_PIZZA_SUCCESS;
        const payload: Pizza = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' }
          ]
        };
        const action = new fromPizzas.CreatePizzaSuccess(payload);

        expect({ ...action }).toEqual({ type, payload });
      });
    });
  });

  describe('UpdatePizza Actions', () => {
    describe('UpdatePizza', () => {
      it('should create an action', () => {
        const type = fromPizzas.UPDATE_PIZZA;
        const payload: Pizza = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' }
          ]
        };
        const action = new fromPizzas.UpdatePizza(payload);

        expect({ ...action }).toEqual({ type, payload });
      });
    });

    describe('UpdatePizzaFail', () => {
      it('should create an action', () => {
        const type = fromPizzas.UPDATE_PIZZA_FAIL;
        const payload = { message: 'Update Error' };
        const action = new fromPizzas.UpdatePizzaFail(payload);

        expect({ ...action }).toEqual({ type, payload });
      });
    });

    describe('UpdatePizzaSuccess', () => {
      it('should create an action', () => {
        const type = fromPizzas.UPDATE_PIZZA_SUCCESS;
        const payload: Pizza = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' }
          ]
        };
        const action = new fromPizzas.UpdatePizzaSuccess(payload);

        expect({ ...action }).toEqual({ type, payload });
      });
    });
  });

  describe('RemovePizza Actions', () => {
    describe('RemovePizza', () => {
      it('should create an action', () => {
        const type = fromPizzas.REMOVE_PIZZA;
        const payload: Pizza = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' }
          ]
        };
        const action = new fromPizzas.RemovePizza(payload);

        expect({ ...action }).toEqual({ type, payload });
      });
    });

    describe('RemovePizzaFail', () => {
      it('should create an action', () => {
        const type = fromPizzas.REMOVE_PIZZA_FAIL;
        const payload = { message: 'Remove Error' };
        const action = new fromPizzas.RemovePizzaFail(payload);

        expect({ ...action }).toEqual({ type, payload });
      });
    });

    describe('RemovePizzaSuccess', () => {
      it('should create an action', () => {
        const type = fromPizzas.REMOVE_PIZZA_SUCCESS;
        const payload: Pizza = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' }
          ]
        };
        const action = new fromPizzas.RemovePizzaSuccess(payload);

        expect({ ...action }).toEqual({ type, payload });
      });
    });
  });
});
