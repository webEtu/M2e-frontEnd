import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { NavComponent } from './component/nav/nav.component';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, NavComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, NavComponent, UiModule],
})
export class CoreModule {}
