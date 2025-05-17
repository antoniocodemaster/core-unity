import Title from '../../../components/typography/Title';
import Text from '../../../components/typography/Text';
import ContainerBox from '../../../components/UI/ContainerBox';
import { fakeTasks as tasks } from '../../../lib/fakes/tasks';
import Table from '../../../components/UI/Table';
import Button from '../../../components/UI/Button';
import useTasksState from '../../../lib/states/TasksState';

const TasksPage = () => {
  const { setIsUpsertTaskModalOpen, setSelectedTask } = useTasksState();

  const columns = [
    { key: 'titulo', label: 'Título' },
    { key: 'descripcion', label: 'Descripción' },
    { key: 'estado', label: 'Estado' },
    { key: 'asignadoA', label: 'Asignado a' },
    { key: 'creadoPor', label: 'Creado por' },
  ];

  const options = {
    viewItem: '/admin-dashboard/tasks',
    editItem: (item: any) => {
      setSelectedTask(item);
      setIsUpsertTaskModalOpen(true);
    },
    deleteItem: (item: any) => {
      console.log('deleteItem', item);
    },
  };

  return (
    <>
      <ContainerBox>
        <Title title="Lista de Tareas" style="SectionTitle" />
        <Table columns={columns} tableItems={tasks} options={options} />
        <Button className="mt-4" onClick={() => setIsUpsertTaskModalOpen(true)}>
          Agregar Tarea
        </Button>
      </ContainerBox>
    </>
  );
};

export default TasksPage;
