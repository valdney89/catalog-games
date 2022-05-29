import { Catalog } from './../../models/catalog';
import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

interface Console {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-game-dialog',
  templateUrl: './new-game-dialog.component.html',
  styleUrls: ['./new-game-dialog.component.scss']
})
export class NewGameDialogComponent implements OnInit{
  gameForm!: FormGroup;

  consoles: Console[] = [
    {value: 'xbox', viewValue: 'XBOX'},
    {value: 'xboxone', viewValue: 'XBOX ONE'},
    {value: 'nintendoswitch', viewValue: 'SUPER NINTENDO'},
    {value: 'nintendo', viewValue: 'NINTENDO SWITCH'},
    {value: 'psone', viewValue: 'PS1'},
    {value: 'pstwo', viewValue: 'PS2'},
    {value: 'psthree', viewValue: 'PS3'},
    {value: 'psfour', viewValue: 'PS4'},
    {value: 'psfive', viewValue: 'PS5'},
  ]

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NewGameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Catalog,
  ) {}

  ngOnInit(): void {
    this.gameForm = this.formBuilder.group({
      title: [null, Validators.required],
      year: [null, Validators.required],
      console: [null, Validators.required],
      completed: [null, Validators.required],
      dateCompletion: [null],
      personalNotes: [null],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log('teste');
    console.log(this.gameForm.value);
    if (!this.gameForm.valid) {
      return;
    }
  }

  isShowDateCompletion():boolean {
    return true
  }
}
