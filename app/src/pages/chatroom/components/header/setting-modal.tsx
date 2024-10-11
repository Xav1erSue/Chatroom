import { useState, useContext } from 'react';
import { ChatRoomContext } from '../../store';
import { Modal } from '@/components';
import type { SettingModalProps } from './types';
import { set } from '@/utils/storage';

const SettingModal: React.FC<SettingModalProps> = (props) => {
  const { state, dispatch } = useContext(ChatRoomContext);

  const [username, setUsername] = useState(state.userInfo.username);
  const [avatar, setAvatar] = useState(state.userInfo.avatar);
  const [btnText, setBtnText] = useState('设置');

  const handleSubmit = () => {
    if (username) {
      const userInfo = {
        username,
        avatar,
      };
      set('userInfo', userInfo);
      dispatch({ type: 'setUserInfo', payload: userInfo });
      setBtnText('设置成功！');
      setTimeout(() => {
        props.onCancel();
        setBtnText('设置');
      }, 1000);
    } else alert('用户名不能为空！');
  };

  return (
    <Modal visible={props.visible} onCancel={props.onCancel}>
      <section className="font-semibold">设置用户名</section>
      <section
        className="my-4 mx-auto py-2 px-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus-within:(border-blue-500 ring-blue-500) flex"
        tabIndex={-1}
      >
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => (e.key === 'Enter' ? handleSubmit() : null)}
          type="text"
          className="block outline-none bg-gray-50 w-full mr-4"
          placeholder="请输入用户名"
          required
        />
      </section>

      <section className="font-semibold">设置头像（URL）</section>
      <section
        className="my-4 mx-auto py-2 px-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus-within:(border-blue-500 ring-blue-500) flex"
        tabIndex={-1}
      >
        <input
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          onKeyDown={(e) => (e.key === 'Enter' ? handleSubmit() : null)}
          type="text"
          className="block outline-none bg-gray-50 w-full mr-4"
          placeholder="请输入图片 URL"
          required
        />
      </section>

      <section>
        <button
          className="block mx-auto text-white bg-blue-700 rounded-lg text-sm px-4 py-2 btn-style-common"
          onClick={handleSubmit}
        >
          {btnText}
        </button>
      </section>
    </Modal>
  );
};
export default SettingModal;
