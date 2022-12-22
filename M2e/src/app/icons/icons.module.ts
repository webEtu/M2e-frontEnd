import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNewComponent } from './components/icon-new/icon-new.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';



@NgModule({
  declarations: [
    IconNewComponent,
    IconDeleteComponent
  ],
  imports: [
    CommonModule, FontAwesomeModule
  ],
  exports: [
    IconNewComponent,
    IconDeleteComponent
  ]
})
export class IconsModule { }
