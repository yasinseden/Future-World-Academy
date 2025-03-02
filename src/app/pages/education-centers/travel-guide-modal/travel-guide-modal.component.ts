import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-travel-guide-modal',
  standalone: true,
  imports: [
    CarouselModule,
    CommonModule,
  ],
  templateUrl: './travel-guide-modal.component.html',
  styleUrl: './travel-guide-modal.component.scss'
})
export class TravelGuideModalComponent {

  @Input() cities: any;
  activeSlide: number = 0;
  currentSlide: { img: string, text: string };

  constructor() {
    this.currentSlide = this.cities[0].slides[0]
  }

  toggleTravelGuideModal() {
    const el = document.getElementById('hiddenElement');
    el?.classList.toggle('visible');
  }

  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = false;

  openSlideDetails(index: number = 0) {
    const slides = this.cities[0].slides;
    this.currentSlide = slides[index];
    this.activeSlide = index;
  }

}
