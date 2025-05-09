import Modal from '../UI/Modal';
import useTasksState from '../../lib/states/TasksState';
import UpsertTasksForm from '../foms/UpsertTasksForm';

const UpsertTasksModal = () => {
  const { isUpsertTaskModalOpen, setIsUpsertTaskModalOpen } = useTasksState();

  return (
    <Modal
      isOpen={isUpsertTaskModalOpen}
      onClose={() => setIsUpsertTaskModalOpen(false)}
    >
      <UpsertTasksForm />
    </Modal>
  );
};

export default UpsertTasksModal;
