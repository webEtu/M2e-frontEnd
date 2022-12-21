import { MessageI } from '../interfaces/message-i';
import { Channel } from './channel';

export class Message implements MessageI {
  id!: number;
  user!: User;
  channel!: Channel;
  text!: string;
  post_date!: Date;
  edit_date!: Date;
  is_edited = false;
}
