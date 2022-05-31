import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameCardComponent } from './game-card.component';

describe('GameCardComponent', () => {
  let component: GameCardComponent;
  let fixture: ComponentFixture<GameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title when title input was assigned', () => {
    component.title = 'test';
    fixture.detectChanges();

    const el = fixture.debugElement.nativeElement.querySelector('mat-card-title')

    expect(el.innerText).toEqual('test')
  });

  it('should display the console when console input was assigned', () => {
    component.console = 'test';
    fixture.detectChanges();

    const el = fixture.debugElement.nativeElement.querySelector('mat-card-subtitle')

    expect(el.innerText).toContain('test')
  });

  it('should display the content when content input was assigned', () => {
    component.content = 'test';
    fixture.detectChanges();

    const el = fixture.debugElement.nativeElement.querySelector('mat-card-content p')

    expect(el.innerText).toEqual('test')
  });

  it('should display the date completion when dateCompletion and completed input was assigned', () => {
    component.dateCompletion = '2000-01-01T10:00:00.000Z';
    component.completed = true;
    fixture.detectChanges();

    const el = fixture.debugElement.nativeElement.querySelector('mat-card-content small')

    expect(el.innerText).toContain('1/1/00')
  });

  it('should display "Not Completed" when completed input was not assigned', () => {
    component.completed = false;
    fixture.detectChanges();

    const el = fixture.debugElement.nativeElement.querySelector('.game-card--unfinished')

    expect(el.innerText).toEqual('Not Completed')
  });

  it('should display year like "1 years old" when year input was assigned', () => {
    component.year = 2001;

    fixture.detectChanges();

    const el = fixture.debugElement.nativeElement.querySelector('mat-card-subtitle')

    expect(el.innerText).toContain(component.getYearAgo())
  });
});
