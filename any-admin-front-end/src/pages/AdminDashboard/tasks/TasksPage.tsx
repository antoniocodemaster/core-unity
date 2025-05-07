import Title from '../../../components/typography/Title';
import Text from '../../../components/typography/Text';
import ContainerBox from '../../../components/UI/ContainerBox';
import { fakeTasks as tasks } from '../../../lib/fakes/tasks';
import Table from '../../../components/UI/Table';
import Button from '../../../components/UI/Button';

const TasksPage = () => {
  const columns = [
    { key: 'titulo', label: 'Título' },
    { key: 'descripcion', label: 'Descripción' },
    { key: 'estado', label: 'Estado' },
    { key: 'asignadoA', label: 'Asignado a' },
    { key: 'creadoPor', label: 'Creado por' },
  ];

  const options = {
    viewItem: '/admin-dashboard/tasks',
    editItem: true,
    deleteItem: true,
  };

  return (
    <>
      <ContainerBox>
        <Title title="Mis Tareas" style="PageTitle" />
        <Text className="mb-8">
          Aquí puedes ver todas tus tareas y gestionarlas.
        </Text>

        <Title title="Tareas" style="SectionTitle" />
        <Table columns={columns} tableItems={tasks} options={options} />
        <Button className="mt-4">Agregar Tarea</Button>
      </ContainerBox>
    </>
  );
};

export default TasksPage;
