import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HomeService } from "./home.service";

const mockData = {
  apiCatalog: 'http://localhost:3000/catalog',
  apiConsoles: 'http://localhost:3000/consoles',
  data: [
    {
      id: 1,
      title: "Metal Gear Solid 2",
      year: 2001,
      console: "PS2",
      completed: true,
      dateCompletion: "2003-04-23T10:00:00.000Z",
      personalNotes: "I really liked this game. Kojima really nailed here."
    },
    {
      id: 2,
      title: "Final Fantasy VII",
      year: 1997,
      console: "PS1",
      completed: true,
      dateCompletion: "2022-01-01T10:00:00.000Z",
      personalNotes: "Awesome rpg game."
    }
  ],
  dataConsoles: [
    {
      id: "1",
      value: "XBOX"
    },
    {
      id: "2",
      value: "PS1"
    }
  ]
};

describe('HomeService', () => {
  let service: HomeService;
  let httpController: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeService]
    }).compileComponents();

    service = TestBed.inject(HomeService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpController.verify());

  it('should return catalogs sorted by dateCompleted in desc order', done => {
    service.getCatalog().subscribe(catalogs => {
      expect(catalogs[0].title).toBe('Final Fantasy VII');
      expect(catalogs[1].title).toBe('Metal Gear Solid 2');
      done();
    });

    httpController
      .expectOne(mockData.apiCatalog)
      .flush(mockData.data);
  });

  it('should return catalogs by name', done => {
    service.getCatalogByName('Final').subscribe(catalogs => {
      expect(catalogs[0].title).toBe('Final Fantasy VII');
      done();
    });

    httpController
      .expectOne(mockData.apiCatalog)
      .flush(mockData.data);
  });

  it('should add catalog in API', done => {
    const data = { title: "Ace Combat", console: "ps2", year: 2000, completed: true }

    service.addCatalog(data).subscribe(catalog => {
      expect(catalog.title).toBe('Ace Combat');
      done();
    });

    httpController
      .expectOne(mockData.apiCatalog)
      .flush(data);
  });

  it('should return consoles', done => {
    service.getConsoles().subscribe(catalogs => {
      expect(catalogs[0].value).toBe('XBOX');
      expect(catalogs[1].value).toBe('PS1');
      done();
    });

    httpController
      .expectOne(mockData.apiConsoles)
      .flush(mockData.dataConsoles);
  });
});
