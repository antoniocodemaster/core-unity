import Title from '../../../components/typography/Title';
import ContainerBox from '../../../components/UI/ContainerBox';
import Text from '../../../components/typography/Text';
import { Link } from 'react-router-dom';

const stores = [
  {
    id: '1',
    name: 'Tienda 1',
    address: '123 Main St, Anytown, USA',
  },
  {
    id: '2',
    name: 'Tienda 2',
    address: '456 Main St, Anytown, USA',
  },
  {
    id: '3',
    name: 'Tienda 3',
    address: '789 Main St, Anytown, USA',
  },
];

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
