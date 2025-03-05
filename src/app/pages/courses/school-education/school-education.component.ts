import { Component } from '@angular/core';
import { EducationsService } from '../../../shared/services/educations/educations.service';
import { EducationModel } from '../../../shared/models/education.model';
import { SchoolEducationDetailComponent } from "./school-education-detail/school-education-detail.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-school-education',
  standalone: true,
  imports: [SchoolEducationDetailComponent],
  templateUrl: './school-education.component.html',
  styleUrl: './school-education.component.scss'
})
export class SchoolEducationComponent {

  isDetailsOpen: boolean = false;
  schoolEducation: EducationModel[];
  detailedData!: EducationModel;

  constructor(private educationService: EducationsService, private router: Router) {
    this.schoolEducation = educationService.getSchoolEducation()
    console.log(this.schoolEducation);
  }

  openDetails(edData: any, path: string = 'school-education-details') {
    this.educationService.updateObservingSchoolEducationData(edData);
    this.router.navigate([path])
    this.detailedData = this.schoolEducation[edData];
    window.scrollTo({top: 0, behavior: 'instant'});
  }
}
