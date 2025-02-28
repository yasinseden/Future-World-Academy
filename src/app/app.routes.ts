import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {path: '', component: LayoutComponent, children: [
        {path: 'home', loadComponent: () => import('./pages/home-page/home-page.component').then(c => c.HomePageComponent)},

        {path: 'about', loadComponent: () => import('./pages/about-page/about-page.component').then(c => c.AboutPageComponent)},

        {path: 'school-education', loadComponent: () => import('./pages/courses/school-education/school-education.component').then(c => c.SchoolEducationComponent)},
        {path: 'school-education-details', loadComponent: () => import('./pages/courses/school-education/school-education-detail/school-education-detail.component').then(c => c.SchoolEducationDetailComponent)},

        {path: 'vocational-education', loadComponent: () => import('./pages/courses/vocational-education/vocational-education.component').then(c => c.VocationalEducationComponent)},
        {path: 'vocational-education-details', loadComponent: () => import('./pages/courses/vocational-education/vocational-education-detail/vocational-education-detail.component').then(c => c.VocationalEducationDetailComponent)},

        {path: 'adult-education', loadComponent: () => import('./pages/courses/adult-education/adult-education.component').then(c => c.AdultEducationComponent)},

        {path: 'job-shadowing', loadComponent: () => import('./pages/courses/job-shadowing/job-shadowing.component').then(c => c.JobShadowingComponent)},

        {path: 'education-centers', loadComponent: () => import('./pages/education-centers/education-centers.component').then(c => c.EducationCentersComponent)},

        {path: 'contact-us', loadComponent: () => import('./pages/contact-us/contact-us.component').then(c => c.ContactUsComponent)},
        
        {path: '', pathMatch: 'full', redirectTo: 'home'}
    ]}
];
