import { Contact } from '../../types/contats';
import { Link } from 'react-router-dom';
import Text from '../typography/Text';
import Title from '../typography/Title';
import Button from '../UI/Button';
interface ContactsListProps {
  contacts: Contact[];
}

const ContactsList = ({ contacts }: ContactsListProps) => {
  return (
    <>
      <Title title="Contacts" style="SectionTitle" />
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <Link to={`/admin-dashboard/contacts/${contact.id}`}>
              <Text>
                {contact.firstName} {contact.lastName}
              </Text>
            </Link>
          </li>
        ))}
      </ul>
      <Button className="mt-4">Add Contact</Button>
    </>
  );
};

export default ContactsList;
