import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCentersComponent } from './education-centers.component';

describe('EducationCentersComponent', () => {
  let component: EducationCentersComponent;
  let fixture: ComponentFixture<EducationCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationCentersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
