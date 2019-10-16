import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzzyComponent } from './izzy.component';

describe('IzzyComponent', () => {
  let component: IzzyComponent;
  let fixture: ComponentFixture<IzzyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzzyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzzyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
