import Title from '../../../components/typography/Title';
import ContainerBox from '../../../components/UI/ContainerBox';
import { fakeContacts as contacts } from '../../../lib/fakes/contacts';
import Table from '../../../components/UI/Table';
import Button from '../../../components/UI/Button';
import useContactsState from '../../../lib/states/ContactsState';

const ContactsPage = () => {
  const { setIsUpsertContactModalOpen, setSelectedContact } =
    useContactsState();

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
    editItem: (item: any) => {
      console.log('editItem', item);
      setSelectedContact(item);
      setIsUpsertContactModalOpen(true);
    },
    deleteItem: (item: any) => {
      console.log('deleteItem', item);
    },
  };

  return (
    <>
      <ContainerBox>
        <Title title="Lista de Contactos" style="SectionTitle" />
        <Table columns={columns} tableItems={contacts} options={options} />
        <Button
          className="mt-4"
          onClick={() => setIsUpsertContactModalOpen(true)}
        >
          Agregar Contacto
        </Button>
      </ContainerBox>
    </>
  );
};

export default ContactsPage;
