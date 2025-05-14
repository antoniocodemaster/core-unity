import Title from '../../../components/typography/Title';
import Breadcrumb from '../../../components/UI/Breadcrumb';
import ContainerBox from '../../../components/UI/ContainerBox';
import Text from '../../../components/typography/Text';
import { useParams } from 'react-router-dom';

const breadcrumbItems = [
  { label: 'Admin Dashboard', path: '/admin-dashboard' },
  { label: 'Punto de Venta', path: '/admin-dashboard/point-of-sales' },
];

const SinglePointOfSalesPage = () => {
  const { id } = useParams();

  return (
    <>
      <ContainerBox>
        <Breadcrumb items={breadcrumbItems} />
        <Title title="Punto de Venta" style="PageTitle" />
        <Text>Showing point of sales with ID: {id}</Text>
      </ContainerBox>
    </>
  );
};

export default SinglePointOfSalesPage;
