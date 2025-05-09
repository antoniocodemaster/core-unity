import Modal from '../UI/Modal';
import useContactsState from '../../lib/states/ContactsState';
import UpsertContactsForm from '../foms/UpsertContactsForm';
import Button from '../UI/Button';
import { useRef } from 'react';
import { ContactSchema } from '../../lib/schemas/contacts-schemas';

const UpsertContactsModal = () => {
  const { isUpsertContactModalOpen, setIsUpsertContactModalOpen } =
    useContactsState();
  const formRef = useRef<HTMLFormElement>(null);

  const handleClose = () => {
    setIsUpsertContactModalOpen(false);
  };

  const handleSubmit = () => {
    formRef.current?.requestSubmit();
  };

  const handleFormSubmit = (data: ContactSchema) => {
    console.log('Form submitted:', data);
    // Here you can add your logic to save the contact
    handleClose();
  };

  return (
    <Modal
      isOpen={isUpsertContactModalOpen}
      onClose={() => setIsUpsertContactModalOpen(false)}
      title="Agregar Contacto"
    >
      <UpsertContactsForm ref={formRef} onSubmit={handleFormSubmit} />

      <div className="mt-6 flex gap-2 justify-end">
        <Button variant="danger" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Agregar
        </Button>
      </div>
    </Modal>
  );
};

export default UpsertContactsModal;
