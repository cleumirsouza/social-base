import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatMenuModule, 
        MatIconModule, 
        MatToolbarModule
      ],
      declarations: [ 
        HeaderComponent 
      ],
    }).compileComponents();
  }));

  /*
    Check app init 
  */
  it('Create the app', async(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
