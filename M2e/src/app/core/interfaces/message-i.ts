import { Channel } from "../models/channel";
import { User } from "../models/user";

export interface MessageI {
  id: number;
  user: User;
  channel: Channel;
  text: string;
  post_date: Date;
  edit_date: Date;
  is_edited: boolean;
}
