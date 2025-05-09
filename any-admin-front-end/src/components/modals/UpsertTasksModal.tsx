import Modal from '../UI/Modal';
import useTasksState from '../../lib/states/TasksState';
import UpsertTasksForm from '../foms/UpsertTasksForm';
import Button from '../UI/Button';
import { useRef } from 'react';
import { TasksSchema } from '../../lib/schemas/tasks-schemas';
const UpsertTasksModal = () => {
  const { isUpsertTaskModalOpen, setIsUpsertTaskModalOpen } = useTasksState();
  const formRef = useRef<HTMLFormElement>(null);

  const handleClose = () => {
    setIsUpsertTaskModalOpen(false);
  };

  const handleSubmit = () => {
    formRef.current?.requestSubmit();
  };

  const handleFormSubmit = (data: TasksSchema) => {
    console.log('Form submitted:', data);
    // Here you can add your logic to save the task
    handleClose();
  };

  return (
    <Modal
      isOpen={isUpsertTaskModalOpen}
      onClose={handleClose}
      title="Agregar Tarea"
    >
      <UpsertTasksForm ref={formRef} onSubmit={handleFormSubmit} />

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
