import Title from '../../../components/typography/Title';
import ContainerBox from '../../../components/UI/ContainerBox';
import { Link } from 'react-router-dom';
import Text from '../../../components/typography/Text';
import { stores } from '../../../lib/fakes/stores';

const InvetoryPage = () => {
  return (
    <>
      {stores.map((store) => (
        <ContainerBox key={store.id}>
          <Link to={`/admin-dashboard/inventory/${store.id}`}>
            <Title title={store.name} style="SectionTitle" />
          </Link>
          <Text>{store.address}</Text>
        </ContainerBox>
      ))}
    </>
  );
};

export default InvetoryPage;
