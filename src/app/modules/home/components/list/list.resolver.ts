import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { Catalog } from '../../models/catalog';
import { HomeService } from './../../services/home.service';

@Injectable({
  providedIn: 'root'
})
export class ListResolver implements Resolve<Catalog[]> {

  constructor(private homeService: HomeService){}
  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<Catalog[]> {
    return this.homeService.getCatalog();
  }
}
