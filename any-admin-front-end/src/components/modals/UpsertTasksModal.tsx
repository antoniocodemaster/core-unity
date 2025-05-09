import Modal from '../UI/Modal';
import useTasksState from '../../lib/states/TasksState';
import UpsertTasksForm from '../foms/UpsertTasksForm';
import Button from '../UI/Button';

const UpsertTasksModal = () => {
  const { isUpsertTaskModalOpen, setIsUpsertTaskModalOpen } = useTasksState();

  const handleClose = () => {
    setIsUpsertTaskModalOpen(false);
  };

  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <Modal
      isOpen={isUpsertTaskModalOpen}
      onClose={handleClose}
      title="Agregar Tarea"
    >
      <UpsertTasksForm />

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

export default UpsertTasksModal;
