import { NewGameDialogComponent } from './../new-game-dialog/new-game-dialog.component';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, switchMap, takeUntil } from "rxjs";
import { MatDialog } from '@angular/material/dialog';
import { Catalog } from "../../models/catalog";
import { HomeService } from './../../services/home.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy{
  catalogs$!: Observable<Catalog[]>
  destroy$ = new Subject()

  constructor(
    private homeService: HomeService,
    private dialog: MatDialog
  ){}

  ngOnDestroy(): void {
    this.destroy$.next;
    this.destroy$.complete;
  }

  ngOnInit(): void {
    this.catalogs$ = this.homeService.getCatalog()
    this.catalogs$.subscribe((res) => console.log(res))
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewGameDialogComponent);

    dialogRef
    .afterClosed()
    .pipe(
      switchMap(catalog => {
      if(catalog) {
        this.homeService.addCatalog(catalog)
      }
      return catalog;
      }),
      takeUntil(this.destroy$)
    )
    .subscribe(
      () => console.log('Game adicionado com sucesso'),
      err => console.log(err)
    );
  }
}
