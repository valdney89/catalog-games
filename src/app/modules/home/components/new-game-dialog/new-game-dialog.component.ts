import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-new-game-dialog',
  templateUrl: './new-game-dialog.component.html',
  styleUrls: ['./new-game-dialog.component.scss']
})
export class NewGameDialogComponent implements OnInit{
  gameForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NewGameDialogComponent>,
    //@Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit(): void {
    this.gameForm = this.formBuilder.group({
      title: [null, Validators.required],
      year: [null, Validators.required],
      console: [null, Validators.required],
      completed: [null, Validators.required],
      dateCompletion: [null],
      personalNotes: [null, Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (!this.gameForm.valid) {
      return;
    }
    console.log(this.gameForm.value);
  }

  isShowDateCompletion():boolean {
    return true
  }
}
