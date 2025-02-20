import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultEducationComponent } from './adult-education.component';

describe('AdultEducationComponent', () => {
  let component: AdultEducationComponent;
  let fixture: ComponentFixture<AdultEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdultEducationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdultEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
