import { createContext, createElement, useCallback, useContext, useMemo, useState } from 'react';

const WhatsAppModalContext = createContext(null);

export function WhatsAppModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openModal = useCallback((service = '') => {
    setSelectedService(service);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      selectedService,
      openModal,
      closeModal,
    }),
    [closeModal, isOpen, openModal, selectedService],
  );

  return createElement(WhatsAppModalContext.Provider, { value }, children);
}

export function useWhatsAppModal() {
  const context = useContext(WhatsAppModalContext);
  if (!context) {
    throw new Error('useWhatsAppModal must be used inside WhatsAppModalProvider');
  }
  return context;
}
