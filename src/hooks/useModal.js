import { useState, useEffect } from 'react';

export const useModal = () => {

  const [open, setOpen] = useState(false);

  const handleStateModal = () => setOpen(!open);

  return [open, handleStateModal];

}