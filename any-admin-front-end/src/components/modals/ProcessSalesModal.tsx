import usePointOfSalesState from '../../lib/states/PointOfSalesState';
import ProcessSalesForm from '../foms/ProcessSalesForm';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

const ProcessSalesModal = () => {
  const { isProcessSalesModalOpen, setIsProcessSalesModalOpen } =
    usePointOfSalesState();

  const handleClose = () => {
    setIsProcessSalesModalOpen(false);
  };

  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <Modal
      isOpen={isProcessSalesModalOpen}
      onClose={() => setIsProcessSalesModalOpen(false)}
      title="Procesar Ventas"
      size="large"
    >
      <ProcessSalesForm />

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

export default ProcessSalesModal;
