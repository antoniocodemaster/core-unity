import { useParams } from 'react-router-dom';
import ContainerBox from '../../../components/UI/ContainerBox';
import Title from '../../../components/typography/Title';
import Text from '../../../components/typography/Text';
import Breadcrumb from '../../../components/UI/Breadcrumb';

const breadcrumbItems = [
  { label: 'Admin Dashboard', path: '/admin-dashboard' },
  { label: 'Contacts', path: '/admin-dashboard/contacts' },
];

const SingleContactPage = () => {
  const { id } = useParams();

  return (
    <>
      <ContainerBox>
        <Breadcrumb items={breadcrumbItems} />
        <Title title="Contact" style="PageTitle" />
        <Text>Showing contact with ID: {id}</Text>
      </ContainerBox>
    </>
  );
};

export default SingleContactPage;
