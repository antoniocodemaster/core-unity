import Title from '../../../components/typography/Title';
import Text from '../../../components/typography/Text';
import ContainerBox from '../../../components/UI/ContainerBox';
import { fakeContacts as contacts } from '../../../lib/fakes/contacts';
import Table from '../../../components/UI/Table';
import Button from '../../../components/UI/Button';

const ContactsPage = () => {
  const columns = [
    { key: 'primerNombre', label: 'Nombre' },
    { key: 'apellido', label: 'Apellido' },
    { key: 'telefonoPrincipal', label: 'Teléfono' },
    { key: 'correoElectronico', label: 'Email' },
    { key: 'direccion', label: 'Dirección' },
    { key: 'ciudad', label: 'Ciudad' },
    { key: 'tipoContacto', label: 'Tipo de Contacto' },
  ];

  const options = {
    viewItem: '/admin-dashboard/contacts',
    editItem: true,
    deleteItem: true,
  };

  return (
    <>
      <ContainerBox>
        <Title title="Mis Contactos" style="PageTitle" />
        <Text className="mb-8">
          Aquí puedes ver todos tus contactos y gestionarlos.
        </Text>

        <Title title="Contactos" style="SectionTitle" />
        <Table columns={columns} tableItems={contacts} options={options} />
        <Button className="mt-4">Agregar Contacto</Button>
      </ContainerBox>
    </>
  );
};

export default ContactsPage;
