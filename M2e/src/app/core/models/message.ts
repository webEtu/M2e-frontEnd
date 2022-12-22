import { MessageI } from '../interfaces/message-i';
import { Channel } from './channel';
import { User } from './user';

export class Message implements MessageI {
  id!: number;
  user!: User;
  channel!: Channel;
  text!: string;
  post_date!: Date;
  edit_date!: Date;
  is_edited = false;
}
