import { Component, Input } from '@angular/core';
import { EducationModel } from '../../../../shared/models/education.model';
import { CommonModule } from '@angular/common';
import { EducationsService } from '../../../../shared/services/educations/educations.service';
import { Subject, Subscribable, takeUntil } from 'rxjs';

@Component({
  selector: 'app-school-education-detail',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './school-education-detail.component.html',
  styleUrl: './school-education-detail.component.css'
})
export class SchoolEducationDetailComponent {

  educationData!: EducationModel;
  selectedOption: string = 'description';
  private destroy$ = new Subject<void>();

  constructor(private educationService: EducationsService) {
    this.educationService.schoolEducationsObservable$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.educationData = data;
      });
  }

  changeSelectedOpt(opt: string) {
    this.selectedOption = opt;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
