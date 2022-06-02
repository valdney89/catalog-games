import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject, switchMap, takeUntil } from "rxjs";
import { MatDialog } from '@angular/material/dialog';

import { Catalog } from "../../models/catalog";
import { HomeService } from './../../services/home.service';
import { NewGameDialogComponent } from './../new-game-dialog/new-game-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy{
  destroy$ = new Subject<void>();
  catalogs: Catalog[] = this.activatedRoute.snapshot.data['catalogs'];
  search = new FormControl();

  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService,
    private dialog: MatDialog
  ){}

  ngOnInit(): void {

    this.search.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(value => this.homeService.getCatalogByName(value)),
        takeUntil(this.destroy$)
      )
      .subscribe((res) => this.catalogs = res)

    this.homeService.currentCatalogs
      .pipe(
        switchMap(() => this.homeService.getCatalog()),
        takeUntil(this.destroy$)
      )
      .subscribe((res) => this.catalogs = res)
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  openDialog(): void {
    this.dialog.open(NewGameDialogComponent);
  }
}
