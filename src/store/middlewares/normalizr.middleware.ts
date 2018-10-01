import { Middleware, MiddlewareAPI, Dispatch } from 'redux';
import { normalize } from 'normalizr';

const normalizrMiddleware: Middleware = (store: MiddlewareAPI) => (
  next: Dispatch
) => (action: any): Dispatch => {
  const schema = action.meta && action.meta.schema;

  if (
    schema &&
    action.type.match('.+_DONE$') &&
    action.payload.result &&
    !action.error
  ) {
    const normalized = normalize(action.payload.result, schema);
    // tslint:disable-next-line:no-parameter-reassignment
    action = {
      ...action,
      payload: {
        ...action.payload,
        result: normalized,
      },
    };
  }

  return next(action);
};

export default normalizrMiddleware;
