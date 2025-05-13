import ContainerBox from '../../../components/UI/ContainerBox';
import Breadcrumb from '../../../components/UI/Breadcrumb';
import Title from '../../../components/typography/Title';
import Text from '../../../components/typography/Text';

const breadcrumbItems = [
  { label: 'Admin Dashboard', path: '/admin-dashboard' },
  { label: 'Inventory', path: '/admin-dashboard/inventory' },
];

const SettingsInventoryPage = () => {
  return (
    <>
      <ContainerBox>
        <Breadcrumb items={breadcrumbItems} />
        <Title title="Configuración de Inventario" style="PageTitle" />
        <Text>Aquí puedes configurar el inventario de tu empresa.</Text>
      </ContainerBox>
    </>
  );
};
export default SettingsInventoryPage;