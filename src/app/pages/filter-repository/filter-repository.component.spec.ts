import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRepositoryComponent } from './filter-repository.component';
import { HeaderComponent } from '../shared/components/header/header.component';

xdescribe('FilterRepositoryComponent', () => {
  let component: FilterRepositoryComponent;
  let fixture: ComponentFixture<FilterRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterRepositoryComponent ],
      imports: [HeaderComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
