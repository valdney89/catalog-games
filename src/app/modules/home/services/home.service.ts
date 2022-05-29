import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Catalog } from '../models/catalog';
import { Console } from '../models/console';

const APIURL_CATALOG = `${environment.apiUrl}catalog?_sort=dateCompletion&_order=desc`;
const APIURL_CONSOLES = `${environment.apiUrl}consoles`;

@Injectable({ providedIn: 'root' })
export class HomeService {
  catalogsSource = new Subject<void>();
  currentCatalogs: Observable<void> = this.catalogsSource.asObservable();

  constructor(private http: HttpClient) {}

  changeCatalogs(){
    this.catalogsSource.next();
  }

  getCatalog(): Observable<Catalog[]> {
    return this.http.get<Catalog[]>(APIURL_CATALOG);
  }

  getCatalogByName(value: string): Observable<Catalog[]> {
    return this.http.get<Catalog[]>(APIURL_CATALOG).pipe(
      map((data) => {
        return data.filter((catalog) =>
          catalog.title.toLowerCase().includes(value?.toLowerCase())
        );
      })
    );
  }

  addCatalog(catalog: Catalog): Observable<Catalog> {
    return this.http.post<Catalog>(APIURL_CATALOG, catalog);
  }

  getConsoles(): Observable<Console[]> {
    return this.http.get<Console[]>(APIURL_CONSOLES);
  }
}
