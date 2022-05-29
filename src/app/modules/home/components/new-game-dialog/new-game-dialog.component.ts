import { takeUntil } from 'rxjs';
import { HomeService } from './../../services/home.service';
import { Catalog } from './../../models/catalog';
import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Console } from "../../models/console"
import { Subject } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  template: `Game added with success`,
  selector: 'snack-bar-component',
})
export class NewGameSnackBarComponent {}

@Component({
  selector: 'app-new-game-dialog',
  templateUrl: './new-game-dialog.component.html',
  styleUrls: ['./new-game-dialog.component.scss']
})
export class NewGameDialogComponent implements OnInit,OnDestroy {
  gameForm!: FormGroup;
  destroy$ = new Subject<void>();
  consoles: Console[] = [];
  maxDate = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<NewGameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Catalog,
  ) {}

  ngOnInit(): void {
    this.gameForm = this.formBuilder.group({
      title: [null, Validators.required],
      year: [null, Validators.required],
      console: [null, Validators.required],
      completed: [false],
      dateCompletion: [null],
      personalNotes: [null],
    });

    this.getConsoles();

    this.gameForm.get('completed')?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        if (value === false) {
          this.gameForm.get('dateCompletion')?.setValue(null)
        }
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  isShowDateCompletion():boolean {
    return this.gameForm.get('completed')?.value === true
  }

  onSubmit() {
    if(this.gameForm.valid){
      this.homeService.addCatalog(this.gameForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          () => {
            this.snackBar.openFromComponent(NewGameSnackBarComponent, {
              duration: 5000,
            });

            this.homeService.changeCatalogs()
          }
        )
    }
  }

  private getConsoles(): void {
    this.homeService.getConsoles()
      .pipe(takeUntil(this.destroy$))
      .subscribe(consoles => this.consoles = consoles)
  }
}
