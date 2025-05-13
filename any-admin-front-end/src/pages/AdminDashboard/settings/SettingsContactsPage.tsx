import ContainerBox from '../../../components/UI/ContainerBox';
import Breadcrumb from '../../../components/UI/Breadcrumb';
import Title from '../../../components/typography/Title';
import Text from '../../../components/typography/Text';

const breadcrumbItems = [
  { label: 'Admin Dashboard', path: '/admin-dashboard' },
  { label: 'Contacts', path: '/admin-dashboard/contacts' },
];

const SettingsContactsPage = () => {
  return (
    <>
      <ContainerBox>
        <Breadcrumb items={breadcrumbItems} />
        <Title title="Configuración de Contactos" style="PageTitle" />
        <Text>Aquí puedes configurar los contactos de tu empresa.</Text>
      </ContainerBox>
    </>
  );
};

export default SettingsContactsPage;
