import React, { useEffect } from 'react';
import Title from '../typography/Title';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: 'small' | 'medium' | 'large';
}

function Modal({ isOpen, onClose, children, title, size = 'medium' }: ModalProps) {
  const [shouldRender, setShouldRender] = React.useState(false);

  const modalSize = {
    small: 'max-w-xl w-[95%]',
    medium: 'max-w-3xl w-[95%]',
    large: 'max-w-6xl w-[95%]',
  };

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
      setShouldRender(false);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div className={`bg-white rounded-xl shadow-xl ${modalSize[size]} h-fit max-h-[95%] relative pl-6 pr-3`}>
        <div onClick={onClose} className="round-button">
          X
        </div>
        <div className="max-h-[90vh] overflow-y-auto py-8 scroll-visible-y pr-3">
          {title && <Title className="mb-8" title={title} />}
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
