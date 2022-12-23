import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Channel } from 'src/app/core/models/channel';
import { ChannelsService } from 'src/app/core/services/channels.service';

@Component({
  selector: 'app-page-edit-channel',
  templateUrl: './page-edit-channel.component.html',
  styleUrls: ['./page-edit-channel.component.scss']
})
export class PageEditChannelComponent {
  //public chan$: Observable<Channel>;
  //public id: number;
  public chan: Channel;

  constructor(private channelsService: ChannelsService, private router: Router, private activatedRoute: ActivatedRoute) {
    //this.id = this.activatedRoute.snapshot.params['id'];
    //this.chan$ = this.channelsService.getChannelByID(this.id);
    //console.log(this.id);
    this.chan = new Channel();
    this.chan.title = 'edit title';
    this.chan.description = 'edit description';
  }

  public action(chan: Channel): void {
    this.channelsService.update(chan).subscribe(() => {
      this.router.navigate(['']);
    })
  }
}
