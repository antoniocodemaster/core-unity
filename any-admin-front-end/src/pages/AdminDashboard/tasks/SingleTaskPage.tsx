import { useParams } from 'react-router-dom';
import Title from '../../../components/typography/Title';
import ContainerBox from '../../../components/UI/ContainerBox';
import Breadcrumb from '../../../components/UI/Breadcrumb';
import Text from '../../../components/typography/Text';

const breadcrumbItems = [
  { label: 'Admin Dashboard', path: '/admin-dashboard' },
  { label: 'Tareas', path: '/admin-dashboard/tasks' },
];

const SingleTaskPage = () => {
  const { id } = useParams();

  return (
    <>
      <ContainerBox>
        <Breadcrumb items={breadcrumbItems} />
        <Title title="Tarea" style="PageTitle" />
        <Text>Showing task with ID: {id}</Text>
      </ContainerBox>
    </>
  );
};

export default SingleTaskPage;
