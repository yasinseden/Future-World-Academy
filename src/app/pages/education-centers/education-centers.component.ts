import { Component } from '@angular/core';

@Component({
  selector: 'app-education-centers',
  standalone: true,
  imports: [],
  templateUrl: './education-centers.component.html',
  styleUrl: './education-centers.component.css'
})
export class EducationCentersComponent {

    cities: {
      img: string,
      name: string,
      text: string
    }[] = [
      {img: '../assets/images/education-centers/Antalya.png', name: 'ANTALYA', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolores possimus libero nostrum dignissimos ipsa ducimus repellendus vel, laboriosam praesentium beatae dolore velit consectetur, rem aut a, porro culpa? Modi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minus impedit? Laborum obcaecati, labore omnis odit delectus autem corporis ducimus reiciendis dolore. Animi repellat rem doloremque veniam totam! Voluptas, magni?'},
      {img: '../assets/images/education-centers/Istanbul.png', name: 'Istanbul', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolores possimus libero nostrum dignissimos ipsa ducimus repellendus vel, laboriosam praesentium beatae dolore velit consectetur, rem aut a, porro culpa? Modi? Lorem, labore omnis odit delectus autem corporis ducimus reiciendis dolore. Animi repellat rem doloremque veniam totam! Voluptas, magni?'},
      {img: '../assets/images/education-centers/Barcelona.png', name: 'Barcelona', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolores possimus libero nostrum dignissimos ipsa ducimus repellendus vel, laboriosam praesentium beatae dolore velit consectetur, rem aut a, porro culpa? Modi? Lorem, labore omnis odit delectus autem corporis ducimus reiciendis dolore. Animi repellat rem doloremque veniam totam! Voluptas, magni?'},
      {img: '../assets/images/education-centers/Ohrid.png', name: 'Ohrid', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolores possimus libero nostrum dignissimos ipsa ducimus repellendus vel, laboriosam praesentium beatae dolore velit consectetur, rem aut a, porro culpa? Modi? Lorem, labore omnis odit delectus autem corporis ducimus reiciendis dolore. Animi repellat rem doloremque veniam totam! Voluptas, magni?'},
      {img: '../assets/images/education-centers/Berlin.png', name: 'Berlin', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolores possimus libero nostrum dignissimos ipsa ducimus repellendus vel, laboriosam praesentium beatae dolore velit consectetur, rem aut a, porro culpa? Modi? Lorem, labore omnis odit delectus autem corporis ducimus reiciendis dolore. Animi repellat rem doloremque veniam totam! Voluptas, magni?'},
      {img: '../assets/images/education-centers/Stockholm.png', name: 'Stockholm', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolores possimus libero nostrum dignissimos ipsa ducimus repellendus vel, laboriosam praesentium beatae dolore velit consectetur, rem aut a, porro culpa? Modi? Lorem, labore omnis odit delectus autem corporis ducimus reiciendis dolore. Animi repellat rem doloremque veniam totam! Voluptas, magni?'},
      {img: '../assets/images/education-centers/Riga.png', name: 'Riga', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolores possimus libero nostrum dignissimos ipsa ducimus repellendus vel, laboriosam praesentium beatae dolore velit consectetur, rem aut a, porro culpa? Modi? Lorem, labore omnis odit delectus autem corporis ducimus reiciendis dolore. Animi repellat rem doloremque veniam totam! Voluptas, magni?'},
      {img: '../assets/images/education-centers/Helsinki.png', name: 'Helsinki', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolores possimus libero nostrum dignissimos ipsa ducimus repellendus vel, laboriosam praesentium beatae dolore velit consectetur, rem aut a, porro culpa? Modi? Lorem, labore omnis odit delectus autem corporis ducimus reiciendis dolore. Animi repellat rem doloremque veniam totam! Voluptas, magni?'},
    ]

    toggleTravelGuideModel() {
      const el = document.getElementById('hiddenElement');
      el?.classList.toggle('visible');
    }

    itemsPerSlide = 3;
    singleSlideOffset = false;
    noWrap = false;
   
    slidesChangeMessage = '';
   
    slides = [
      {image: 'assets/images/img-1.webp'},
      {image: 'assets/images/img-2.jpeg'},
      {image: 'assets/images/img-3.webp'},
      {image: 'assets/images/img-4.jpg'},
      {image: 'assets/images/img-5.jpg'},
      {image: 'assets/images/riga.jpg'},
      {image: 'assets/images/img-2.jpeg'},
      {image: 'assets/images/img-4.jpg'},
      {image: 'assets/images/img-5.jpg'},
      {image: 'assets/images/riga.jpg'}
    ];
   
    onSlideRangeChange(indexes: number[]|void): void {
      this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
    }

}
