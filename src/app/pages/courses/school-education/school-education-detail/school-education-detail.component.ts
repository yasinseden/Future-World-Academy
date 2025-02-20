import { Component, Input } from '@angular/core';
import { EducationModel } from '../../../../shared/models/education.model';
import { CommonModule } from '@angular/common';

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
 
  @Input() educationData!: EducationModel;
  selectedOption: string = 'description'

  changeSelectedOpt(opt: string) {
    this.selectedOption = opt;
  }
}
