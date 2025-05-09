import Modal from '../UI/Modal';
import useContactsState from '../../lib/states/ContactsState';
import UpsertContactsForm from '../foms/UpsertContactsForm';
import Button from '../UI/Button';

const UpsertContactsModal = () => {
  const { isUpsertContactModalOpen, setIsUpsertContactModalOpen } =
    useContactsState();

  const handleClose = () => {
    setIsUpsertContactModalOpen(false);
  };

  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <Modal
      isOpen={isUpsertContactModalOpen}
      onClose={() => setIsUpsertContactModalOpen(false)}
      title="Agregar Contacto"
    >
      <UpsertContactsForm />

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
