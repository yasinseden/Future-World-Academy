import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements AfterViewInit {

  constructor(private router: Router) {} 

  @ViewChild('videoEl', { static: false }) videoElementRef!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    if (this.videoElementRef) {
     const videoEl = this.videoElementRef.nativeElement;
     videoEl.muted = true;
     videoEl.play().catch(error => console.error('Autoplay failed: ', error))
    }
  }

  routeToAboutUs() {
    this.router.navigate(['/about'])
  }
}
