import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, flush, TestBed, tick } from "@angular/core/testing";
import { MatDialogModule } from '@angular/material/dialog';
import { HomeService } from "../../services/home.service";
import { ListComponent } from "./list.component";

const MOCK_DATA = [
  {
    id: 1,
    title: "Metal Gear Solid 2",
    year: 2001,
    console: "PS2",
    completed: true,
    dateCompletion: "2003-04-23T10:00:00.000Z",
    personalNotes: "I really liked this game. Kojima really nailed here."
  }
]

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatDialogModule, MatAutocompleteModule],
      declarations: [ListComponent],
      providers: [HomeService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open dialog when click in "new game" button', () => {
    const spy = spyOn(component, 'openDialog');
    const el = fixture.debugElement.nativeElement.querySelector('.list-actions button')

    el.click();

    fixture.detectChanges();

    expect(spy).toHaveBeenCalledOnceWith()
  });

  it('should display "Nothing here..." when catalogs has no data', () => {
    component.catalogs = []

    const el = fixture.debugElement.nativeElement.querySelector('.list-section')

    fixture.detectChanges();

    expect(el.innerText).toEqual('Nothing here...')
  });

  it('should display games cards when catalogs has data', () => {
    component.catalogs = MOCK_DATA

    fixture.detectChanges();

    const el = fixture.debugElement.nativeElement.querySelector('app-game-card')

    expect(el).not.toBeNull();
  });
});
