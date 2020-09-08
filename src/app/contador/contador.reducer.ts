import { INCREMENTAR, DECREMENTAR, MULTIPLICAR, actions, DIVIDIR, RESET } from './contador.actions';

export function contadorReducer (state: number = 10, action: actions) {

  switch (action.type) {

    case INCREMENTAR:
      return state + 1;

    case DECREMENTAR:
      return state - 1;

    case MULTIPLICAR:
      return state * action.payload;

    case DIVIDIR:
      return state / action.payload;

    case RESET:
      return state = 0;

    default:
      return state;
  }

}
