import { NewGameDialogComponent } from './../new-game-dialog/new-game-dialog.component';
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { MatDialog } from '@angular/material/dialog';
import { Catalog } from "../../models/catalog";
import { HomeService } from './../../services/home.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  catalogs$!: Observable<Catalog[]>

  constructor(
    private homeService: HomeService,
    private dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.catalogs$ = this.homeService.getCatalog()
    this.catalogs$.subscribe((res) => console.log(res))
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewGameDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
