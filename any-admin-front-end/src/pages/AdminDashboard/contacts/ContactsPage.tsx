import Title from '../../../components/typography/Title';
import Text from '../../../components/typography/Text';
import ContainerBox from '../../../components/UI/ContainerBox';
import { fakeContacts as contacts } from '../../../lib/fakes/contacts';
import ContactsList from '../../../components/contacts/ContactsList';

const ContactsPage = () => {
  return (
    <>
      <ContainerBox>
        <Title title="My Contacts" style="PageTitle" />
        <Text className="mb-8">
          Welcome to your contacts page. Here you can see all your contacts and
          manage them.
        </Text>

        <ContactsList contacts={contacts} />

      </ContainerBox>
    </>
  );
};

export default ContactsPage;
