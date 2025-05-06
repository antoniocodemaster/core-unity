import { create } from 'zustand';
import { Contact } from '../../types/contats';

interface ContactsState {
  contacts: Contact[];
  setContacts: (contacts: Contact[]) => void;
  selectedContact: Contact | null;
  setSelectedContact: (contact: Contact | null) => void;
  isUpsertContactModalOpen: boolean;
  setIsUpsertContactModalOpen: (isOpen: boolean) => void;
}

const useContactsState = create<ContactsState>((set) => ({
  contacts: [],
  setContacts: (contacts: Contact[]) => set({ contacts }),
  selectedContact: null,
  setSelectedContact: (contact: Contact | null) =>
    set({ selectedContact: contact }),
  isUpsertContactModalOpen: false,
  setIsUpsertContactModalOpen: (isOpen: boolean) =>
    set({ isUpsertContactModalOpen: isOpen }),
}));

export default useContactsState;
