import { useParams } from 'react-router-dom';
import ContainerBox from '../../../components/UI/ContainerBox';
import Title from '../../../components/typography/Title';
import Text from '../../../components/typography/Text';

const SingleContactPage = () => {
  const { id } = useParams();

  return (
    <>
      <ContainerBox>
        <Title title="Contact" style="PageTitle" />
        <Text>Showing contact with ID: {id}</Text>
      </ContainerBox>
    </>
  );
};

export default SingleContactPage;
