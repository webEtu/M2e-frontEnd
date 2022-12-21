import { ChannelI } from "../interfaces/channel-i";
import { User } from "./user";

export class Channel implements ChannelI {
  id!: number;
  user!: User;
  title!: string;
  description!: string;
  has_news = true;
}
