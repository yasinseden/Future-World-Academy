import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {

  ourTeam: {img: string, name: string, surname: string, position: string, email: string}[] = [
    {img: '../assets/images/demo/9553.jpg', name: 'Falanca', surname: 'Filanca', position: 'Education Responsible', email: 'email@email.com'},
    {img: '../assets/images/demo/13387.jpg', name: 'Falanca', surname: 'Filanca', position: 'Education Responsible', email: 'email@email.com'},
    {img: '../assets/images/demo/40306.jpg', name: 'Falanca', surname: 'Filanca', position: 'Education Responsible', email: 'email@email.com'},
    {img: '../assets/images/demo/48167.jpg', name: 'Falanca', surname: 'Filanca', position: 'Education Responsible', email: 'email@email.com'}
  ]
}
