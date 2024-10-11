import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import type { ModalProps } from './types';
import './styles.css';

const Modal: React.FC<ModalProps> = ({
  visible,
  onCancel,
  children,
  className,
}) => {
  return createPortal(
    <>
      <CSSTransition
        in={visible}
        classNames="modal-bg"
        timeout={150}
        unmountOnExit={true}
        appear={true}
      >
        <section
          className="fixed w-full h-full top-0 left-0 bg-black z-99"
          onClick={() => onCancel()}
        ></section>
      </CSSTransition>
      <CSSTransition
        in={visible}
        classNames="modal-main"
        timeout={150}
        unmountOnExit={true}
        appear={true}
      >
        <section
          className={`fixed left-1/2 top-1/3 w-275px bg-white p-28px rounded-14px z-100 ${className}`}
        >
          {children}
        </section>
      </CSSTransition>
    </>,
    document.body,
  );
};
export default Modal;
