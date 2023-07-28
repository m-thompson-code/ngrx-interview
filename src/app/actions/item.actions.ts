import { createAction, props } from '@ngrx/store';
import { Item } from '../models';

const loadItems = createAction(
  '[Item] Load Items'
);

export const ItemActions = {
  loadItems
};
