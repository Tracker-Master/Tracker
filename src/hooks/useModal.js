import { useState } from 'react';

export const useModal = () => {
  const [open, setOpen] = useState({
    message: false,
    warning: false,
    error: false
  });
  const handleStateModal = (type) => {
    switch (type) {
      case 'message':
        setOpen({ ...open, message: !open.message })
        break;
      case 'warning':
        setOpen({ ...open, warning: !open.warning })
        break;
      case 'error':
        setOpen({ ...open, error: !open.error })
        break;
    }
  } 
  return [open, handleStateModal];
};
