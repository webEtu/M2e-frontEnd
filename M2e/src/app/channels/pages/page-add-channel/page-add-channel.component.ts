import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Channel } from 'src/app/core/models/channel';
import { ChannelsService } from 'src/app/core/services/channels.service';

@Component({
  selector: 'app-page-add-channel',
  templateUrl: './page-add-channel.component.html',
  styleUrls: ['./page-add-channel.component.scss']
})
export class PageAddChannelComponent {
  public chan: Channel;

  constructor(private channelsService: ChannelsService, private router: Router) {
    this.chan = new Channel();
  }

  public action(chan: Channel): void {
    this.channelsService.add(chan).subscribe(() => {
      this.router.navigate(['']);
    })
  }
}

