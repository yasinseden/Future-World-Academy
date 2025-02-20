import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolEducationDetailComponent } from './school-education-detail.component';

describe('SchoolEducationDetailComponent', () => {
  let component: SchoolEducationDetailComponent;
  let fixture: ComponentFixture<SchoolEducationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolEducationDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolEducationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
