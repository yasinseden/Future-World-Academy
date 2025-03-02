import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EducationModel } from '../../../../shared/models/education.model';
import { EducationsService } from '../../../../shared/services/educations/educations.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vocational-education-detail',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './vocational-education-detail.component.html',
  styleUrl: './vocational-education-detail.component.scss'
})
export class VocationalEducationDetailComponent {

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
