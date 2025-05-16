import api from './api';
import { Contacto as Contact } from '../types/contactos';

export const getContactsApi = async (): Promise<Contact[]> => {
  try {
    const response = await api.get('/contacts');
    return response.data;
  } catch (error) {
    console.error('Error getting contacts', error);
    throw error;
  }
};

export const createContactApi = async (contact: Contact) => {
  try {
    const response = await api.post('/contacts', contact);
    return response.data;
  } catch (error) {
    console.error('Error creating contact', error);
    throw error;
  }
};

export const updateContactApi = async (contact: Contact) => {
  try {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    return response.data;
  } catch (error) {
    console.error('Error updating contact', error);
    throw error;
  }
};

export const deleteContactApi = async (id: string) => {
  try {
    const response = await api.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting contact', error);
    throw error;
  }
};
