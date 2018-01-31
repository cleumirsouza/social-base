import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [{ provide: 'home', useValue: '/' }]

    }).compileComponents();
    
  }));

  /*
    Check app init 
  */
  it('Create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
