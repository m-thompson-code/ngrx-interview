import { createFeature, createReducer, on } from '@ngrx/store';
import { Item } from '../models';

export const cartFeatureKey = 'cart';

export interface State {
}

export const initialState: State = {
};

export const reducer = createReducer(
  initialState,
);

export const cartFeature = createFeature({
  name: cartFeatureKey,
  reducer,
});
