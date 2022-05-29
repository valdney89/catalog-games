
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { environment } from "src/environments/environment";
import { Catalog } from "../models/catalog";

const APIURL = `${environment.apiUrl}catalog`

@Injectable({ providedIn: 'root' })
export class HomeService {

  constructor(private http: HttpClient){}

  getCatalog(): Observable<Catalog[]>{
    return this.http.get<Catalog[]>(APIURL);
  }
}
