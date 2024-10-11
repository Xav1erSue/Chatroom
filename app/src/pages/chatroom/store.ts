import { set, get } from '@/utils/storage';
import { createContext } from 'react';
import type { MessageInfo } from './components/message/types';

export const chatRoomInfo: ChatRoomInfo = {
  chatRoom: '基本房间',
  userInfo: get('userInfo') || {
    username: '基本名称',
    avatar: '',
  },
  messages: get('messages') || ([] as MessageInfo[]),
};

export const chatRoomReducer = (
  state: ChatRoomInfo,
  action: ChatRoomInfoAction,
): ChatRoomInfo => {
  switch (action.type) {
    case 'setUserInfo':
      return { ...state, userInfo: action.payload };
    case 'setMessages':
      const newMessages = [...state.messages, action.payload];
      set(
        'messages',
        newMessages.filter((el) => !el.isSystem),
      );
      return { ...state, messages: newMessages };
    default:
      throw new Error();
  }
};

export const ChatRoomContext = createContext({
  state: {} as ChatRoomInfo,
  dispatch: {} as ScheduleDispatch,
});

interface ChatRoomInfo {
  chatRoom: string;
  userInfo: {
    username: string;
    avatar: string;
  };
  messages: MessageInfo[];
}

type ActionType = 'setChatRoom' | 'setUserInfo' | 'setMessages';

interface ChatRoomInfoAction {
  type: ActionType;
  payload?: any;
}

type ScheduleDispatch = (arg: { type: ActionType; payload?: any }) => void;
