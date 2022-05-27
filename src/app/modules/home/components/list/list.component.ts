import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Catalog } from "../../models/catalog";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  catalogs$!: Observable<Catalog[]>

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
