import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelGuideModalComponent } from './travel-guide-modal.component';

describe('TravelGuideModalComponent', () => {
  let component: TravelGuideModalComponent;
  let fixture: ComponentFixture<TravelGuideModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelGuideModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelGuideModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
