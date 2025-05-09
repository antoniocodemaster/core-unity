import Modal from '../UI/Modal';
import useContactsState from '../../lib/states/ContactsState';
import UpsertContactsForm from '../foms/UpsertContactsForm';


const UpsertContactsModal = () => {
  const { isUpsertContactModalOpen, setIsUpsertContactModalOpen } =
    useContactsState();

  return (
    <Modal
      isOpen={isUpsertContactModalOpen}
      onClose={() => setIsUpsertContactModalOpen(false)}
      title="Agregar Contacto"
    >
      <UpsertContactsForm />
    </Modal>
  );
};

export default UpsertContactsModal;
