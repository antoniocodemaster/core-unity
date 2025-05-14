import Title from '../../../components/typography/Title';
import ContainerBox from '../../../components/UI/ContainerBox';
import Tabs from '../../../components/UI/Tabs';
import WarehouseTab from '../../../components/inventory/WarehouseTab';
import StoreTab from '../../../components/inventory/StoreTab';
import Breadcrumb from '../../../components/UI/Breadcrumb';

const breadcrumbItems = [
  { label: 'Admin Dashboard', path: '/admin-dashboard' },
  { label: 'Inventario', path: '/admin-dashboard/inventory' },
];

const SingleInventoryPage = () => {
  const tabItems = [
    {
      label: 'Bodega',
      value: 'bodega',
      content: <WarehouseTab />,
    },
    {
      label: 'Tienda',
      value: 'tienda',
      content: <StoreTab />,
    },
  ];

  return (
    <>
      <ContainerBox>
        <Breadcrumb items={breadcrumbItems} />
        <Title className="mb-4" title="Tienda 2" style="PageTitle" />
        <Tabs tabs={tabItems} initialTab="bodega" />
      </ContainerBox>
    </>
  );
};

export default SingleInventoryPage;
