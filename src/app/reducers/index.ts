import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromItem from './item.reducer';
import * as fromCart from './cart.reducer';

export interface State {
  [fromItem.itemFeatureKey]: fromItem.State;
  [fromCart.cartFeatureKey]: fromCart.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromItem.itemFeatureKey]: fromItem.reducer,
  [fromCart.cartFeatureKey]: fromCart.reducer,
};
