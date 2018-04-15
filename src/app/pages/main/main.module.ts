import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MainComponent } from './main.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {RouterModule} from '@angular/router';
import {routes} from './main.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NavbarComponent, MainComponent, WelcomeComponent],
  exports: [
    NavbarComponent
  ]
})
export class MainModule { }
