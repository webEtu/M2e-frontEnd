import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Channel } from '../../models/channel';
import { ChannelsService } from '../../services/channels.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  public collection$!: BehaviorSubject<Channel[]>;

  constructor(private channelsService: ChannelsService, private router: Router) {
    this.collection$ = this.channelsService.collection$
    console.log(this.collection$);
  }

  onDeleteChannel(id: number) {
    this.channelsService.delete(id).subscribe(() => {
      this.router.navigate(['']);
    })
  }
}
