import { ChannelI } from "../interfaces/channel-i";
import { User } from "./user";

export class Channel implements ChannelI {
  id!: number;
  user = new User();
  title!: string;
  description!: string;
  has_news = false;
}
