export interface UserI {
  _id: string;
  name: string;
  email: string;
}

export interface MessageI {
  sender: UserI;
  receiver: UserI;
  description: string;
  timestamp: Date;
  read: boolean;
}
export interface ChatI {
  _id: string;
  participants: string[] | UserI[];
  messages: MessageI[];
}
