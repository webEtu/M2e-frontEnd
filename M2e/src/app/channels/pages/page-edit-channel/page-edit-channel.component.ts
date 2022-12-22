import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Channel } from 'src/app/core/models/channel';
import { ChannelsService } from 'src/app/core/services/channels.service';

@Component({
  selector: 'app-page-edit-channel',
  templateUrl: './page-edit-channel.component.html',
  styleUrls: ['./page-edit-channel.component.scss']
})
export class PageEditChannelComponent {
  public chan: Channel;

  constructor(private channelsService: ChannelsService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.chan = new Channel;
  }

  public action(chan: Channel): void {
    this.channelsService.update(chan).subscribe(() => {
      this.router.navigate(['']);
    })
  }
}
