import { ReactElement } from 'react';

export interface ModalProps {
  visible: boolean;
  onCancel: () => void;
  children?: ReactElement | ReactElement[];
  className?: string;
}
