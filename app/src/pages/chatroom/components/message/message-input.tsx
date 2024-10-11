import { useState, useContext } from 'react';
import { ChatRoomContext } from '../../store';
import type { MessageInputProps } from './types';
import dayjs from 'dayjs';

const MessageInput: React.FC<MessageInputProps> = (props) => {
  const { state } = useContext(ChatRoomContext);
  const [inputValue, setInputValue] = useState('');

  const onSend = () => {
    if (!inputValue) return;
    props.ws.send({
      username: state.userInfo.username,
      avatar: state.userInfo.avatar,
      message: inputValue,
      date: dayjs().format(),
    });
    setInputValue('');
  };

  return (
    <section
      className="my-4 mx-auto py-2 px-4 w-8/9 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus-within:(border-blue-500 ring-blue-500) flex"
      tabIndex={-1}
    >
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => (e.key === 'Enter' ? onSend() : null)}
        type="text"
        className="block outline-none bg-gray-50 w-full mr-4"
        placeholder="Type a message..."
        required
      />
      <button
        className="text-white bg-blue-700 rounded-lg text-sm px-4 py-2 btn-style-common"
        onClick={onSend}
      >
        Send
      </button>
    </section>
  );
};

export default MessageInput;
