import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ItemsService } from '../services/items.service';

@Injectable()
export class ItemEffects {
  constructor(private actions$: Actions, private itemsService: ItemsService) {}
}
