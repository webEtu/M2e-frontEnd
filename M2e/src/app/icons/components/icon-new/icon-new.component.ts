import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-new',
  templateUrl: './icon-new.component.html',
  styleUrls: ['./icon-new.component.scss']
})
export class IconNewComponent {
  public myIcon: IconDefinition;

  constructor() {
    this.myIcon = faPlus;
  }
}
