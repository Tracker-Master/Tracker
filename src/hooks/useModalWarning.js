import { useState, useEffect } from 'react';

export const useModalWarning = () => {
  const [open, setOpen] = useState(false);
  const handleStateModal = () => setOpen(!open);
  return [open, handleStateModal];
};
