import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocationalEducationDetailComponent } from './vocational-education-detail.component';

describe('VocationalEducationDetailComponent', () => {
  let component: VocationalEducationDetailComponent;
  let fixture: ComponentFixture<VocationalEducationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VocationalEducationDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VocationalEducationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
