import Title from '../../../components/typography/Title';
import Breadcrumb from '../../../components/UI/Breadcrumb';
import ContainerBox from '../../../components/UI/ContainerBox';
import Text from '../../../components/typography/Text';
import { useParams } from 'react-router-dom';
import Table from '../../../components/UI/Table';
import { sales } from '../../../lib/fakes/sales';
import Button from '../../../components/UI/Button';
import usePointOfSalesState from '../../../lib/states/PointOfSalesState';

const breadcrumbItems = [
  { label: 'Admin Dashboard', path: '/admin-dashboard' },
  { label: 'Punto de Venta', path: '/admin-dashboard/point-of-sales' },
];

const SinglePointOfSalesPage = () => {
  const { id } = useParams();

  const { setIsProcessSalesModalOpen } = usePointOfSalesState();

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'total', label: 'Precio Total' },
    { key: 'products', label: 'Productos' },
  ];

  return (
    <>
      <ContainerBox>
        <Breadcrumb items={breadcrumbItems} />
        <Title title="Tienda 1" style="PageTitle" />
        <Text>Showing point of sales with ID: {id}</Text>

        <Title className="mt-8" title="Ventas del dia" style="SectionTitle" />
        <Table columns={columns} tableItems={sales} />
        <Button
          className="mt-4"
          onClick={() => setIsProcessSalesModalOpen(true)}
        >
          Procesar Ventas
        </Button>
      </ContainerBox>
    </>
  );
};

export default SinglePointOfSalesPage;
