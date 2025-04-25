import React from 'react';
import Title from '../typography/Title';
import Button from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
        <div onClick={onClose} className="round-button">
          X
        </div>
        {title && <Title title={title} />}
        {children}
        <div className="mt-6">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
