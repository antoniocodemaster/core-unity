import ContainerBox from '../../../components/UI/ContainerBox';
import Breadcrumb from '../../../components/UI/Breadcrumb';
import Title from '../../../components/typography/Title';
import Text from '../../../components/typography/Text';

const breadcrumbItems = [
  { label: 'Admin Dashboard', path: '/admin-dashboard' },
  { label: 'Tasks', path: '/admin-dashboard/tasks' },
];

const SettingsTasksPage = () => {
  return (
    <>
      <ContainerBox>
        <Breadcrumb items={breadcrumbItems} />
        <Title title="Configuración de Tareas" style="PageTitle" />
        <Text>Aquí puedes configurar las tareas de tu empresa.</Text>
      </ContainerBox>
    </>
  );
};
export default SettingsTasksPage;
