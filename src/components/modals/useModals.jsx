import { useState } from 'react';


export const useModals = (initialValue = true) => {
  const [isOpen ,setIsOpen] =useState (initialValue)

  const openModal =() => setIsOpen (true);
  const closeModal =() =>setIsOpen(false);
  
  return[isOpen, openModal, closeModal];
}
