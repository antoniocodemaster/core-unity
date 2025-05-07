import { Contacto as Contact } from '../../types/contactos';
import Title from '../typography/Title';
import Button from '../UI/Button';
import Table from '../UI/Table';
interface ContactsListProps {
  contacts: Contact[];
}

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
  viewContact: '/admin-dashboard/contacts',
  editContact: true,
  deleteContact: true,
};

const ContactsList = ({ contacts }: ContactsListProps) => {
  return (
    <>
      <Title title="Contacts" style="SectionTitle" />
      <Table columns={columns} tableItems={contacts} options={options} />
      <Button className="mt-4">Add Contact</Button>
    </>
  );
};

export default ContactsList;
