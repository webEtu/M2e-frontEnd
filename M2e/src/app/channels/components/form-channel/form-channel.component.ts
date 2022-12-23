import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Channel } from 'src/app/core/models/channel';
import { User } from 'src/app/core/models/user';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-form-channel',
  templateUrl: './form-channel.component.html',
  styleUrls: ['./form-channel.component.scss']
})
export class FormChannelComponent {
  @Input() public init!: Channel;
  @Output() public submitted: EventEmitter<Channel>;
  public form!: FormGroup;
  public users$: Observable<User[]>;

  constructor(
    private usersService: UsersService,
    private formBuilder: FormBuilder
  ) {
    this.submitted = new EventEmitter<Channel>();
    this.users$ = this.usersService.collection$;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [this.init.title],
      user: this.formBuilder.group({
        id: [this.init.user.id],
      }),
      description: [this.init.description],
    });
    console.log(this.form.value);
  }

  public onSubmit(): void {
    console.log(this.form.value);
    this.submitted.emit(this.form.value);
  }
}
