import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeService } from "../../services/home.service";
import { NewGameDialogComponent } from "./new-game-dialog.component";

describe('NewGameDialogComponent', () => {
  let component: NewGameDialogComponent;
  let fixture: ComponentFixture<NewGameDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MatSnackBarModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatSlideToggleModule,
      ],
      declarations: [NewGameDialogComponent],
      providers: [
        HomeService,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add button disabled when form was invalid', () => {
    const el = fixture.debugElement.nativeElement.querySelector('.add-btn')

    fixture.detectChanges();

    expect(el.disabled).toBeTruthy()
  });

  it('should add button active when form was valid', () => {
    component.gameForm.controls['title'].setValue('test')
    component.gameForm.controls['year'].setValue('2022')
    component.gameForm.controls['console'].setValue('PS1')
    const el = fixture.debugElement.nativeElement.querySelector('.add-btn')

    fixture.detectChanges();

    expect(el.disabled).toBeFalsy()
  });

  it('should call onSumit when add button was clicked', () => {
    const spy = spyOn(component, 'onSubmit');
    component.gameForm.controls['title'].setValue('test')
    component.gameForm.controls['year'].setValue('2022')
    component.gameForm.controls['console'].setValue('PS1')
    const el = fixture.debugElement.nativeElement.querySelector('.add-btn')

    fixture.detectChanges();

    el.click()

    expect(spy).toHaveBeenCalledOnceWith()
  });

  it('should call onClose when close button was clicked', () => {
    const spy = spyOn(component, 'onClose');
    const el = fixture.debugElement.nativeElement.querySelector('.close-btn')

    fixture.detectChanges();

    el.click()

    expect(spy).toHaveBeenCalledOnceWith()
  });

  it('should not display completed date input when completed slide is false', () => {
    component.gameForm.controls['completed'].setValue(false)

    fixture.detectChanges();

    const el = fixture.debugElement.nativeElement.querySelector('input[formControlName=dateCompletion]')

    expect(el).toBeNull()
  });

  it('should display completed date input when completed slide is true', () => {
    component.gameForm.controls['completed'].setValue(true)

    fixture.detectChanges();

    const el = fixture.debugElement.nativeElement.querySelector('input[formControlName=dateCompletion]')

    expect(el).not.toBeNull()
  });
});
