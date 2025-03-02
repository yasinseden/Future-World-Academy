import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements AfterViewInit {

  constructor(private router: Router) { }

  @ViewChild('videoEl', { static: false }) videoElementRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('coursesField') coursesField!: ElementRef;

  ngAfterViewInit() {
    if (this.videoElementRef) {
      const videoEl = this.videoElementRef.nativeElement;
      videoEl.muted = true;
      videoEl.play().catch(error => console.error('Autoplay failed: ', error))
    }
  }

  routeToPage(param: string) {
    this.router.navigate([param])
  }

  scrollToCourses() {
    this.coursesField.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
