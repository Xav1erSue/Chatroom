import { MessageInfo } from '../pages/chatroom/components/message/types';

export default class Socket {
  public socket: WebSocket;
  constructor(
    url: string,
    onMessage: ((this: WebSocket, ev: MessageEvent) => any) | null,
  ) {
    this.socket = new WebSocket(url);
    this.socket.onmessage = onMessage;
    this.socket.onopen = () => {
      console.log('连接已开启');
    };
    this.socket.onclose = () => {
      console.log('连接被关闭');
    };
  }
  send(message: MessageInfo): void {
    if (this.socket.readyState == WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
    } else alert('连接没有开启.');
  }
}
