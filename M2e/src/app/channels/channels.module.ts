import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';
import { PageAddChannelComponent } from './pages/page-add-channel/page-add-channel.component';
import { PageEditChannelComponent } from './pages/page-edit-channel/page-edit-channel.component';
import { FormChannelComponent } from './components/form-channel/form-channel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PageDeleteChannelComponent } from './pages/page-delete-channel/page-delete-channel.component';
import { FormEditComponent } from './components/form-edit/form-edit.component';


@NgModule({
  declarations: [
    PageAddChannelComponent,
    PageEditChannelComponent,
    FormChannelComponent,
    PageDeleteChannelComponent,
    FormEditComponent
  ],
  imports: [
    CommonModule,
    ChannelsRoutingModule,
    //shared module
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class ChannelsModule { }
