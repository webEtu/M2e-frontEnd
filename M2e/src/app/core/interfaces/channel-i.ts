import { User } from "../models/user";

export interface ChannelI {
  id: number;
  user: User;
  title: string;
  description: string;
  has_news: boolean;
}
