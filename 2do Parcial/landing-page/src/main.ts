/// <reference types="@angular/localize" />

import '@angular/localize/init';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';  // Importar HttpClientModule
import { AppComponent } from './app/app.component';
import { BannerComponent } from './app/landing/banner/banner.component';
import { TaskManagerComponent } from './app/landing/task-manager/task-manager.component';
import { RegisterComponent } from './app/landing/register/register.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', component: BannerComponent },
  { path: 'task-manager', loadComponent: () => import('./app/landing/task-manager/task-manager.component').then(m => m.TaskManagerComponent) },
  { path: 'register', loadComponent: () => import('./app/landing/register/register.component').then(m => m.RegisterComponent) },
  { path: 'login', loadComponent: () => import('./app/auth/login/login.component').then(m => m.LoginComponent) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes), HttpClientModule), provideAnimationsAsync(), // Importar HttpClientModule
    importProvidersFrom(BrowserAnimationsModule),  
  ]
})
.catch(err => console.error(err));