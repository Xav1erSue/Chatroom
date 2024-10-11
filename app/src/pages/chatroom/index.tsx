import { useReducer } from 'react';
import { Header } from './components/';
import { Message } from './components/';
import { ChatRoomContext, chatRoomReducer, chatRoomInfo } from './store';

const ChatRoom: React.FC = () => {
  const [state, dispatch] = useReducer(chatRoomReducer, chatRoomInfo);

  return (
    <ChatRoomContext.Provider value={{ state, dispatch }}>
      <section className="fixed top-0 bottom-0 left-0 right-0 flex flex-col">
        <Header />
        <main className="flex-1 flex flex-row justify-between bg-white">
          {/* <ChatList /> */}
          <Message />
        </main>
      </section>
    </ChatRoomContext.Provider>
  );
};
export default ChatRoom;
