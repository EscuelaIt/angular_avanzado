import { AboutComponent } from 'app/about/about.component';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email/email.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms/';
import { RouterModule, Routes } from '@angular/router/';
import { SocialComponent } from './social/social.component';

const routes: Routes = [
    {
        path: '',
        component: AboutComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        AboutComponent,
        EmailComponent,
        SocialComponent
    ]
})
export class AboutModule { }
