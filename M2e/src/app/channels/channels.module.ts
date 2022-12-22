import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';
import { PageAddChannelComponent } from './pages/page-add-channel/page-add-channel.component';
import { PageEditChannelComponent } from './pages/page-edit-channel/page-edit-channel.component';
import { FormChannelComponent } from './components/form-channel/form-channel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageAddChannelComponent,
    PageEditChannelComponent,
    FormChannelComponent
  ],
  imports: [
    CommonModule,
    ChannelsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class ChannelsModule { }
