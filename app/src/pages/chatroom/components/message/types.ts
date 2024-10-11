import Socket from '@/request/websocket';
export interface MessageInfo {
  username: string;
  message: string;
  date: string;
  avatar: string;
  isSystem?: boolean;
}

export interface MessageItemProps extends MessageInfo {
  isSelf: boolean;
  isContinue: boolean;
}

export interface MessageInputProps {
  ws: Socket;
}
