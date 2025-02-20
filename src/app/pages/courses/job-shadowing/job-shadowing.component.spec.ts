import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobShadowingComponent } from './job-shadowing.component';

describe('JobShadowingComponent', () => {
  let component: JobShadowingComponent;
  let fixture: ComponentFixture<JobShadowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobShadowingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobShadowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
