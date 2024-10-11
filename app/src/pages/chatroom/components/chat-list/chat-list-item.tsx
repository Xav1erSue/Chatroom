import type { ChatListItemProps } from './types';

const ChatListItem: React.FC<ChatListItemProps> = (props) => {
  return (
    <div
      className={`flex py-4 px-10px max-w-70 items-center border-b-2 ${
        props.isFocus ? 'border-l-4 border-l-blue-500' : 'px-12px'
      }`}
    >
      <div className="min-w-12 mr-2">
        <img
          src={props.avatar}
          className="min-h-10 min-w-10 max-h-10 max-w-10 rounded-1/2"
        />
      </div>
      <div className="w-full overflow-hidden">
        <div className="text-lg font-semibold">{props.username}</div>
        <div className="text-gray-500 overflow-hidden whitespace-nowrap text-ellipsis">
          {props.lastContent}
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;
