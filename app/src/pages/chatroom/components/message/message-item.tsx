import type { MessageItemProps } from './types';
import avatar from '@/assets/default-avatar.jpg';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
dayjs.extend(relativeTime);

const MessageItem: React.FC<MessageItemProps> = (props) => {
  return !props.isSelf ? (
    <section className="flex justify-start px-4 py-2">
      <div className="bg-white text-black antialiased flex max-w-lg">
        {!props.isContinue ? (
          <img
            className="flex-shrink-0 rounded-full h-8 w-8 mr-2 mt-1"
            src={props.avatar || avatar}
          />
        ) : (
          <div className="flex-shrink-0 h-8 w-8 mr-2 mt-1 " />
        )}
        <div className="flex flex-col items-start">
          <div className="w-[fit-content] bg-gray-100  rounded-3xl px-4 pt-2 pb-2.5">
            <div className="font-semibold text-sm leading-relaxed">
              {props.username}
            </div>
            <div className="text-normal leading-snug md:leading-normal">
              {props.message}
            </div>
          </div>
          <div className="text-left text-sm ml-4 mt-0.5 text-gray-500 ">
            {dayjs(props.date).fromNow()}
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section className="flex justify-end px-4 py-2">
      <div className="bg-white text-black antialiased flex max-w-lg">
        <div className="flex flex-col items-end">
          <div className="w-[fit-content] bg-gray-100  rounded-3xl px-4 pt-2 pb-2.5">
            <div className="text-right font-semibold text-sm leading-relaxed">
              {props.username}
            </div>
            <div className="text-right leading-snug md:leading-normal">
              {props.message}
            </div>
          </div>
          <div className="text-right text-sm mr-4 mt-0.5 text-gray-500 ">
            {dayjs(props.date).fromNow()}
          </div>
        </div>
        {!props.isContinue ? (
          <img
            className="flex-shrink-0 rounded-full h-8 w-8 ml-2 mt-1 "
            src={props.avatar || avatar}
          />
        ) : (
          <div className="flex-shrink-0 h-8 w-8 ml-2 mt-1 " />
        )}
      </div>
    </section>
  );
};

export default MessageItem;
