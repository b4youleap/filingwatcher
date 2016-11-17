import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { MaterialComponent } from './material/material.component';

import { AuthGuardService } from './auth-guard.service';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/',
                pathMatch: 'full'
            },
            {
                path: 'about/:id',
                component: AboutComponent
            },
            {
                path: 'faq',
                component: FaqComponent
            },/*
            {
                path: 'unauthorized',
                component: DashboardComponent
            },*/
            {
                path: 'material',
                component: MaterialComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ],
    providers: [
        //
    ]
})
export class AppRoutingModule {}
/*
Target state: The main routing and app modules should probably be pretty lean and look to the feature modules
for all the nitty gritty routing details. Include in appRoutes with ... leaders.
Transition / refactoring state: declare const section with paths/components
*/