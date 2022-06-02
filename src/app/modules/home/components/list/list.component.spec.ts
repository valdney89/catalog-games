import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogModule } from '@angular/material/dialog';

import { HomeService } from "../../services/home.service";
import { ListComponent } from "./list.component";
import { ListResolver } from './list.resolver';


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
  let resolver: ListResolver;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule, MatAutocompleteModule, RouterTestingModule],
      declarations: [ListComponent],
      providers: [
        HomeService,
        { provide: ListResolver, useValue: MOCK_DATA }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    resolver = TestBed.inject(ListResolver);
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
