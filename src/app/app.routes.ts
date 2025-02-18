import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {path: '', component: LayoutComponent, children: [
        {path: 'home', loadComponent: () => import('./pages/home-page/home-page.component').then(c => c.HomePageComponent)},
        {path: 'about', loadComponent: () => import('./pages/about-page/about-page.component').then(c => c.AboutPageComponent)},
        {path: 'education-centers', loadComponent: () => import('./pages/education-centers/education-centers.component').then(c => c.EducationCentersComponent)},
        {path: 'contact-us', loadComponent: () => import('./pages/contact-us/contact-us.component').then(c => c.ContactUsComponent)},
        {path: '', pathMatch: 'full', redirectTo: 'home'}
    ]}
];
