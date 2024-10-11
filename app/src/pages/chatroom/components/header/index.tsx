import { useState, useContext } from 'react';
import { ChatRoomContext } from '../../store';
import SettingModal from './setting-modal';

const Header: React.FC = () => {
  const { state } = useContext(ChatRoomContext);

  const [visible, setVisible] = useState(false);

  return (
    <header className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
      <div className="basis-1/3 font-semibold text-2xl">Chat Room</div>
      <div className="basis-1/3 text-center text-l">{state.chatRoom}</div>
      <div className="basis-1/3 flex justify-end">
        <div
          className="w-auto pb-2px font-semibold hover:(cursor-pointer pb-0 border-b-2 border-black) active:(transform scale-97)"
          onClick={() => setVisible(true)}
        >
          {state.userInfo.username}
        </div>
      </div>
      <SettingModal visible={visible} onCancel={() => setVisible(false)} />
    </header>
  );
};
export default Header;
