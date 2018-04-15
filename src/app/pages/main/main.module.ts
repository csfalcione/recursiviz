import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {NavbarComponent} from './shared/navbar/navbar.component'
import {MainComponent} from './main.component'
import {WelcomeComponent} from './welcome/welcome.component'
import {RouterModule} from '@angular/router'
import {routes} from './main.routes'
import {VisualizerComponent} from './visualizer/visualizer.component'

import { AceEditorModule } from 'ng2-ace-editor';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AceEditorModule
  ],
  declarations: [NavbarComponent, MainComponent, WelcomeComponent, VisualizerComponent],
  exports: [
    NavbarComponent
  ]
})
export class MainModule {
}
