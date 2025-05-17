import Title from '../../../components/typography/Title';
import ContainerBox from '../../../components/UI/ContainerBox';
import Text from '../../../components/typography/Text';
import { Link } from 'react-router-dom';
import { stores } from '../../../lib/fakes/stores';

const PointOfSalesPage = () => {
  return (
    <>
      {stores.map((store) => (
        <ContainerBox key={store.id}>
          <Link to={`/admin-dashboard/point-of-sales/${store.id}`}>
            <Title title={store.name} style="SectionTitle" />
          </Link>
          <Text>{store.address}</Text>
        </ContainerBox>
      ))}
    </>
  );
};

export default PointOfSalesPage;
