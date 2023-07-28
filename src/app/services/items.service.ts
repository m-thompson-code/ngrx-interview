import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Item } from "../models";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(private readonly httpClient: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>('./assets/items.json');
  }
}
