import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ErrorPageComponent} from './error-page.component';
import {ActivatedRoute, Data} from '@angular/router';

describe('ErrorPageComponent', () => {

  const LOREM_IPSUM = 'Lorem ipsum dolor sit amet';

  let component: ErrorPageComponent;
  let fixture: ComponentFixture<ErrorPageComponent>;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      declarations: [ErrorPageComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: {
              subscribe: (fn: (value: Data) => void) => fn({
                message: LOREM_IPSUM
              })
            }
          }
        }
      ]
    })
  ));

  it('should create', () => {
    fixture = TestBed.createComponent(ErrorPageComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should get the message from the route', () => {
    fixture = TestBed.createComponent(ErrorPageComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(component.errorMessage).toEqual(LOREM_IPSUM);
  });


  it('should display the message from the route', () => {
    fixture = TestBed.createComponent(ErrorPageComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toEqual(LOREM_IPSUM);
  });

});
