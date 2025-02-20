import { Component } from '@angular/core';
import { EducationsService } from '../../../shared/services/educations/educations.service';
import { EducationModel } from '../../../shared/models/education.model';
import { SchoolEducationDetailComponent } from "./school-education-detail/school-education-detail.component";

@Component({
  selector: 'app-school-education',
  standalone: true,
  imports: [SchoolEducationDetailComponent],
  templateUrl: './school-education.component.html',
  styleUrl: './school-education.component.css'
})
export class SchoolEducationComponent {

  isDetailsOpen: boolean = true;
  schoolEducation: EducationModel[];
  mock: any[] = [1,1,1,1,1,1,1,,1,1,1]

  constructor(private educationService: EducationsService) {
    this.schoolEducation = educationService.getSchoolEducation()
    console.log(this.schoolEducation);
  }
}
