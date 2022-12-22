import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNewComponent } from './components/icon-new/icon-new.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    IconNewComponent
  ],
  imports: [
    CommonModule, FontAwesomeModule
  ],
  exports: [
    IconNewComponent
  ]
})
export class IconsModule { }
