import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Contacto as Contact } from '../../types/contactos';

interface ContactsState {
  contacts: Contact[];
  setContacts: (contacts: Contact[]) => void;
  selectedContact: Contact | null;
  setSelectedContact: (contact: Contact | null) => void;
  isUpsertContactModalOpen: boolean;
  setIsUpsertContactModalOpen: (isOpen: boolean) => void;
}

const useContactsState = create<ContactsState>()(
  devtools(
    (set) => ({
      contacts: [],
      setContacts: (contacts: Contact[]) => set({ contacts }),
      selectedContact: null,
      setSelectedContact: (contact: Contact | null) => set({ selectedContact: contact }),
      isUpsertContactModalOpen: false,
      setIsUpsertContactModalOpen: (isOpen: boolean) => set({ isUpsertContactModalOpen: isOpen }),
    }),
    { name: 'ContactsState' }
  )
);

export default useContactsState;
