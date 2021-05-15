import { ReactNode, useEffect, useState } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, setIsOpen, children }: ModalProps){

  const [ modalStatus, setModalStatus ] = useState(false)
  const [ open, setOpen ] = useState(false)

  useEffect(() => {
    if (isOpen !== open) {
      setModalStatus(open)
    }
  },[ ])

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={() => setIsOpen(!isOpen)}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
}

