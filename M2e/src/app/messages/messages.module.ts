import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { FormMessageComponent } from './components/form-message/form-message.component';


@NgModule({
  declarations: [
    FormMessageComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule { }
