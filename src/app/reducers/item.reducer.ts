import { createFeature, createReducer, on } from '@ngrx/store';
import { Item } from '../models';

export const itemFeatureKey = 'item';

export interface State {
  items: Item[];
}

export const initialState: State = {
  items: [
    { description: 'placeholder', price: 9 },
    { description: 'placeholder 2', price: 99 },
    { description: 'placeholder 3', price: 999 },
  ],
};

export const reducer = createReducer(
  initialState,
);

export const itemFeature = createFeature({
  name: itemFeatureKey,
  reducer,
});
