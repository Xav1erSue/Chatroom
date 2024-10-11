import { useState } from 'react';
import type { ChatListItemProps } from './types';
import ChatListSearch from './chat-list-search';
import ChatListItem from './chat-list-item';

const ChatList: React.FC = () => {
  const [chatList, setChatList] = useState([
    {
      avatar: 'https://source.unsplash.com/vpOeXr5wmR4/600x600',
      username: 'Xav1er',
      lastContent: 'hhhhhh',
      isFocus: false,
    },
    {
      avatar: 'https://source.unsplash.com/vpOeXr5wmR4/600x600',
      username: 'S1mple',
      lastContent:
        '在我们的日常开发工作中，文本溢出截断省略是很常见的一种需考虑的业务场景细节。看上去 “稀松平常” ，但在实现上却有不同的区分，是单行截断还是多行截断？多行的截断判断是基于行数还是基于高度？这些问题之下，都有哪些实现方案？他们之间的差异性和场景适应性又是如何？凡事就怕较真，较真必有成长。本文试图通过编码实践，给出一些答案。',
      isFocus: true,
    },
  ] as ChatListItemProps[]);

  return (
    <div className="flex flex-col border-r-2 overflow-y-auto">
      <ChatListSearch />
      {chatList.map((item, index) => (
        <ChatListItem key={index} {...item} />
      ))}
    </div>
  );
};

export default ChatList;
