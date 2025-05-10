import Title from '../../../components/typography/Title';
import ContainerBox from '../../../components/UI/ContainerBox';
import Tabs from '../../../components/UI/Tabs';
import WarehouseTab from '../../../components/inventory/WarehouseTab';
import StoreTab from '../../../components/inventory/StoreTab';

const InvetoryPage = () => {
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
        <Title title="Inventario" style="PageTitle" />
        <Tabs tabs={tabItems} initialTab="bodega" />
      </ContainerBox>
    </>
  );
};

export default InvetoryPage;
