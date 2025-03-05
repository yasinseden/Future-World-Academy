import { Component } from '@angular/core';
import { EducationModel } from '../../../shared/models/education.model';
import { Router } from '@angular/router';
import { EducationsService } from '../../../shared/services/educations/educations.service';

@Component({
  selector: 'app-vocational-education',
  standalone: true,
  imports: [],
  templateUrl: './vocational-education.component.html',
  styleUrl: './vocational-education.component.scss'
})
export class VocationalEducationComponent {

    isDetailsOpen: boolean = false;
    vocationalEducation: EducationModel[];
    detailedData!: EducationModel;
  
    constructor(private educationService: EducationsService, private router: Router) {
      this.vocationalEducation = educationService.getVocationalEducation()
      console.log(this.vocationalEducation);
    }
  
    openDetails(edData: any, path: string = 'vocational-education-details') {
      this.educationService.updateObservingVocationalEducationData(edData);
      this.router.navigate([path])
      this.detailedData = this.vocationalEducation[edData];
      window.scrollTo({top: 0, behavior: 'instant'});
    }
}
