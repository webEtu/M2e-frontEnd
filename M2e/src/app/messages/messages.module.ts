import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { FormMessageComponent } from './components/form-message/form-message.component';
import { PageListMessagesComponent } from './pages/page-list-messages/page-list-messages.component';
import { TemplatesModule } from "../templates/templates.module";
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        FormMessageComponent,
        PageListMessagesComponent
    ],
    imports: [
        CommonModule,
        MessagesRoutingModule,
        SharedModule
    ]
})
export class MessagesModule { }
